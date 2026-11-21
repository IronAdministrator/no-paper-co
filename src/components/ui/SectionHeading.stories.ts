import type { Meta, StoryObj } from "@storybook/vue3-vite";
import SectionHeading from "./SectionHeading.vue";

const meta = {
  title: "Components/SectionHeading",
  component: SectionHeading,
  args: { eyebrow: "What we do", title: "Services built around your goals" },
  decorators: [() => ({ template: '<div style="max-width: 620px"><story /></div>' })],
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Short: Story = { args: { eyebrow: "Selected work", title: "Recent projects" } };
