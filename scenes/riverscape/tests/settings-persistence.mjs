import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const defaults = {
  frameRate: 360,
  renderScale: 75,
  light: 100,
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
      : id === "frameRate"
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
assert.equal(typeof context.window.livelyPropertyListener, "function");
elements.get("reload").onclick();
assert.equal(reloads, 1);
context.window.stillwaterSet("reload");
assert.equal(reloads, 2);
console.log("PASS: settings, FPS position, and reload controls");
