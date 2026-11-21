<script setup lang="ts">
import ellipse1 from "../../assets/ellipse-1.svg";
import ellipse2 from "../../assets/ellipse-2.svg";
import glowContact from "../../assets/glow-contact.svg";
import glowProjects from "../../assets/glow-projects.svg";
import glowServices from "../../assets/glow-services.svg";
import glowTestimonials from "../../assets/glow-testimonials.svg";

// Positions come from the 1440px Figma frame (node position minus the blur bleed of each SVG).
const glows = [
  { src: ellipse2, size: 1153, x: -268, y: -700 },
  { src: ellipse1, size: 1138, x: 948, y: -27 },
  { src: glowServices, size: 1160, x: -620, y: 1203 },
  { src: glowProjects, size: 1160, x: 820, y: 2258 },
  { src: glowTestimonials, size: 1120, x: -600, y: 3559 },
  { src: glowContact, size: 1140, x: 800, y: 4431 },
];
</script>

<template>
  <div
    class="pointer-events-none absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2 -z-1"
    aria-hidden="true"
  >
    <img
      v-for="glow in glows"
      :key="glow.src"
      :src="glow.src"
      alt=""
      :width="glow.size"
      :height="glow.size"
      class="absolute max-w-none"
      :style="{ left: `${glow.x}px`, top: `${glow.y}px` }"
    />
  </div>
</template>
