<script setup lang="ts">
import { expertise } from "../../data/content";
</script>

<template>
  <section id="expertise" class="container-page mt-[49px] scroll-mt-10 lt-lg:mt-16">
    <h2
      class="pl-1 font-heading font-semibold text-[24px] leading-[1.2] uppercase text-white lt-sm:text-[18px]"
    >
      Our expertise in
    </h2>
    <ul
      class="mt-[7px] flex items-center justify-between gap-6 rounded-card bg-surface px-[46px] py-[27px] lt-md:(flex-wrap justify-center gap-x-8 gap-y-3 px-6 py-5)"
    >
      <li
        v-for="item in expertise"
        :key="item"
        class="font-heading text-[30px] leading-[1.2] whitespace-nowrap text-white/60 lt-md:text-[22px]"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>
