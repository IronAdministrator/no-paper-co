<script setup lang="ts">
import { useId } from "vue";

withDefaults(
  defineProps<{
    label: string;
    placeholder?: string;
    type?: "text" | "email" | "tel";
    name?: string;
    multiline?: boolean;
    required?: boolean;
  }>(),
  { type: "text", multiline: false, required: false },
);

const model = defineModel<string>({ default: "" });
const id = useId();

const fieldClass =
  "w-full rounded-chip border border-solid border-white/15 bg-white/5 px-4 font-body text-[16px] leading-body text-white outline-none transition-colors placeholder:text-white/40 focus:(border-primary bg-white/8)";
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <label :for="id" class="font-body font-semibold text-[14px] leading-body text-white/75">{{
      label
    }}</label>
    <textarea
      v-if="multiline"
      :id="id"
      v-model="model"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :class="[fieldClass, 'h-[120px] resize-y pt-[15px]']"
    />
    <input
      v-else
      :id="id"
      v-model="model"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :class="[fieldClass, 'h-[52px]']"
    />
  </div>
</template>
