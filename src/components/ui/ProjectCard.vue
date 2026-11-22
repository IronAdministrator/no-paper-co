<script setup lang="ts">
import arrowUpRight from "../../assets/icon-arrow-up-right.svg";
import ThemeIcon from "./ThemeIcon.vue";

withDefaults(defineProps<{ thumbnail: string; title: string; tags: string[]; href?: string }>(), {
  href: "#contact",
});
</script>

<template>
  <article class="group flex min-w-0 flex-col gap-5">
    <a :href="href" :aria-label="title" class="block overflow-hidden rounded-panel">
      <img
        :src="thumbnail"
        alt=""
        width="520"
        height="340"
        class="h-auto w-full transition-transform duration-400 group-hover:scale-103"
      />
    </a>
    <div class="flex items-center justify-between gap-4">
      <div class="flex min-w-0 flex-col gap-3">
        <h3 class="font-heading font-semibold text-[26px] leading-heading lt-sm:text-[21px]">
          {{ title }}
        </h3>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="tag in tags"
            :key="tag"
            class="rounded-pill border border-solid border-fg/20 px-[14px] py-[6px] font-body font-semibold text-[14px] leading-body text-fg/80"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
      <a
        :href="href"
        :aria-label="`Open ${title}`"
        class="grid size-[52px] shrink-0 place-items-center rounded-full border border-solid border-primary transition-colors hover:bg-primary/20"
      >
        <ThemeIcon :src="arrowUpRight" :size="20" class="text-fg" />
      </a>
    </div>
  </article>
</template>
