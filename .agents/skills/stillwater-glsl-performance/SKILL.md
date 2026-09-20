---
name: stillwater-glsl-performance
description: Optimize or review GLSL and Three.js custom shaders in Stillwater Aquarium without losing water, foliage, lighting, or motion identity. Use whenever the user mentions shader cost, fragment workload, GLSL, onBeforeCompile, water lighting, foliage detail, shader compile errors, branching, uniforms, varyings, or moving work between vertex and fragment stages. Read stillwater-workflow and stillwater-performance first.
compatibility: Requires the repository's vendored Three.js/WebGL2 runtime and browser smoke access; shaders and assets remain offline.
---

# Stillwater GLSL performance

Treat shader work as a visual contract plus a measured per-stage budget. Use **census → isolate → change one term → compile in browser → compare timing and image**. A shader that is faster but flattens the aquarium is a failed change unless it is an explicit emergency quality rung.

## Owners and current data flow

Read `.agents/skills/stillwater-workflow/SKILL.md` and `.agents/skills/stillwater-performance/SKILL.md` first. Then inspect:

- `scenes/riverscape/src/water.js`: shared `waterTime`, current field, `surfaceLightGLSL`, and `waterLitShader()`.
- `scenes/riverscape/src/foliage.js`: strand vertex motion, custom normals, leaf fragment detail, thin-blade coverage, and water-lit foliage.
- `scenes/riverscape/src/environment.js`: moss/surface custom fragments, water-lit fronds, environment/post shader.
- `scenes/riverscape/src/fish.js` and `fish-anatomy.js`: swimming vertex code, fish materials, depth material.
- `scenes/riverscape/src/main.js`: post-processing shader, render target, timer query, and frame loop.

The project uses Three.js material patching with `onBeforeCompile`, GLSL ES 1.00-style `attribute`/`varying` in the current material paths, and shared uniforms. Preserve that contract unless a complete WebGL2 migration is intentionally scoped.

## Shader census before editing

For every candidate shader, record:

- Stage and invocation count: vertex per vertex versus fragment per covered sample/pixel.
- Material count, draw calls, framebuffer dimensions, MSAA/AO samples, and whether the pass is fullscreen.
- Uniforms, attributes, varyings, texture reads, dynamic loops, trigonometric/noise calls, derivatives, branches, and light-loop hooks.
- Which visual feature each term owns: current motion, water modulation, moss, normal relief, thin-leaf transmission, fish shimmer, AO, tone mapping, or vignette.
- Browser renderer/backend, GPU timer availability, frame-interval p50/p95, and a screenshot at a fixed viewport.

`renderer.info.render.calls`, triangles, and memory counters are supporting evidence, not a substitute for identifying a per-pixel shader bottleneck.

## Stage placement rules

- Put position/deformation work in the vertex stage when interpolation preserves the intended result. Foliage strand bending is already vertex work; keep its shared `waterTime` and geometry-normal correction coherent.
- Keep screen-space effects, derivatives (`dFdx`/`dFdy`), per-pixel normals, alpha coverage, and fine water/moss variation in the fragment stage because moving them to vertices changes the image.
- A varying is interpolated per fragment. Do not pass high-frequency or unnecessary data through varyings; pass the smallest representation that preserves the effect.
- A uniform is constant for a draw. Update shared clock uniforms once from JavaScript; do not allocate new uniform objects or rebuild shader strings every frame.
- Precompute static coefficients in JavaScript/template generation when they do not vary per vertex or pixel. Keep numeric GLSL literals typed as floats (`1.0`, not `1`) and preserve the generated shader's compile portability.

## Fragment-cost reductions

Use the cheapest change that retains the named feature:

1. Reduce framebuffer scale or optional AO samples before deleting authored surface response; fragment cost follows covered pixel count.
2. Reduce repeated math by precomputing common values, reusing dot products, and avoiding duplicate `sin`, `cos`, `pow`, normalization, and texture reads.
3. Prefer algebraic `mix`, `clamp`, `step`, or `smoothstep` when they express the same continuous result. Keep a branch when it protects correctness, alpha coverage, precision, or a materially different visual region; branchless code is not automatically faster on every GPU.
4. Bound loops with compile-time constants and lower sample count only with a screenshot and timing comparison. Never introduce a data-dependent unbounded loop.
5. Fade high-frequency detail by screen footprint using derivatives or an explicit distance/LOD signal. Preserve broad water drift and contact cues while letting subpixel vein/micro detail disappear gracefully.
6. Keep precision explicit where raw GLSL needs it. Use the minimum precision that passes visual and artifact checks; do not lower precision merely because a mobile example did.
7. Keep one shared `waterTime` and coherent phase math across plants, water light, food, and fish. Removing a clock term can make motion look frozen or desynchronized even if GPU time improves.

## Three.js patching rules

- Patch an existing material only at stable chunks and keep `customProgramCacheKey()` unique whenever defines/branches produce different programs.
- Use the existing `waterLitShader()` hook for direct-light modulation instead of duplicating light-loop code across materials.
- Preserve `MeshPhysicalMaterial`/custom foliage behavior when it owns thin-blade transmission, normal relief, or water response. A `MeshStandardMaterial` or `MeshBasicMaterial` replacement is a named quality fallback, not a neutral optimization.
- Dispose temporary render targets, PMREM resources, geometries, and materials at their owner boundary. A shader edit must not leak a new program or texture on reload.
- Never edit `aquarium.js`; rebuild from source so embedded offline assets and generated code stay synchronized.

## Compile and visual verification

A Node syntax check cannot compile GLSL. After a shader edit:

1. Run `npm run validate` for JavaScript/source and deterministic behavior checks.
2. Serve the repository and open `index.html?diagnostics=1` in a browser.
3. Capture console errors and page errors during a cold load and reload; Three.js shader compile errors must fail the smoke check.
4. Compare fixed screenshots of foreground rocks/wood, water-lit surfaces, foliage edges/undersides, fish, and shadows. Check reduced motion, resize, hidden state, and profile reload when the shader is profile-dependent.
5. Re-measure framebuffer, draw calls, triangles, GPU query/service time, frame-interval p50/p95, and resource counts. Report headless/service-time caveats separately from monitor FPS.

## Practical review checklist

- Does the change reduce a measured invocation cost, or only make the GLSL look shorter?
- Is the expensive code fragment-stage, fullscreen, or inside a light loop? If yes, quantify pixel/light/sample multiplication.
- Could vertex interpolation preserve it? If not, explain the aliasing or derivative reason.
- Are uniforms updated without per-frame allocations and are varyings minimal?
- Are float types, coordinate spaces, normals, alpha coverage, color space, and water-time phase correct?
- Does `onBeforeCompile` still find its target chunks on this vendored Three.js revision?
- Are custom program cache keys and resource disposal correct?
- Does the visual feature named in the baseline remain visible at Fluid settings?

## Article-derived reference

- Hon Tran, [Three.js Performance Optimization](https://www.hontran.dev/blog/three-js-performance-optimization): fragment cost follows pixels, cap drawing resolution, keep materials/geometries reusable, and move expensive custom work out of fragments where semantics permit.
- Hon Tran, [GLSL Shaders Tutorial](https://www.hontran.dev/blog/glsl-shaders-tutorial-for-web-developers): vertex/fragment responsibilities, uniforms/attributes/varyings, coordinate spaces, typed GLSL values, interpolation, `mix`/`smoothstep`, branch divergence, and vertex-over-fragment placement.

Use these as technique references. The repository's water, foliage, moss, and fish behavior are the acceptance contract.

## Completion criterion

A shader optimization is complete only when the shader compiles in the actual browser, the named visual feature survives fixed screenshot comparison, the measured cost improves at the same viewport/profile, the generated bundle validates, and no resource or frame-pacing regression appears.
