<script setup lang="ts">
import BackgroundGlows from "./components/sections/BackgroundGlows.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import ContactSection from "./components/sections/ContactSection.vue";
import ExpertiseSection from "./components/sections/ExpertiseSection.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import ProcessSection from "./components/sections/ProcessSection.vue";
import ProjectsSection from "./components/sections/ProjectsSection.vue";
import ServicesSection from "./components/sections/ServicesSection.vue";
import SiteFooter from "./components/sections/SiteFooter.vue";
import SiteHeader from "./components/sections/SiteHeader.vue";
import TestimonialsSection from "./components/sections/TestimonialsSection.vue";
</script>

<template>
  <div id="top" class="relative isolate overflow-x-clip bg-ink text-white">
    <BackgroundGlows />
    <SiteHeader />
    <main>
      <HeroSection />
      <ExpertiseSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
