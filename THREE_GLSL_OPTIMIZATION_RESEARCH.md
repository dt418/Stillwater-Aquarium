# Three.js / GLSL optimization research for Stillwater Aquarium

## Scope and verdict

This note maps the two requested articles to the current offline aquarium. Their React Three Fiber examples must be translated to this vanilla Three.js, continuously animated wallpaper. Runtime source remains under `scenes/riverscape/src/`; `aquarium.js` and `texture-assets.js` are generated outputs.

Primary articles:

- [Three.js Performance Optimization: A Practical Guide](https://www.hontran.dev/blog/three-js-performance-optimization)
- [GLSL Shaders Tutorial for Web Developers](https://www.hontran.dev/blog/glsl-shaders-tutorial-for-web-developers)

Official corroboration:

- [Three.js InstancedMesh](https://threejs.org/docs/pages/InstancedMesh.html), [BatchedMesh](https://threejs.org/docs/pages/BatchedMesh.html), [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html), [ShaderMaterial](https://threejs.org/docs/pages/ShaderMaterial.html), [LightShadow](https://threejs.org/docs/pages/LightShadow.html), [MeshStandardMaterial](https://threejs.org/docs/pages/MeshStandardMaterial.html), [MeshPhysicalMaterial](https://threejs.org/docs/pages/MeshPhysicalMaterial.html), [KTX2Loader](https://threejs.org/docs/pages/KTX2Loader.html)
- MDN [WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices) and [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
- Khronos [WebGL 2.0](https://registry.khronos.org/webgl/specs/latest/2.0/), [`EXT_disjoint_timer_query_webgl2`](https://registry.khronos.org/webgl/extensions/EXT_disjoint_timer_query_webgl2/), and [GLSL ES 3.00](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf)

## Current rendering model

`main.js` creates a WebGL2 renderer, sets `renderer.setPixelRatio(1)`, renders the scene into a HalfFloat render target with depth, then renders a fullscreen post pass. The post shader may run a compile-time AO loop. Shadow rendering is enabled but manually refreshed. The project embeds local JPEG assets and vendored Three.js in `aquarium.js`; there is no network loader or compression decoder dependency.

The active frame loop is continuously animated while visible: fish, food, water, foliage, particles, and scheduled shadows change. `frame-loop.js` uses timestamp-derived `dt`, caps real stalls, pauses when hidden, and sleeps between frames when the requested rate is below display refresh. R3F `frameloop="demand"` is not a drop-in optimization for the active aquarium.

## Technique mapping

### Draw calls, instancing, and batching

**Already strong.** Plant blades/stems/leaves use `GeometryBatch` and one planting mesh. Fish use two `InstancedMesh` batches; food, gravel, grit, moss fronds, and particles are also batched/instanced. The remaining ordinary meshes are unique rocks/wood and scene/post objects.

**Safe direction:** profile `renderer.info.render.calls` first; preserve current batch owners. Test `BatchedMesh` only for compatible same-material opaque hardscape if measurements identify those calls as dominant. Do not merge transparent foliage, fish fins, contact decals, or material variants without visual/culling/shadow proof. The article's rough “under 100–150 calls” target is not a universal limit.

### Pixel ratio, render scale, and fill rate

The app already avoids double DPR multiplication: `setPixelRatio(1)` plus explicit `framebufferSize()` computes the drawing buffer from profile resolution, user render scale, adaptive scale, a 4.2M-pixel cap, and hardware limits.

**Safe direction:** lower explicit render scale or the existing adaptive multiplier. This reduces scene/post fragment work without deleting geometry or changing simulation. Keep profile quality and render scale separate. Do not add `devicePixelRatio` again on top of the existing path.

### Textures and geometry payload

Six local JPEG diffuse/normal maps are embedded through `build.mjs`; they are shared by materials and remain offline. The procedural scene has no glTF payload, so Draco/Meshopt is not applicable now. KTX2/Basis would require a complete local build/runtime decoder path and renderer capability handling.

**Safe direction:** measure source texture dimensions, anisotropy, and startup memory before changing them. Do not add a CDN, remote decoder, duplicate texture loads, or assume JPEG quality directly equals GPU memory savings.

### Disposal and lifecycle

Temporary PMREM resources and environment construction meshes are disposed. Fish and food expose subsystem disposal. A future scene-replacement lifecycle would also need ownership-aware teardown for render targets/depth textures, post materials/geometries, environment resources, planting, particles, shadow resources, and shared textures.

**Safe direction:** dispose resources exactly once at their owner boundary. Do not blindly traverse the entire scene because shared rock/wood/sand materials and textures can be used by multiple meshes.

### Materials, lights, and shadows

The scene uses one shadow-casting key light plus non-shadow fill lights. Fluid already lowers shadow resolution/update frequency, disables plant casting, reduces AO/MSAA, and uses far-plant LOD while retaining the key shadow and authored material paths.

**Safe direction:** lower shadow map size/frequency, plant casting, AO samples, render-target samples, anisotropy, and distant density in measured quality rungs. Preserve contact shadows, normal/moss relief, water modulation, fish iridescence, and leaf transmission.

**High-risk direction:** replacing Physical/Standard materials with Basic, globally removing normal/moss/water-light hooks, or disabling the key shadow. Those may improve a benchmark while flattening the authored scene; use only as explicit, measured emergency quality fallbacks.

### Adaptive quality and evidence

The adaptive controller uses asynchronous GPU timer queries, rejects unavailable/disjoint results, has a `0.75` floor, steps down after sustained slow samples, and recovers much more slowly. Khronos specifies delayed query availability and invalidation by `GPU_DISJOINT_EXT`.

**Safe direction:** keep asynchronous GPU evidence, hysteresis, a minimum floor, and one changing quality axis. Render-scale reduction is the preferred first response. Keep diagnostics' synchronous `readPixels()` benchmark opt-in; its service time is not physical monitor FPS.

## GLSL technique mapping

### Stage placement

Broad, low-frequency deformation is already vertex work: foliage strand motion, fish swimming, particles, and water-light drift. Fragment work owns high-frequency or screen-space details: water depth/focusing/absorption, moss noise and normal perturbation, leaf veins/mottling/`fwidth` detail, fish shading, particle shape, and post AO.

Move work to the vertex stage only when interpolation preserves the effect. Do not move derivatives, normal/texture sampling, screen-space AO, or high-frequency leaf/fish detail to sparse vertices just because vertex invocations are cheaper.

### Uniforms, attributes, and varyings

`waterTime` is a shared CPU-updated uniform. Foliage and fish use custom attributes for per-vertex/per-instance state and small varyings for interpolated fragment data. Keep shared uniforms and avoid per-frame uniform-object/string allocations. Keep varyings minimal because they are interpolated for every covered fragment.

### Fragment cost, branches, and precision

Reduce framebuffer/AO cost before deleting visual shader terms. Reuse dot products and trigonometric results, precompute static coefficients, bound loops with compile-time limits, and fade high-frequency detail by footprint/LOD. `mix`, `step`, and `smoothstep` can replace a branch only when the result is equivalent; divergent-branch folklore is not a proof on every GPU.

Three.js injects normal precision declarations into the current `ShaderMaterial`/`onBeforeCompile` paths. Do not force `highp` or `mediump` globally without compiler/artifact evidence. Keep GLSL numeric literals correctly typed and preserve coordinate spaces, normals, alpha coverage, color space, and shared motion phase.

## Recommended order

1. Measure the actual target with diagnostics: renderer/backend, CSS viewport, framebuffer, profile, render scale, draw calls, triangles, shadow updates, service-time distribution, and frame-interval distribution.
2. Preserve existing `GeometryBatch` and `InstancedMesh`; investigate unique hardscape only if counters identify it.
3. Adjust render scale, not a second DPR path.
4. Reduce optional AO/MSAA/shadow resolution/update frequency and far-background detail.
5. Keep asynchronous timer-query adaptation and its hysteresis.
6. Optimize GLSL stage placement, branches, precision, and uniforms only with browser compilation, fixed screenshots, and timing evidence.
7. Treat KTX2 as a separate offline asset-pipeline project and disposal as an ownership/lifecycle project.

The highest-confidence savings already present are explicit framebuffer control, static batching, instancing, throttled shadows, bounded plant LOD, optional AO/MSAA, and asynchronous adaptive scale. The highest-risk changes are global material simplification, key-shadow removal, double-applied DPR, synchronous readback in the live loop, and blanket shader rewrites.
