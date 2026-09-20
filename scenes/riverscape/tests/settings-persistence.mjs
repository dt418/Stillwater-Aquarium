import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const defaults = {
  frameRate: 360,
  renderScale: 65,
  light: 100,
  fishCount: 24,
  profile: "fluid",
  follow: true,
  showStats: false,
  statsPosition: "bottom-right",
  paused: false,
};
const elements = new Map();
const elementFor = (id) => {
  if (!elements.has(id)) {
    const type = id === "follow" || id === "showStats" || id === "paused"
      ? "checkbox"
      : id === "frameRate" || id === "profile" || id === "statsPosition"
        ? "select"
        : "range";
    elements.set(id, {
      id,
      type,
      value: "",
      checked: false,
      hidden: false,
      textContent: "",
      dataset: {},
      classList: { add() {} },
      addEventListener() {},
      showModal() {},
      close() {},
    });
  }
  return elements.get(id);
};
let reloads = 0;
const rootStyle = {};
const context = {
  console,
  setTimeout() {},
  location: { reload() { reloads++; } },
  localStorage: {
    getItem() { return "null"; },
    setItem() {},
  },
  document: {
    documentElement: { style: { setProperty(name, value) { rootStyle[name] = value; } } },
    getElementById: elementFor,
    addEventListener() {},
  },
  window: {
    screen: { height: 1080, availHeight: 1032 },
    addEventListener() {},
  },
};
context.window.window = context.window;
vm.runInNewContext(readFileSync("controls.js", "utf8"), context, { filename: "controls.js" });

assert.deepEqual({ ...context.window.stillwaterPreferences }, defaults);
assert.equal(rootStyle["--stats-bottom"], "68px");
assert.equal(elements.get("stats").dataset.position, "bottom-right");
context.window.stillwaterSet("statsPosition", "top-left");
assert.equal(elements.get("stats").dataset.position, "top-left");
context.window.livelyPropertyListener("statsPosition", 3);
assert.equal(elements.get("stats").dataset.position, "bottom-right");
context.window.stillwaterSet("profile", "balanced");
assert.equal(elements.get("profile").value, "balanced");
context.window.livelyPropertyListener("profile", 2);
assert.equal(context.window.stillwaterPreferences.profile, "reference");
context.window.stillwaterSet("fishCount", 52);
assert.equal(context.window.stillwaterPreferences.fishCount, 48);
context.window.stillwaterSet("fishCount", 7);
assert.equal(context.window.stillwaterPreferences.fishCount, 8);
assert.equal(typeof context.window.livelyPropertyListener, "function");
elements.get("reload").onclick();
assert.equal(reloads, 1);
context.window.stillwaterSet("reload");
assert.equal(reloads, 2);
console.log("PASS: settings, FPS position, and reload controls");
