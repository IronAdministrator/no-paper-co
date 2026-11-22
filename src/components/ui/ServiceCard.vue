<script setup lang="ts">
import arrowRight from "../../assets/icon-arrow-right.svg";
import IconChip from "./IconChip.vue";
import ThemeIcon from "./ThemeIcon.vue";

withDefaults(defineProps<{ icon: string; title: string; description: string; href?: string }>(), {
  href: "#contact",
});
</script>

<template>
  <article
    class="card group flex flex-col items-start gap-5 px-7 py-8 transition-all duration-250 hover:(-translate-y-1 border-primary/55)"
  >
    <IconChip :icon="icon" tone="lilac" />
    <h3 class="text-h3">{{ title }}</h3>
    <p class="text-body text-fg/70">{{ description }}</p>
    <a
      :href="href"
      class="inline-flex items-center gap-2 text-label text-[14px] tracking-[1.12px] text-accent"
    >
      Learn more
      <ThemeIcon
        :src="arrowRight"
        :size="16"
        class="transition-transform duration-200 group-hover:translate-x-[3px]"
      />
    </a>
  </article>
</template>
