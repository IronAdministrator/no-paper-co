import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { testimonials } from "../../data/content";
import TestimonialCard from "./TestimonialCard.vue";

const meta = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  args: testimonials[0],
  decorators: [() => ({ template: '<div style="width: 339px"><story /></div>' })],
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
