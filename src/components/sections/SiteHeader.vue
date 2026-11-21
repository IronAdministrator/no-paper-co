<script setup lang="ts">
import { ref } from "vue";
import { navLinks } from "../../data/content";

const open = ref(false);
</script>

<template>
  <header class="container-page relative z-20 pt-10">
    <nav class="flex items-center justify-between" aria-label="Main">
      <a href="#top" class="font-heading font-bold text-[20px] leading-heading text-white"
        >NO_PAPER</a
      >

      <button
        type="button"
        class="hidden lt-md:flex size-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-chip border-none bg-transparent"
        :aria-expanded="open"
        aria-controls="main-menu"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span v-for="n in 3" :key="n" class="block h-[2px] w-6 rounded bg-white" />
      </button>

      <ul
        id="main-menu"
        class="flex items-center gap-[68px] lt-lg:gap-10 lt-md:(absolute right-0 top-full mt-3 flex-col items-start gap-4 rounded-panel border border-solid border-primary-line bg-surface-deep p-6)"
        :class="{ 'lt-md:hidden': !open }"
      >
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="font-heading text-[20px] leading-heading text-white transition-colors hover:text-primary"
            @click="open = false"
            >{{ link.label }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
