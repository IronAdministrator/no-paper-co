<script setup lang="ts">
import { testimonials } from "../../data/content";
import SectionHeading from "../ui/SectionHeading.vue";
import TestimonialCard from "../ui/TestimonialCard.vue";
</script>

<template>
  <section id="testimonials" class="container-page section flex flex-col gap-12">
    <SectionHeading
      class="w-[620px] max-w-full"
      eyebrow="Kind words"
      title="What our clients say"
    />
    <div class="grid grid-cols-3 gap-6 lt-lg:grid-cols-1">
      <TestimonialCard v-for="item in testimonials" :key="item.name" v-bind="item" />
    </div>
  </section>
</template>
