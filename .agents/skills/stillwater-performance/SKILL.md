---
name: stillwater-performance
description: Optimize Stillwater Aquarium's Three.js/WebGL runtime with measured, reversible changes. Use whenever the user mentions low FPS, stutter, GPU/CPU load, draw calls, render scale, shadows, memory, startup cost, or integrated-GPU performance in this repository, even when they ask for a general optimization. Read the repository stillwater-workflow skill first.
compatibility: Requires Node/npm and browser smoke access; the runtime must remain offline.
---

# Stillwater performance

Use a **measure → classify → change one lever → validate → compare** loop. The scene is an always-animated wallpaper, so demand rendering is only valid for genuinely static subpaths; do not turn off the aquarium's frame loop to hide a frame-time problem.

## Repository map

Read `.agents/skills/stillwater-workflow/SKILL.md` first. The performance owners are:

- `scenes/riverscape/src/main.js`: renderer, explicit framebuffer sizing, shadow scheduling, render loop, GPU timer, diagnostics.
- `scenes/riverscape/src/render-policy.js`: `PROFILES`, adaptive scale, framebuffer budget, shadow/AO/MSAA/plant budgets.
- `scenes/riverscape/src/frame-loop.js`: timestamp-based animation pacing and invalidation.
- `scenes/riverscape/src/plants.js`, `foliage.js`, `fish.js`, `food.js`, `environment.js`: geometry, batching, materials, custom depth and shader cost.
- `scenes/riverscape/src/diagnostics.js`: opt-in service-time and renderer counters.
- `controls.js`, `LivelyProperties.json`: user-facing settings and Lively value mappings.
- `aquarium.js`: generated output; never edit it directly.

## Baseline before editing

For render changes, open the built app over HTTP with `?diagnostics=1`. Warm it up, then record:

- CSS viewport, actual framebuffer, profile, user render scale, adaptive scale, and device pixel ratio.
- Renderer/backend string and whether the run is headless.
- `renderer.info.render.calls`, triangles, geometries, textures, and programs.
- Mean/median/p95/max render service time, frame-interval p50/p95, and missed deadlines when available.
- Shadow frames, GPU timer availability/disjoint samples, and visible screenshots of rocks, wood, foliage, fish, and shadows.

Synchronous readback or headless service time measures submitted render work; it is not a physical monitor-FPS claim. Compare like-for-like viewport, profile, camera, fish count, light, and requested rate.

## Classify the bottleneck

Choose the largest measured constraint before changing code:

1. **Draw-call bound** — high `render.calls` relative to the scene budget. First inspect repeated meshes and materials. This project already uses `InstancedMesh` for repeated fronds/fronds and `GeometryBatch` for plant geometry; extend those owners rather than adding a generic batching layer.
2. **Fill-rate/pixel bound** — service time follows framebuffer area. Adjust the explicit render scale or adaptive multiplier; keep CSS size and scene geometry unchanged. `main.js` intentionally calls `renderer.setPixelRatio(1)` and computes the drawing buffer with `framebufferSize()`.
3. **Shadow bound** — shadow pass or updates dominate. Keep one useful key shadow for scene depth; lower map size, update frequency, or caster scope through `render-policy.js` before removing the pass.
4. **Shader/material bound** — custom `onBeforeCompile`, `MeshPhysicalMaterial`, water lighting, foliage detail, AO, or post-processing dominates. Reduce optional terms or samples only after a screenshot comparison; do not silently replace authored materials with flat/unlit fallbacks.
5. **CPU/JavaScript bound** — scene construction, per-frame allocations, simulation, or readbacks dominate. Reuse vectors/arrays, keep simulation independent from render cadence, and avoid synchronous GPU readbacks in the normal loop.
6. **Memory/startup bound** — `renderer.info.memory` climbs or startup stalls. Reuse assets, dispose temporary PMREM/build resources, and dispose owned geometry/material/texture resources when a scene or transient object is removed.

## Safe optimization order

Apply one rung at a time and keep the prior rung reversible:

1. Remove redundant draw calls by reusing materials/geometries, `InstancedMesh` for identical geometry, or the existing batch builders for static varied geometry.
2. Reduce framebuffer pixels with the explicit render-scale path. Preserve the separation between profile quality (`settings.resolution`) and user/adaptive framebuffer scale.
3. Lower optional AO/MSAA, shadow resolution, shadow update frequency, or distant background plant detail in `render-policy.js`.
4. Reduce texture payload only through the existing offline asset build. Do not add CDN loaders or a KTX2/Draco pipeline without a complete local decoder/build path and a measured startup-memory benefit.
5. Simplify shader terms only as a named quality rung. Preserve lighting anchors, water modulation, alpha coverage, normal/moss detail, and motion semantics unless the user explicitly accepts a visual fallback.
6. Change geometry density only in the measured far-background owner. Preserve deterministic RNG and foreground geometry contracts.

Adaptive quality must use asynchronous GPU evidence when available, ignore unavailable/disjoint samples, use downward/upward hysteresis, and change one quality axis at a time. A resize is a resource allocation: leave dwell time between policy changes so it cannot oscillate near a threshold.

## Wallpaper-specific guardrails

- Keep `fluid` as the Lively default and preserve its visual identity. `balanced` and `reference` intentionally spend more quality budget.
- Keep `createFrameLoop()` timestamp `dt`, stall cap, and simulation substeps. Never tie fish/water speed to selected FPS or GPU service time.
- Keep shadow rendering enabled when the profile relies on contact/depth cues; use `autoUpdate=false` plus scheduled `needsUpdate` for static intervals.
- Keep all assets local and regenerate `aquarium.js` with `npm run build`/`npm run validate`.
- If a profile or shader budget changes at startup, exercise reload/profile persistence and confirm settings mappings still accept Lively indexes, labels, and values.
- Treat a visual regression as a failed optimization even if service time improves. Capture before/after screenshots and report the tradeoff explicitly.

## Verification

After source edits:

1. Run `npm run validate`.
2. Serve the repository over HTTP and smoke `index.html?diagnostics=1`.
3. Exercise the changed profile/scale/settings path, reload, resize, pause/resume, hidden state, and reduced-motion behavior when relevant.
4. Re-measure the same baseline fields. Confirm no console shader errors, no growing resource counts across reload/rebuild, no generated/source drift, and no offline network dependency.
5. Report changed files, measured deltas, visual tradeoff, renderer/backend, headless caveat, and the next reversible rung. Stop when the predeclared target is met; do not stack speculative optimizations.

## Article-derived reference

The companion sources are:

- Hon Tran, [Three.js Performance Optimization](https://www.hontran.dev/blog/three-js-performance-optimization): measure `renderer.info`; prioritize draw calls, pixel ratio/fill rate, asset memory, disposal, material/light/shadow cost, and adaptive quality.
- Hon Tran, [GLSL Shaders Tutorial](https://www.hontran.dev/blog/glsl-shaders-tutorial-for-web-developers): fragment work scales with covered pixels; move eligible work to vertices, use uniforms/varyings deliberately, and avoid divergent branches.

Apply those ideas through this repository's measured profile and offline constraints, not as a license to change the aquarium's authored look blindly.

## Completion criterion

A performance change is complete only when the source owner, generated bundle, deterministic validation, browser smoke path, before/after measurements, and visual tradeoff all agree. If the bottleneck was not measured, the optimization is not complete.
