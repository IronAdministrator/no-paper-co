<script setup lang="ts">
import quoteIcon from "../../assets/icon-quote.svg";
import starIcon from "../../assets/icon-star-fill.svg";
import ThemeIcon from "./ThemeIcon.vue";

defineProps<{ quote: string; name: string; role: string; initials: string }>();
</script>

<template>
  <figure class="card m-0 flex flex-col items-start gap-6 p-8">
    <ThemeIcon :src="quoteIcon" :size="36" class="text-accent" />
    <blockquote class="m-0 font-body text-[18px] leading-[1.5] text-fg/90">
      {{ quote }}
    </blockquote>
    <div class="flex gap-1" role="img" aria-label="Rated 5 out of 5">
      <img v-for="n in 5" :key="n" :src="starIcon" alt="" width="16" height="16" />
    </div>
    <figcaption class="flex items-center gap-[14px]">
      <span
        class="avatar grid size-12 place-items-center rounded-full font-heading font-semibold text-[18px] text-on-primary"
        aria-hidden="true"
      >
        {{ initials }}
      </span>
      <span class="flex flex-col gap-[2px] whitespace-nowrap">
        <span class="font-heading font-semibold text-[18px] leading-heading">{{ name }}</span>
        <span class="font-body text-[14px] leading-body text-fg/60">{{ role }}</span>
      </span>
    </figcaption>
  </figure>
</template>

<style scoped>
.avatar {
  background-image: linear-gradient(
    135deg,
    var(--colors-primary-DEFAULT) 0%,
    var(--colors-accent-DEFAULT) 71.429%
  );
}
</style>
