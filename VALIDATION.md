# Validation — Stillwater 2

## Automated logic checks

- Render pacing tested with a virtual clock at 60/120/144/165/240/360 Hz.
- Native-refresh target renders once per supplied display callback up to 360 Hz.
- Pause, hidden, resume, invalidation and disposal verified; no idle callback chain.
- Fish behavior: 120 seconds simulated, all 24 fish explore three dimensions;
  spacing, gliding, startle propagation and food competition checks passed.
- Plant budgets: rear geometry reduced while foreground geometry is preserved.
- JavaScript syntax and JSON checked.

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
resolution from 90% to 75% or 60%. Browser/host scheduling, GPU and monitor limits
still apply. No FPS is claimed merely because a menu value was selected.
