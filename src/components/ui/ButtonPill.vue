<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /** Visual style: filled lilac or lilac outline. */
    variant?: "filled" | "outline";
    /** Renders a link when set, otherwise a button. */
    href?: string;
    type?: "button" | "submit";
    /** Stretch to the full width of the parent. */
    block?: boolean;
  }>(),
  { variant: "filled", type: "button", block: false },
);

const classes = computed(() => [
  "inline-flex items-center justify-center px-9 py-[9px] border-2 border-solid border-primary rounded-pill",
  "text-label text-[18px] tracking-[1.08px] text-white whitespace-nowrap cursor-pointer",
  "transition-colors duration-200 focus-visible:(outline-2 outline-solid outline-accent outline-offset-3)",
  props.variant === "filled"
    ? "bg-primary hover:(bg-primary-hover border-primary-hover)"
    : "bg-transparent hover:bg-primary-soft",
  props.block ? "w-full" : "",
]);
</script>

<template>
  <a v-if="href" :href="href" :class="classes"><slot /></a>
  <button v-else :type="type" :class="classes"><slot /></button>
</template>
