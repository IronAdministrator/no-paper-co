<script setup lang="ts">
defineProps<{ value: string; label: string }>();
</script>

<template>
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <p class="font-heading font-bold text-[48px] leading-[1.2] lt-sm:text-[36px]">{{ value }}</p>
    <p class="font-body text-[16px] leading-body text-fg/70">{{ label }}</p>
  </div>
</template>
