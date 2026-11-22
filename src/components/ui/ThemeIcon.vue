<script setup lang="ts">
/**
 * Single-colour icon drawn in the current text colour (via a CSS mask), so it follows the theme.
 * Set the colour with a text utility, for example class="text-accent".
 */
withDefaults(defineProps<{ src: string; size?: number }>(), { size: 18 });
</script>

<template>
  <span
    class="theme-icon inline-block shrink-0 bg-current"
    aria-hidden="true"
    :style="{ width: `${size}px`, height: `${size}px`, '--icon': `url(${JSON.stringify(src)})` }"
  />
</template>

<style scoped>
.theme-icon {
  mask: var(--icon) center / contain no-repeat;
}
</style>
