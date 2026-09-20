// Rendering budgets, kept separate from animation and habitat behaviour. The reference
// profile reproduces the uploaded rendering/density settings for local A/B checks.
export const PROFILES = Object.freeze({
  fluid: Object.freeze({
    name: 'fluid', resolution: 1, batteryResolution: 0.7,
    shadowSize: 768, shadowHz: 12, batteryShadowHz: 6,
    aoSamples: 1, backgroundDensity: 0.58, backgroundRows: 16,
    backgroundCols: 2, powerPreference: 'high-performance',
    samples: 2, plantShadows: false,
  }),
  balanced: Object.freeze({
    name: 'balanced',
    resolution: 1.25,
    batteryResolution: 1.15,
    shadowSize: 2048,
    shadowHz: 30,
    batteryShadowHz: 15,
    aoSamples: 8,
    backgroundDensity: 0.7,
    backgroundRows: 20,
    backgroundCols: 2,
    powerPreference: 'low-power',
    samples: 4,
    plantShadows: true,
  }),
  reference: Object.freeze({
    name: 'reference',
    shadowSize: 4096,
    shadowHz: Infinity,
    batteryShadowHz: Infinity,
    aoSamples: 12,
    backgroundDensity: 1,
    backgroundRows: 30,
    backgroundCols: 6,
    powerPreference: 'high-performance',
    samples: 4,
    plantShadows: true,
  }),
});

export function createAdaptiveScaleController({
  minScale = 0.75,
  step = 0.05,
  slowMs = 38,
  fastMs = 24,
  slowFrames = 30,
  fastFrames = 300,
} = {}) {
  let scale = 1;
  let slow = 0;
  let fast = 0;
  return {
    get scale() { return scale; },
    reset() {
      scale = 1;
      slow = 0;
      fast = 0;
    },
    update(frameMs, enabled = true) {
      if (!enabled || !Number.isFinite(frameMs)) return false;
      if (frameMs >= slowMs) {
        slow++;
        fast = 0;
        if (slow >= slowFrames && scale > minScale) {
          scale = Math.max(minScale, scale - step);
          slow = 0;
          return true;
        }
      } else if (frameMs <= fastMs) {
        fast++;
        slow = 0;
        if (fast >= fastFrames && scale < 1) {
          scale = Math.min(1, scale + step);
          fast = 0;
          return true;
        }
      } else {
        slow = 0;
        fast = 0;
      }
      return false;
    },
  };
}

export function renderSettings({
  profile = 'balanced', wallpaper = false, pixelRatio = 1, onBattery = false, intelGPU = false,
} = {}) {
  const budget = PROFILES[profile] || PROFILES.balanced;
  const dpr = Number.isFinite(pixelRatio) && pixelRatio > 0 ? pixelRatio : 1;
  const referenceResolution = wallpaper ? Math.min(2, Math.max(1.5, dpr)) : 1.5;
  const intelFluid = intelGPU && budget.name === 'fluid';
  return {
    ...budget,
    resolution: budget.name === 'reference' ? referenceResolution :
      (onBattery ? budget.batteryResolution : budget.resolution),
    referenceResolution,
    animatedShadows: !intelFluid && budget.name !== 'reference',
    plantDistanceLod: intelFluid,
    shadowSize: intelFluid ? 512 : budget.shadowSize,
    shadowHz: onBattery ? budget.batteryShadowHz : (intelFluid ? 6 : budget.shadowHz),
    // Fluid mode trades a little edge quality for substantially lower bandwidth.
    // Intel integrated GPUs use no post AO sample or MSAA in fluid mode; the
    // quality profiles keep those effects available when more GPU headroom exists.
    samples: intelFluid ? 0 : budget.samples,
    aoSamples: intelFluid ? 0 : budget.aoSamples,
  };
}

export function framebufferSize(width, height, scale, maxDimension = 8192) {
  if (!(width > 0 && height > 0 && scale > 0)) return null;
  const safeScale = Math.min(scale, maxDimension / width, maxDimension / height);
  return {
    width: Math.max(1, Math.round(width * safeScale)),
    height: Math.max(1, Math.round(height * safeScale)),
    scale: safeScale,
  };
}
