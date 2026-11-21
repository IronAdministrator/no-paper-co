<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Small uppercase line above the title. */
    eyebrow: string;
    title: string;
    as?: "h1" | "h2";
  }>(),
  { as: "h2" },
);
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-eyebrow">{{ eyebrow }}</p>
    <component :is="as" class="text-h2 text-white">{{ title }}</component>
  </div>
</template>
