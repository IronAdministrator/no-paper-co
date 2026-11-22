<script setup lang="ts">
defineProps<{ number: string; title: string; description: string }>();
</script>

<template>
  <li class="flex flex-col gap-4">
    <p class="font-heading font-bold text-[56px] leading-[1.1] text-primary">{{ number }}</p>
    <div class="line h-[2px] w-full" aria-hidden="true" />
    <h3 class="text-h3">{{ title }}</h3>
    <p class="text-body text-fg/70">{{ description }}</p>
  </li>
</template>

<style scoped>
.line {
  background: linear-gradient(to right, var(--colors-primary-DEFAULT), transparent);
}
</style>
