<script setup lang="ts">
import { services } from "../../data/content";
import SectionHeading from "../ui/SectionHeading.vue";
import ServiceCard from "../ui/ServiceCard.vue";
</script>

<template>
  <section id="services" class="container-page section flex flex-col gap-12">
    <div class="flex items-end justify-between gap-10 lt-md:(flex-col items-start gap-5)">
      <SectionHeading
        class="w-[560px] max-w-full"
        eyebrow="What we do"
        title="Services built around your goals"
      />
      <p class="w-[400px] max-w-full text-lead text-white/70">
        Whether you need a single landing page or a full product team, we plug in where you need us
        most.
      </p>
    </div>
    <div class="grid grid-cols-4 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
      <ServiceCard v-for="service in services" :key="service.title" v-bind="service" />
    </div>
  </section>
</template>
