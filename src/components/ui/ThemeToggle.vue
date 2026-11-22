<script setup lang="ts">
import { useId } from "vue";
import type { Theme } from "../../composables/useTheme";

/**
 * Sun/moon switch. The knob slides across the track, the sun's rays fold away and a crescent
 * shadow sweeps in to make the moon; stars twinkle in the track in dark mode.
 */
const props = defineProps<{ theme: Theme }>();
const maskId = `np-moon-${useId()}`;
const emit = defineEmits<{ toggle: [next: Theme, origin: { x: number; y: number }] }>();

function onClick(event: MouseEvent) {
  const box = (event.currentTarget as HTMLElement).getBoundingClientRect();
  emit("toggle", props.theme === "dark" ? "light" : "dark", {
    x: box.left + box.width / 2,
    y: box.top + box.height / 2,
  });
}
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="theme === 'dark'"
    aria-label="Dark mode"
    class="toggle relative h-9 w-16 shrink-0 cursor-pointer rounded-pill border border-solid border-primary-line bg-primary-soft p-0 focus-visible:(outline-2 outline-solid outline-accent outline-offset-3)"
    :class="theme"
    @click="onClick"
  >
    <span class="stars" aria-hidden="true">
      <span v-for="n in 3" :key="n" class="star absolute rounded-full bg-fg" />
    </span>
    <span class="knob absolute left-1 top-1 grid size-[26px] place-items-center" aria-hidden="true">
      <svg viewBox="0 0 26 26" width="26" height="26" class="text-primary">
        <mask :id="maskId">
          <rect width="26" height="26" fill="#fff" />
          <circle class="bite" cx="30" cy="4" r="7" fill="#000" />
        </mask>
        <circle class="core" cx="13" cy="13" r="6" fill="currentColor" :mask="`url(#${maskId})`" />
        <g class="rays" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="13" y1="1.5" x2="13" y2="4" />
          <line x1="13" y1="22" x2="13" y2="24.5" />
          <line x1="1.5" y1="13" x2="4" y2="13" />
          <line x1="22" y1="13" x2="24.5" y2="13" />
          <line x1="4.9" y1="4.9" x2="6.6" y2="6.6" />
          <line x1="19.4" y1="19.4" x2="21.1" y2="21.1" />
          <line x1="4.9" y1="21.1" x2="6.6" y2="19.4" />
          <line x1="19.4" y1="6.6" x2="21.1" y2="4.9" />
        </g>
      </svg>
    </span>
  </button>
</template>

<style scoped>
/* Extend the hit area to 44px tall without changing the drawn size. */
.toggle::before {
  content: "";
  position: absolute;
  inset: -5px -2px;
}

.knob,
.core,
.bite,
.rays,
.star {
  transition:
    transform 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.4s ease,
    cx 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    cy 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    r 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  transform-origin: center;
  transform-box: fill-box;
}

/* Dark: knob on the right as a moon. */
.dark .knob {
  transform: translateX(28px) rotate(360deg);
}
.dark .core {
  r: 8.5px;
}
.dark .bite {
  cx: 18px;
  cy: 8px;
}
.dark .rays {
  opacity: 0;
  transform: scale(0.4) rotate(-90deg);
}

/* Light: knob on the left as a sun. */
.light .rays {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.star {
  width: 2px;
  height: 2px;
  opacity: 0;
  transform: scale(0);
}
.star:nth-child(1) {
  left: 12px;
  top: 9px;
}
.star:nth-child(2) {
  left: 20px;
  top: 20px;
  width: 3px;
  height: 3px;
}
.star:nth-child(3) {
  left: 9px;
  top: 22px;
}
.dark .star {
  opacity: 0.8;
  transform: scale(1);
  animation: twinkle 2.4s ease-in-out infinite;
}
.dark .star:nth-child(2) {
  animation-delay: 0.8s;
}
.dark .star:nth-child(3) {
  animation-delay: 1.6s;
}

@keyframes twinkle {
  50% {
    opacity: 0.25;
  }
}

@media (prefers-reduced-motion: reduce) {
  .knob,
  .core,
  .bite,
  .rays,
  .star {
    transition: none;
  }
  .dark .star {
    animation: none;
  }
}
</style>
