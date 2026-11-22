import type { Directive } from "vue";

/**
 * Mild scroll parallax. `v-parallax="0.1"` shifts an element by 10% of its distance from the
 * viewport centre, so it sits exactly where the layout puts it when it is centred on screen and
 * drifts a little behind (positive speed) or ahead (negative) of the page as it scrolls past.
 *
 * It writes the individual `translate` property, so it never fights a `transform` animation on the
 * same element. One shared scroll listener and one rAF per frame drive every element.
 * Turned off when the user prefers reduced motion.
 */

type Item = { el: HTMLElement; speed: number; max: number; centre: number };

const items = new Set<Item>();
const byEl = new WeakMap<HTMLElement, Item>();
let frame = 0;
let listening = false;
let reduced: MediaQueryList | undefined;

/** The element's centre in document coordinates, without the offset we added. */
function measure(item: Item) {
  const prev = item.el.style.translate;
  item.el.style.translate = "";
  const rect = item.el.getBoundingClientRect();
  item.el.style.translate = prev;
  item.centre = rect.top + window.scrollY + rect.height / 2;
}

function update() {
  frame = 0;
  const off = reduced?.matches;
  const mid = window.scrollY + window.innerHeight / 2;
  for (const item of items) {
    if (off) {
      item.el.style.translate = "";
      continue;
    }
    const y = Math.max(-item.max, Math.min(item.max, (mid - item.centre) * item.speed));
    item.el.style.translate = `0 ${y.toFixed(1)}px`;
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(update);
}

function remeasure() {
  for (const item of items) measure(item);
  schedule();
}

function listen() {
  if (listening) return;
  listening = true;
  reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  reduced.addEventListener("change", schedule);
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", remeasure, { passive: true });
  // Images and fonts loading shift the layout: measure again once everything is in.
  window.addEventListener("load", remeasure, { once: true });
}

function unlisten() {
  if (!listening || items.size) return;
  listening = false;
  reduced?.removeEventListener("change", schedule);
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", remeasure);
}

/** `v-parallax="speed"` or `v-parallax="{ speed, max }"`; max caps the shift in px (default 120). */
export const vParallax: Directive<HTMLElement, number | { speed: number; max?: number }> = {
  mounted(el, { value }) {
    const opts = typeof value === "number" ? { speed: value } : value;
    const item: Item = { el, speed: opts.speed, max: opts.max ?? 120, centre: 0 };
    items.add(item);
    byEl.set(el, item);
    listen();
    measure(item);
    schedule();
  },
  unmounted(el) {
    const item = byEl.get(el);
    if (item) items.delete(item);
    el.style.translate = "";
    unlisten();
  },
};
