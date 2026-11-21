import type { Meta, StoryObj } from "@storybook/vue3-vite";
import StatItem from "./StatItem.vue";

const meta = {
  title: "Components/StatItem",
  component: StatItem,
  args: { value: "120+", label: "Projects shipped" },
} satisfies Meta<typeof StatItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
