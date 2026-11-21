import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ButtonPill from "./ButtonPill.vue";

const meta = {
  title: "Components/ButtonPill",
  component: ButtonPill,
  args: { variant: "filled", block: false },
  argTypes: {
    variant: { control: "inline-radio", options: ["filled", "outline"] },
  },
  render: (args) => ({
    components: { ButtonPill },
    setup: () => ({ args }),
    template: '<ButtonPill v-bind="args">get estimate</ButtonPill>',
  }),
} satisfies Meta<typeof ButtonPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const AsLink: Story = { args: { href: "#contact" } };
export const Block: Story = {
  args: { block: true },
  decorators: [() => ({ template: '<div style="width: 366px"><story /></div>' })],
};
