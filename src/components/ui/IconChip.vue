<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string;
    /** lilac: 56px service chip · accent: 40px contact chip · outline: 40px round social chip */
    tone?: "lilac" | "accent" | "outline";
    label?: string;
  }>(),
  { tone: "lilac" },
);

const tones = {
  lilac: { box: "size-14 rounded-tile bg-primary-soft", icon: 26 },
  accent: { box: "size-10 rounded-chip bg-accent-soft", icon: 18 },
  outline: { box: "size-10 rounded-full border border-solid border-white/20", icon: 18 },
} as const;
</script>

<template>
  <span
    class="icon-chip"
    :class="tones[tone].box"
    :role="label ? 'img' : undefined"
    :aria-label="label"
  >
    <img :src="icon" alt="" :width="tones[tone].icon" :height="tones[tone].icon" />
  </span>
</template>
