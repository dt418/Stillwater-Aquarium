# NixieFX analysis for Stillwater Aquarium

## Recommendation

**Do not add NixieFX as a general render-performance optimization for the current aquarium.**

NixieFX is a credible option for a future, self-contained particle/VFX effect, but it is not a replacement for the aquarium's Three.js renderer or a scene-wide optimizer. Adoption should require an A/B benchmark on the actual Lively/Intel target.

Confidence: high for the architectural recommendation; low-to-medium for any exact FPS delta until measured on the target machine.

## What NixieFX provides

NixieFX is an MIT-licensed npm particle/VFX runtime and editor workflow for PixiJS and Three.js. Effects are exported as JSON plus a manifest and copied assets. The runtime provides `ThreeVfxRenderer`, deterministic simulation, support reports, bounded particle capacities, and an instanced billboard fast path.

Primary sources:

- [Official repository README](https://github.com/azakhary/nixie-fx)
- [Package metadata](https://raw.githubusercontent.com/azakhary/nixie-fx/main/package.json)
- [Official runtime/API guide](https://nixiefx.com/threejs-runtime.md)
- [Official site index](https://nixiefx.com/llms.txt)

Current package metadata reports version `0.1.7` and optional peer ranges `three >=0.184.0 <0.186.0` and `pixi.js >=8.19.0 <9.0.0`.

## Actual performance model

NixieFX is a particle simulation plus a renderer adapter, not a renderer replacement:

1. The shared deterministic particle runner maintains particle state on the CPU.
2. The Three.js adapter samples active particle state on the CPU each update.
3. Eligible billboard emitters write matrices/colors to one `InstancedMesh` draw.
4. Unsupported combinations fall back to one mesh/draw per visible particle.
5. Trails, flipbooks, lit shading, mesh particles, material graphs, unsupported blend/opacity modes, and host material overrides can leave the instanced path.

The fast path is useful when the existing implementation has many particle objects or draw calls. It does not remove CPU simulation, per-particle sampling, instance-buffer writes, transparent overdraw, shader compilation, or asset preload.

Source and performance references:

- [Three runtime and fast-path rules](https://nixiefx.com/threejs-runtime.md#performance)
- [Particle simulation source](https://github.com/azakhary/nixie-fx/blob/main/src/engine/particles.ts)
- [Three renderer source](https://github.com/azakhary/nixie-fx/blob/main/src/runtime/three/renderer.ts)
- [Instanced billboard source](https://github.com/azakhary/nixie-fx/blob/main/src/runtime/three/instancedBillboard.ts)

## Fit with this repository

Stillwater already uses performance-friendly paths:

- Ambient debris and bubbles are one `THREE.Points` object with 780 debris plus 120 bubbles.
- Their motion is computed in the vertex shader from static attributes and `waterTime`; no per-particle scene objects are created each frame.
- Fish bodies and fins use two `THREE.InstancedMesh` objects.
- Plants, gravel, grit, and other repeated geometry are batched or instanced.
- Intel Fluid already disables MSAA/AO and lowers shadow-map work.

Replacing the current 900-particle `THREE.Points` path with NixieFX would likely exchange one GPU particle draw and shader-side motion for CPU simulation, CPU instance writes, and a NixieFX emitter draw. That is not an obvious win. The main Intel costs are more likely framebuffer bandwidth, transparent foliage/fin overdraw, shadows, post-processing, custom fragment shaders, and fish CPU behavior.

**Best use:** a localized authored event effect such as a food sparkle or short bubble burst, kept separate from the ambient particle field. Use one or a few unlit billboard emitters, no trails/flipbooks/material graphs, and verify that `instancedDrawCalls > 0` while `legacyParticleDrawCalls === 0`.

## WebGL, WebGPU, and offline constraints

NixieFX's official backend registry is PixiJS and Three.js; it does not provide a WebGPU backend. Its Three adapter uses GLSL `ShaderMaterial` and `InstancedMesh`. Three.js documents `ShaderMaterial` as a WebGLRenderer feature:

- [NixieFX backend definitions](https://raw.githubusercontent.com/azakhary/nixie-fx/main/src/runtime/backends.ts)
- [Three.js ShaderMaterial](https://threejs.org/docs/pages/ShaderMaterial.html)
- [Three.js WebGPURenderer](https://threejs.org/docs/pages/WebGPURenderer.html)

It can fit Stillwater's offline contract, but only with build-time integration:

- pin and bundle the runtime through the existing esbuild build;
- embed or copy exported effect JSON and assets into the Lively package;
- use the browser-safe loader with in-memory parsed data rather than runtime network fetches;
- keep the editor/CLI out of the shipped wallpaper;
- ensure NixieFX resolves the same vendored Three module and does not add a second Three copy.

Risks: larger `aquarium.js`, narrow Three peer compatibility, startup/preload cost, file-URL asset handling, and silent fallback to per-particle meshes when an authored feature misses the fast-path contract.

## Intel-specific conclusion

For Intel integrated graphics, render scale, transparent pixels, shadow policy, and post-processing usually matter more than reducing an already-single particle draw. NixieFX CPU-side sampling can also compete with the aquarium's fish simulation on the i7-8700T.

Keep the current Intel Fluid policy. Do not enable NixieFX preview bloom or lit/trail/flipbook features for a high-count Intel effect without measurements. Disable `captureDebugTransforms` in production.

## Required A/B benchmark before adoption

Measure on the actual Lively/Intel setup, not only a headless browser:

- **A:** current `createParticles()` implementation.
- **B:** equivalent NixieFX effect with the same approximate 900 particles, bounds, lifetime, alpha, and motion; one/two unlit instanced billboard emitters; no trails, flipbooks, material graph, bloom, or legacy fallback.
- **C:** particles disabled, diagnostic bound only.

Warm up at least 30 frames and measure at least 120 frames at fixed viewport, render scale, fish count, camera, light, and shadow policy. Record renderer string, framebuffer, mean/median/p95 CPU+GPU render service time, CPU update time, draw calls, triangles, active particles, NixieFX instanced/legacy draw stats, allocations/GC, startup time, bundle size, and network requests.

Adopt only if B preserves visual quality and produces a predeclared material improvement (for example, at least 10% lower p95 service time) with no legacy draw fallback, startup regression, bundle/offline violation, or frame-time spikes. Otherwise retain the current `THREE.Points` implementation.

## Bottom line

NixieFX is suitable as an additional VFX authoring/runtime layer. It is **not** currently justified as an optimization for Stillwater's existing render path. The current GPU-driven particle implementation and Intel render policy are better aligned with this wallpaper. A future integration should be driven by a measured particle-specific bottleneck, not by the library's general performance claims.
