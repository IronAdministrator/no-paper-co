<script setup lang="ts">
import { processSteps } from "../../data/content";
import ProcessStep from "../ui/ProcessStep.vue";
import SectionHeading from "../ui/SectionHeading.vue";
</script>

<template>
  <section id="process" class="container-page section flex flex-col gap-12">
    <SectionHeading
      class="w-[620px] max-w-full"
      eyebrow="How we work"
      title="From idea to launch in four steps"
    />
    <ol class="grid grid-cols-4 gap-6 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
      <ProcessStep v-for="step in processSteps" :key="step.number" v-bind="step" />
    </ol>
  </section>
</template>
