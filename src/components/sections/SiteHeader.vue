<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useTheme } from "../../composables/useTheme";
import { navLinks } from "../../data/content";
import ThemeToggle from "../ui/ThemeToggle.vue";

const open = ref(false);
const scrolled = ref(false);
const { theme, setTheme } = useTheme();

function onScroll() {
  scrolled.value = window.scrollY > 8;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <!-- Sticky with a negative top: 24px of the top padding scrolls away, so the bar stays compact
       without changing the page layout. The frosted background fades in once the page scrolls. -->
  <header class="bar sticky top-[-24px] z-30 pb-4 pt-10" :class="{ scrolled }">
    <nav class="container-page relative flex items-center justify-between gap-6" aria-label="Main">
      <a href="#top" class="font-heading font-bold text-[20px] leading-heading text-fg">NO_PAPER</a>

      <div class="flex items-center gap-[68px] lt-lg:gap-10 lt-md:gap-3">
        <ul
          id="main-menu"
          class="flex items-center gap-[68px] lt-lg:gap-10 lt-md:(absolute right-0 top-full mt-3 flex-col items-start gap-4 rounded-panel border border-solid border-primary-line bg-surface-deep p-6)"
          :class="{ 'lt-md:hidden': !open }"
        >
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="font-heading text-[20px] leading-heading text-fg transition-colors hover:text-primary"
              @click="open = false"
              >{{ link.label }}</a
            >
          </li>
        </ul>

        <ThemeToggle :theme="theme" @toggle="setTheme" />

        <button
          type="button"
          class="hidden lt-md:flex size-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-chip border-none bg-transparent"
          :aria-expanded="open"
          aria-controls="main-menu"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <span v-for="n in 3" :key="n" class="block h-[2px] w-6 rounded bg-fg" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.bar::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-bottom: 1px solid var(--colors-primary-line);
  background: color-mix(in srgb, var(--colors-ink) 78%, transparent);
  backdrop-filter: blur(14px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bar.scrolled::before {
  opacity: 1;
}
</style>
