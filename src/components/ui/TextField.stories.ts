import type { Meta, StoryObj } from "@storybook/vue3-vite";
import TextField from "./TextField.vue";

const meta = {
  title: "Components/TextField",
  component: TextField,
  args: { label: "Your name", placeholder: "Jane Cooper" },
  decorators: [() => ({ template: '<div style="width: 366px"><story /></div>' })],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {};
export const Email: Story = {
  args: { label: "Email", type: "email", placeholder: "jane@company.com" },
};
export const Multiline: Story = {
  args: {
    label: "Project details",
    placeholder: "A few lines about your idea, timeline and budget",
    multiline: true,
  },
};
