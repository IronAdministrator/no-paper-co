import type { Directive } from "vue";

/**
 * 3D hover tilt. `v-tilt` (or `v-tilt="{ max: 10, scale: 1.03 }"`) turns the element towards the
 * pointer in perspective while it hovers, easing in and settling back when the pointer leaves.
 *
 * It writes `transform`, so it combines with `v-parallax` (which writes `translate`). Only for
 * fine pointers (mouse, trackpad) and only when the user allows motion.
 */

type Options = { max?: number; scale?: number };

const clamp = (n: number) => Math.max(-0.5, Math.min(0.5, n));

const cleanups = new WeakMap<HTMLElement, () => void>();

export const vTilt: Directive<HTMLElement, Options | undefined> = {
  mounted(el, { value }) {
    const max = value?.max ?? 10;
    const scale = value?.scale ?? 1.03;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Current and target angles; a rAF loop eases one towards the other for a smooth, weighty feel.
    let x = 0;
    let y = 0;
    let s = 1;
    let tx = 0;
    let ty = 0;
    let ts = 1;
    let frame = 0;

    const render = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      s += (ts - s) * 0.12;
      const settled =
        Math.abs(tx - x) < 0.01 && Math.abs(ty - y) < 0.01 && Math.abs(ts - s) < 0.001;
      if (settled && tx === 0 && ty === 0 && ts === 1) {
        el.style.transform = "";
        frame = 0;
        return;
      }
      el.style.transform = `perspective(1000px) rotateX(${x.toFixed(2)}deg) rotateY(${y.toFixed(2)}deg) scale(${s.toFixed(4)})`;
      frame = settled ? 0 : requestAnimationFrame(render);
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      if (!fine.matches || reduced.matches) return;
      // The tilt turns about the centre, so the box's centre holds still; measure from it against
      // the untransformed size, or the tilted bounds would feed back into the angle.
      const r = el.getBoundingClientRect();
      const px = clamp((e.clientX - (r.left + r.width / 2)) / el.offsetWidth); // -0.5 … 0.5
      const py = clamp((e.clientY - (r.top + r.height / 2)) / el.offsetHeight);
      tx = -py * 2 * max; // pointer near the top tips the top away
      ty = px * 2 * max;
      ts = scale;
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      ts = 1;
      kick();
    };

    el.style.willChange = "transform";
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    cleanups.set(el, () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.style.transform = "";
      el.style.willChange = "";
    });
  },
  unmounted(el) {
    cleanups.get(el)?.();
    cleanups.delete(el);
  },
};
