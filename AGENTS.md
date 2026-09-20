# Stillwater Aquarium

Offline Three.js/WebGL aquarium wallpaper for Lively Wallpaper.

## Source of truth

- Scene source: `scenes/riverscape/src/`
- Browser controls: `controls.js`, `index.html`, `style.css`
- Lively properties: `LivelyProperties.json`
- Generated deliverable: `aquarium.js`; regenerate it, never hand-edit it.
- Offline asset embedding: `npm run build` regenerates `scenes/riverscape/src/texture-assets.js`.

## Required checks

```text
npm ci
npm run validate
```

`npm run validate` builds the offline bundle and runs syntax, settings, render-policy, fish-behavior, and plant-budget checks. Run it after source or generated-bundle changes.

For browser behavior, serve the repository over HTTP, open `index.html`, and verify Settings, profile persistence, reload, FPS position, and resize behavior. The diagnostics benchmark is opt-in with `?diagnostics=1`; report its renderer, viewport, settings, and service-time caveat with any performance claim.

## Change rules

- Keep runtime offline: do not add CDN or network asset dependencies.
- Change source modules, then rebuild `aquarium.js`.
- Keep `LivelyProperties.json` and `controls.js` mappings in sync; dropdown values may arrive from Lively as indexes, labels, or values.
- Keep behavior tests deterministic and test observable contracts, not implementation text.
- Treat render profile and render scale as separate controls: profile chooses scene/GPU budgets; scale chooses framebuffer size.
- `LivelyInfo.template.json` is the source metadata template. Keep a root `LivelyInfo.json` out of the import source because Lively treats it as an already-packaged project.
- Commit generated `aquarium.js` and embedded texture output when source changes.

## Performance

Measure before changing geometry, shader work, framebuffer scale, or shadow policy. Preserve the fluid profile as the default for Lively. Do not claim a physical monitor FPS from headless or synchronous WebGL timings; distinguish render service time from presentation timing.

## Delivery

The GitHub workflow runs the build and validation suite and may commit the generated offline bundle. Keep CI path filters current when adding files that affect the shipped wallpaper.
