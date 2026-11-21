<script setup lang="ts">
import laptopArt from "../../assets/object-other-03.png";
import { stats } from "../../data/content";
import ButtonPill from "../ui/ButtonPill.vue";
import SectionHeading from "../ui/SectionHeading.vue";
import StatItem from "../ui/StatItem.vue";
</script>

<template>
  <section
    id="about"
    class="container-page mt-[119px] flex scroll-mt-10 items-center gap-16 lt-md:(mt-20 flex-col gap-10)"
  >
    <img
      :src="laptopArt"
      alt="Illustration of a laptop with a chart bubble"
      width="460"
      height="460"
      class="art size-[460px] shrink-0 lt-lg:size-[340px] lt-sm:size-[280px]"
    />
    <div class="flex min-w-0 flex-1 flex-col items-start gap-7">
      <SectionHeading
        eyebrow="About the studio"
        title="A small team obsessed with shipping great products"
      />
      <p class="text-lead text-white/80">
        We're a design and development studio partnering with founders and growing teams. From the
        first sketch to launch day, we handle strategy, UX/UI design and engineering under one roof,
        so nothing gets lost in translation.
      </p>
      <div class="flex flex-wrap gap-14 lt-sm:gap-6">
        <StatItem v-for="stat in stats" :key="stat.label" v-bind="stat" />
      </div>
      <ButtonPill href="#contact" variant="outline">More about us</ButtonPill>
    </div>
  </section>
</template>

<style scoped>
/* The illustration sits on the page colour; fade its edges so it blends into any background glow. */
.art {
  mask-image: radial-gradient(circle at 50% 50%, #000 62%, transparent 72%);
}
</style>
