<script setup lang="ts">
import { vParallax } from "../../composables/useParallax";

type Tone = "primary" | "accent";

// Positions come from the 1440px Figma frame (node position minus the blur bleed). Each glow is a
// CSS radial gradient (cheap to scroll and animate, unlike the SVG blur filters it replaces), drawn
// in its tone and slowly cross-fading into the other one while it breathes.
const glows: { tone: Tone; size: number; x: number; y: number; parallax: number }[] = [
  { tone: "primary", size: 1153, x: -268, y: -700, parallax: 0.12 },
  { tone: "accent", size: 1138, x: 948, y: -27, parallax: 0.18 },
  { tone: "primary", size: 1160, x: -620, y: 1203, parallax: 0.15 },
  { tone: "accent", size: 1160, x: 820, y: 2258, parallax: 0.2 },
  { tone: "accent", size: 1120, x: -600, y: 3559, parallax: 0.14 },
  { tone: "primary", size: 1140, x: 800, y: 4431, parallax: 0.18 },
];
</script>

<template>
  <div
    class="pointer-events-none absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2 -z-1 light:opacity-55"
    aria-hidden="true"
  >
    <div
      v-for="(glow, i) in glows"
      :key="i"
      v-parallax="{ speed: glow.parallax, max: 160 }"
      class="glow-pos absolute"
      :style="{
        left: `${glow.x}px`,
        top: `${glow.y}px`,
        width: `${glow.size}px`,
        height: `${glow.size}px`,
      }"
    >
      <div class="glow" :class="glow.tone" :style="{ '--i': i }" />
    </div>
  </div>
</template>

<style scoped>
.glow-pos {
  will-change: translate;
}

/* The two tones stack: ::before is the glow's own colour, ::after the other one fading in and out. */
.glow {
  --from: var(--colors-primary-DEFAULT);
  --to: var(--colors-accent-DEFAULT);
  position: absolute;
  inset: 0;
  will-change: transform, opacity;
  animation: breathe calc(11s + var(--i) * 1.7s) ease-in-out calc(var(--i) * -2.3s) infinite
    alternate;
}

.glow.accent {
  --from: var(--colors-accent-DEFAULT);
  --to: var(--colors-primary-DEFAULT);
}

.glow::before,
.glow::after {
  content: "";
  position: absolute;
  inset: 0;
  /* Approximates the original blurred circle (r ≈ 270px, blur 150px) in a ~1150px box. */
  background: radial-gradient(
    circle closest-side,
    color-mix(in srgb, var(--c) 80%, transparent) 0%,
    color-mix(in srgb, var(--c) 74%, transparent) 20%,
    color-mix(in srgb, var(--c) 55%, transparent) 40%,
    color-mix(in srgb, var(--c) 28%, transparent) 60%,
    color-mix(in srgb, var(--c) 9%, transparent) 80%,
    transparent 100%
  );
}

.glow::before {
  --c: var(--from);
}

.glow::after {
  --c: var(--to);
  opacity: 0;
  animation: shift calc(19s + var(--i) * 2.9s) ease-in-out calc(var(--i) * -4.1s) infinite alternate;
}

@keyframes breathe {
  from {
    transform: scale(0.92);
    opacity: 0.75;
  }
  to {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes shift {
  0%,
  25% {
    opacity: 0;
  }
  75%,
  100% {
    opacity: 0.7;
  }
}

@media (prefers-reduced-motion: reduce) {
  .glow,
  .glow::after {
    animation: none;
  }
}
</style>
