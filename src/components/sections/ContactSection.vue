<script setup lang="ts">
import { reactive, ref } from "vue";
import iconEnvelope from "../../assets/icon-envelope.svg";
import iconGeo from "../../assets/icon-geo-alt.svg";
import iconTelephone from "../../assets/icon-telephone.svg";
import sideArt from "../../assets/object-other-18.webp";
import { contact } from "../../data/content";
import ButtonPill from "../ui/ButtonPill.vue";
import IconChip from "../ui/IconChip.vue";
import SectionHeading from "../ui/SectionHeading.vue";
import TextField from "../ui/TextField.vue";

const lines = [
  { icon: iconEnvelope, label: contact.email, href: `mailto:${contact.email}` },
  { icon: iconTelephone, label: contact.phone, href: contact.phoneHref },
  { icon: iconGeo, label: contact.location },
];

const form = reactive({ name: "", email: "", need: "", details: "" });
const sent = ref(false);

// No backend yet: open the visitor's mail app with the message pre-filled.
function submit() {
  const body = `Name: ${form.name}\nEmail: ${form.email}\nNeed: ${form.need}\n\n${form.details}`;
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
    `Project enquiry from ${form.name}`,
  )}&body=${encodeURIComponent(body)}`;
  sent.value = true;
}
</script>

<template>
  <section
    id="contact"
    class="panel container-page section flex items-center gap-16 overflow-hidden rounded-section border border-solid border-primary/30 p-16 lt-lg:(flex-col items-stretch gap-12 p-10) lt-sm:(p-6)"
  >
    <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
      <SectionHeading eyebrow="Let's talk" title="Have an idea? Let's build it together." />
      <p class="text-lead text-white/75">
        Tell us a bit about your project and we'll get back to you within one business day with next
        steps and a rough estimate.
      </p>
      <ul class="flex flex-col gap-4">
        <li v-for="line in lines" :key="line.label" class="flex items-center gap-[14px]">
          <IconChip :icon="line.icon" tone="accent" />
          <component
            :is="line.href ? 'a' : 'span'"
            :href="line.href"
            class="font-body font-semibold text-[17px] leading-body text-white/90"
            :class="{ 'hover:text-accent transition-colors': line.href }"
            >{{ line.label }}</component
          >
        </li>
      </ul>
      <img
        :src="sideArt"
        alt=""
        width="260"
        height="249"
        class="h-[249px] w-[260px] lt-lg:hidden"
      />
    </div>

    <form
      class="flex w-[440px] shrink-0 flex-col gap-[18px] rounded-panel border border-solid border-white/10 bg-ink/60 p-9 lt-lg:w-full lt-sm:p-6"
      @submit.prevent="submit"
    >
      <TextField
        v-model="form.name"
        label="Your name"
        name="name"
        placeholder="Jane Cooper"
        required
      />
      <TextField
        v-model="form.email"
        label="Email"
        name="email"
        type="email"
        placeholder="jane@company.com"
        required
      />
      <TextField
        v-model="form.need"
        label="What do you need?"
        name="need"
        placeholder="Mobile app, website, e-commerce…"
      />
      <TextField
        v-model="form.details"
        label="Project details"
        name="details"
        placeholder="A few lines about your idea, timeline and budget"
        multiline
      />
      <ButtonPill type="submit" block>Send message</ButtonPill>
      <p v-if="sent" class="text-center font-body text-[14px] text-accent" role="status">
        Thanks! Your mail app should open with the message ready to send.
      </p>
    </form>
  </section>
</template>

<style scoped>
.panel {
  background-image: linear-gradient(133.87deg, #312a64 0%, #141240 71.429%);
}
</style>
