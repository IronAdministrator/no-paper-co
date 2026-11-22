import type { Meta, StoryObj } from "@storybook/vue3-vite";
import arrowRight from "../../assets/icon-arrow-right.svg";
import quote from "../../assets/icon-quote.svg";
import ThemeIcon from "./ThemeIcon.vue";

const meta = {
  title: "Components/ThemeIcon",
  component: ThemeIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Single-colour icon drawn in the current text colour, so it follows the theme. Colour it with a text utility such as text-accent or text-primary.",
      },
    },
  },
} satisfies Meta<typeof ThemeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: { src: quote, size: 36 },
  render: (args) => ({
    components: { ThemeIcon },
    setup: () => ({ args }),
    template: '<ThemeIcon v-bind="args" class="text-accent" />',
  }),
};

export const Primary: Story = {
  args: { src: arrowRight, size: 24 },
  render: (args) => ({
    components: { ThemeIcon },
    setup: () => ({ args }),
    template: '<ThemeIcon v-bind="args" class="text-primary" />',
  }),
};
