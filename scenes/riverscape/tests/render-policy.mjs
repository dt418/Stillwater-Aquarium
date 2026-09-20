import assert from 'node:assert/strict';
import { renderSettings, framebufferSize, createAdaptiveScaleController } from '../src/render-policy.js';
import { createFrameLoop } from '../src/frame-loop.js';

const reference = renderSettings({ profile: 'reference', wallpaper: true, pixelRatio: 2 });
const balanced = renderSettings({ wallpaper: true, pixelRatio: 2 });
const fluid = renderSettings({ profile: 'fluid', wallpaper: true, pixelRatio: 2 });
const intelFluid = renderSettings({ profile: 'fluid', wallpaper: true, pixelRatio: 2, intelGPU: true });
const battery = renderSettings({ wallpaper: true, pixelRatio: 2, onBattery: true });
assert.equal(reference.resolution, 2);
assert.equal(balanced.resolution, 1.25);
assert.equal(balanced.samples, 4, 'Preserve quarter-coverage foliage translucency');
assert.equal(fluid.aoSamples, 1, 'Fluid profile uses one AO sample for lower GPU cost');
assert.equal(intelFluid.samples, 0, 'Intel fluid mode disables MSAA');
assert.equal(intelFluid.aoSamples, 0, 'Intel fluid mode skips post AO');
assert.equal(intelFluid.shadowSize, 512, 'Intel fluid mode lowers shadow-map bandwidth');
assert.equal(intelFluid.shadowHz, 6, 'Intel fluid mode lowers shadow refresh cost');
assert.equal(intelFluid.animatedShadows, false, 'Intel fluid mode keeps static foliage shadows');
assert.equal(intelFluid.plantDistanceLod, true, 'Intel fluid mode enables distant plant LOD');
assert.equal(intelFluid.simpleMaterials, true, 'Intel fluid mode simplifies foliage materials');
assert.equal(intelFluid.disableShadows, true, 'Intel fluid mode disables shadow-map rendering');
assert.equal(fluid.animatedShadows, true);
assert.equal(fluid.plantDistanceLod, false);
assert.equal(fluid.simpleMaterials, false);
assert.equal(fluid.disableShadows, false);
const adaptive = createAdaptiveScaleController({ slowMs: 40, fastMs: 20, slowFrames: 3, fastFrames: 2 });
assert.equal(adaptive.update(40), false);
assert.equal(adaptive.update(40), false);
assert.equal(adaptive.update(40), true);
assert.equal(adaptive.scale, 0.95);
assert.equal(adaptive.update(20), false);
assert.equal(adaptive.update(20), true);
assert.equal(adaptive.scale, 1);
assert.equal(balanced.shadowSize, 2048);
assert.equal(balanced.shadowHz, 30);
assert.equal(battery.shadowHz, 15);
assert.equal(renderSettings({ profile: 'typo' }).name, 'balanced');
assert.equal(renderSettings({ profile: 'reference', pixelRatio: 3 }).resolution, 1.5);
assert.equal(renderSettings({ profile: 'reference', wallpaper: true, pixelRatio: NaN }).resolution, 1.5);
assert.equal(framebufferSize(0, 900, 1.25), null);
assert.deepEqual(framebufferSize(1280, 720, 1.25), {width:1600,height:900,scale:1.25});
assert.deepEqual(framebufferSize(10000, 5000, 2, 8192), {width:8192,height:4096,scale:0.8192});

// Virtual time, a real refresh cadence, and separate timer/rAF queues. A stopped
// scene must have no callbacks at all, not just an early return inside a live rAF.
function harness(fps = 30, refreshHz = 60, paused = false) {
  let now = 0, serial = 0, callbacks = 0;
  const tasks = new Map(), frames = [];
  const period = 1000 / refreshHz;
  const add = (fn, due) => { const id=++serial; tasks.set(id,{fn,due}); return id; };
  const loop = createFrameLoop((dt,t) => frames.push({dt,t}), {
    fps, paused, clock:()=>now,
    requestFrame: (fn) => add(fn, (Math.floor((now + 1e-6) / period) + 1) * period),
    cancelFrame: (id)=>tasks.delete(id),
    delay: (fn,ms)=>add(fn,now+ms), cancelDelay:(id)=>tasks.delete(id),
  });
  function advance(ms) {
    const end = now + ms;
    for (;;) {
      let next = null;
      for (const entry of tasks) if (!next || entry[1].due < next[1].due) next = entry;
      if (!next || next[1].due > end + 1e-6) break;
      tasks.delete(next[0]); now=next[1].due; callbacks++; next[1].fn(now);
      assert(callbacks < 100000, 'Unexpected busy loop');
    }
    now=end;
  }
  return {loop,frames,tasks,advance,get callbacks(){return callbacks;}};
}
for (const refresh of [60,120,144,165,240,360]) for (const fps of [20,30,60,120,144,165,240,360].filter(f => f <= refresh && refresh % f === 0)) {
  const h=harness(fps,refresh);h.advance(10000);
  assert(Math.abs(h.frames.length - fps * 10) <= 1, `${fps} fps at ${refresh} Hz: ${h.frames.length}`);
  const simulated = h.frames.reduce((sum,f)=>sum+f.dt,0);
  assert(Math.abs(simulated - (10 - 1/refresh)) < 0.06, `Clock drift: ${simulated}`);
  h.loop.dispose();assert.equal(h.tasks.size,0);
}
const h=harness(30);
h.advance(1000);h.loop.setPaused(true);
const before=h.frames.length, callbacks=h.callbacks;
h.advance(60000);assert.equal(h.frames.length,before);assert.equal(h.callbacks,callbacks);assert.equal(h.tasks.size,0);
h.loop.invalidate();h.advance(100);assert.equal(h.frames.length,before+1);assert.equal(h.frames.at(-1).dt,0);assert.equal(h.tasks.size,0);
h.loop.setPaused(false);h.advance(100);assert(h.frames.length>before+1);assert(h.frames.every(f=>f.dt<=0.1));
h.loop.setRate(0);assert.equal(h.tasks.size,0);h.advance(10000);assert.equal(h.tasks.size,0);
h.loop.setRate(30);h.advance(100);h.loop.setHidden(true);const hiddenFrames=h.frames.length;
h.loop.invalidate();h.advance(10000);assert.equal(h.frames.length,hiddenFrames);assert.equal(h.tasks.size,0);
h.loop.setHidden(false);h.advance(100);assert(h.frames.length>hiddenFrames);assert.equal(h.frames[hiddenFrames].dt,0);
h.loop.setRate(NaN);assert.equal(h.tasks.size,0);
h.loop.setRate(30);h.advance(100);h.loop.dispose();h.loop.invalidate();assert.equal(h.tasks.size,0);
const still=harness(0);still.advance(100);assert.equal(still.frames.length,1);assert.equal(still.tasks.size,0);
const reduced=harness(60,60,true);reduced.advance(1000);assert.equal(reduced.frames.length,1);assert.equal(reduced.tasks.size,0);
console.log('PASS: render budgets, zero-size/large targets, 20/30/60 fps pacing at 60/120 Hz, stop/resume, reduced motion, hidden invalidation and zero idle callbacks');

for (const refresh of [60,120,144,165,240,360]) {
 const native=harness(360,refresh);native.advance(10000);
 assert(Math.abs(native.frames.length-refresh*10)<=1, `Native refresh ${refresh}: ${native.frames.length}`);
 assert(native.frames.every(f=>f.dt<=0.1));native.loop.dispose();
}
assert.equal(fluid.shadowSize,768);
assert.equal(fluid.shadowHz,12);
assert.equal(fluid.samples,2);
assert.equal(fluid.aoSamples,1);
assert.equal(fluid.plantShadows,false);
assert.equal(fluid.powerPreference,'high-performance');
console.log('PASS: high refresh pacing and native refresh at 60/120/144/165/240/360 Hz (simulated clock, not GPU benchmark)');
