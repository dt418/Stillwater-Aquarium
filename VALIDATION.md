# Validation — Stillwater 2

## Automated logic checks

- Render pacing tested with a virtual clock at 60/120/144/165/240/360 Hz.
- Native-refresh target renders once per supplied display callback up to 360 Hz.
- Pause, hidden, resume, invalidation and disposal verified; no idle callback chain.
- Fish behavior: 120 seconds simulated, all 24 fish explore three dimensions;
  spacing, gliding, startle propagation and food competition checks passed.
- Plant budgets: rear geometry reduced while foreground geometry is preserved.
- JavaScript syntax and JSON checked.
- FPS selection checked through the on-page select and Lively callbacks supplied as
  dropdown index, numeric rate and label text.

These are correctness tests, not measurements of 120+ FPS on physical hardware.

## Browser test environment

Chromium 153 headless, Linux, ANGLE SwiftShader software rendering.
The test opens the shipped index.html with file://, without a server.
PASSED: shader/texture loading, zero JavaScript/WebGL console errors, zero external
network requests, settings UI, Lively callbacks, queued feeding, pause, ultrawide
resize and settings persistence after a real page reload.
A preview is included. The preview is a render of this package, not an upstream screenshot.

## Not verified

- Installation, mouse event forwarding and playback on Windows 11 / Lively itself.
- Sustained 120/144/165/240 FPS, latency, GPU power or battery drain on the user's PC.
- Physical display presentation timing; the in-scene FPS counter measures application
  render cadence. Headless software-renderer timing is not a desktop GPU benchmark.

## Practical performance settings

Choose the monitor's actual high refresh rate in Windows. Use Native refresh in
this wallpaper and enable Show measured FPS. If below target, reduce Render
resolution from 75% to 65% or 55%. Browser/host scheduling, GPU and monitor limits
still apply. No FPS is claimed merely because a menu value was selected.

## Optimization measurement

The same 20-frame synchronous WebGL benchmark was run before and after the fluid
profile changes at 640×360 CSS pixels and 75% render scale using Chromium 153 with
ANGLE SwiftShader. Mean service time fell from 4182.72 ms to 2161.01 ms (48.3% lower),
and submitted triangles fell from 1,920,154 to 1,072,858 per measured frame (44.1%
lower). Software rendering is deliberately slow; these figures compare revisions and
do not predict FPS on the user's Windows GPU. See performance-baseline.json.

## Adaptive GPU-scale policy

Fluid Intel adaptation uses `EXT_disjoint_timer_query_webgl2`, not display callback
cadence, so a 30 Hz monitor cannot trigger a false downscale. The controller lowers
scale after 30 GPU samples at or above 38 ms (about 26 service FPS) and restores it
after 300 samples at or below 24 ms (about 42 service FPS); the asymmetric window
prevents resize oscillation. These thresholds are policy guardrails, not physical
FPS claims; use the opt-in diagnostics benchmark for target-device measurements.
