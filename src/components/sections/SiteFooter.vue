<script setup lang="ts">
import iconDribbble from "../../assets/icon-dribbble.svg";
import iconGithub from "../../assets/icon-github.svg";
import iconLinkedin from "../../assets/icon-linkedin.svg";
import { footerColumns } from "../../data/content";
import IconChip from "../ui/IconChip.vue";

const socials = [
  { icon: iconLinkedin, label: "LinkedIn", href: "#" },
  { icon: iconDribbble, label: "Dribbble", href: "#" },
  { icon: iconGithub, label: "GitHub", href: "#" },
];
</script>

<template>
  <footer class="container-page mt-[100px] flex flex-col gap-8 pb-12 lt-md:mt-20">
    <div class="h-px w-full bg-fg/10" />
    <div class="flex items-start justify-between gap-10 lt-md:flex-col">
      <div class="flex flex-col gap-4">
        <p class="font-heading font-bold text-[24px] leading-heading">NO_PAPER</p>
        <p class="w-[300px] max-w-full text-body text-fg/60">
          Design &amp; development studio for web and mobile products.
        </p>
        <ul class="flex gap-3">
          <li v-for="social in socials" :key="social.label">
            <a
              :href="social.href"
              :aria-label="social.label"
              class="block rounded-full transition-colors hover:bg-fg/10"
            >
              <IconChip :icon="social.icon" tone="outline" />
            </a>
          </li>
        </ul>
      </div>
      <nav class="flex gap-20 lt-sm:(flex-wrap gap-x-12 gap-y-8)" aria-label="Footer">
        <div
          v-for="col in footerColumns"
          :key="col.title"
          class="flex flex-col gap-[14px] whitespace-nowrap"
        >
          <p class="text-label text-[16px] tracking-[0.96px] text-fg">{{ col.title }}</p>
          <a
            v-for="link in col.links"
            :key="link.label"
            :href="link.href"
            class="font-body text-[16px] leading-body text-fg/60 transition-colors hover:text-fg"
            >{{ link.label }}</a
          >
        </div>
      </nav>
    </div>
    <div
      class="flex justify-between gap-4 font-body text-[14px] leading-body text-fg/60 lt-sm:flex-col"
    >
      <p>© 2026 NO_PAPER · Portfolio concept</p>
      <p class="flex gap-[11px]">
        <a href="#" class="hover:text-fg">Privacy</a><span aria-hidden="true">·</span
        ><a href="#" class="hover:text-fg">Terms</a>
      </p>
    </div>
  </footer>
</template>
