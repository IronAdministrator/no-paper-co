<script setup lang="ts">
import { projects } from "../../data/content";
import ButtonPill from "../ui/ButtonPill.vue";
import ProjectCard from "../ui/ProjectCard.vue";
import SectionHeading from "../ui/SectionHeading.vue";
</script>

<template>
  <section id="projects" class="container-page section flex flex-col gap-12">
    <div class="flex items-end justify-between gap-6 lt-sm:(flex-col items-start)">
      <SectionHeading
        class="w-[560px] max-w-full"
        eyebrow="Selected work"
        title="Recent projects"
      />
      <ButtonPill href="#projects" variant="outline">View all</ButtonPill>
    </div>
    <div class="grid grid-cols-2 gap-x-[25px] gap-y-14 lt-md:(grid-cols-1 gap-y-10)">
      <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>
  </section>
</template>
