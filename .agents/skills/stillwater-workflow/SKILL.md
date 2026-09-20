---
name: stillwater-workflow
description: Use when changing the Stillwater Aquarium wallpaper, its Lively settings, offline bundle, WebGL render policy, shaders, or performance tests. Follow the repository build, browser-smoke, and performance-evidence workflow.
---

# Stillwater workflow

## Change loop

1. Locate the owning source module under `scenes/riverscape/src/` or the browser/Lively surface at the repository root.
2. For render changes, capture a baseline with `?diagnostics=1` before editing. Record viewport, profile, render scale, renderer, draw calls, triangles, mean/median/p95 service time, and whether the run is headless.
3. Edit source, not `aquarium.js`. Keep `controls.js`, `LivelyProperties.json`, and the Settings markup aligned when a preference changes.
4. Run `npm run validate` to rebuild the offline bundle and execute all deterministic checks.
5. Open the built `index.html` in a browser smoke session. Exercise Settings, profile persistence, reload, resize, and the changed runtime path.
6. If the user asks for Lively integration, sync the built files into the imported wallpaper and reload Lively; distinguish this installed copy from repository source.

## Performance guardrails

- `fluid` is the Lively default and prioritizes GPU cost; `balanced` and `reference` intentionally spend more quality budget.
- A render profile change can require a scene reload because geometry and shader budgets are selected during startup.
- Render scale changes framebuffer cost without changing scene geometry.
- Report synchronous readback benchmarks as CPU + GPU render service time, never as guaranteed monitor FPS.
- Keep offline operation intact: all textures and the Three.js runtime are local.

## Completion

A change is complete when source and generated bundle agree, `npm run validate` passes, the browser smoke path passes, and any Lively-specific file sync/reload requested by the user has been performed.
