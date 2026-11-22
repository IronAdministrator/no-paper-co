<script setup lang="ts">
import { vParallax } from "../../composables/useParallax";
import arrowDown from "../../assets/arrow-down.svg";
import heroArt from "../../assets/object-other-07.webp";
import ButtonPill from "../ui/ButtonPill.vue";
import ThemeIcon from "../ui/ThemeIcon.vue";
</script>

<template>
  <section
    class="container-page relative mt-[17px] grid grid-cols-[517px_1fr] items-start gap-5 lt-lg:grid-cols-1"
  >
    <div class="pt-[165px] lt-lg:(order-2 pt-0)">
      <h1 class="text-display text-fg">
        Turning your ideas into <br class="lt-sm:hidden" />Web &amp; Mobile Apps
      </h1>
      <p class="mt-[5px] max-w-[505px] font-body text-[18px] leading-body text-fg">
        Whether you are looking to build a simple website, a complex web application, or a
        cutting-edge mobile app, our team has the expertise and experience to make it happen.
      </p>
      <div class="mt-[34px] flex flex-wrap gap-5">
        <ButtonPill href="#contact">get estimate</ButtonPill>
        <ButtonPill href="#projects" variant="outline">our work</ButtonPill>
      </div>
    </div>

    <img
      v-parallax="0.06"
      :src="heroArt"
      alt="Illustration of a desktop app with floating interface cards"
      width="537"
      height="545"
      class="justify-self-end mr-[-23px] h-auto w-[537px] max-w-none lt-lg:(order-1 mr-0 w-[min(420px,100%)] justify-self-center)"
    />

    <a
      href="#expertise"
      class="absolute bottom-[-32px] left-1/2 -translate-x-1/2 lt-lg:hidden"
      aria-label="Scroll to our expertise"
    >
      <ThemeIcon :src="arrowDown" :size="42" class="bounce text-primary" />
    </a>
  </section>
</template>

<style scoped>
.bounce {
  animation: bounce 2.4s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bounce {
    animation: none;
  }
}
</style>
