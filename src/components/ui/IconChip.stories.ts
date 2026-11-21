import type { Meta, StoryObj } from "@storybook/vue3-vite";
import envelope from "../../assets/icon-envelope.svg";
import github from "../../assets/icon-github.svg";
import phone from "../../assets/icon-phone.svg";
import IconChip from "./IconChip.vue";

const meta = {
  title: "Components/IconChip",
  component: IconChip,
  argTypes: { tone: { control: "inline-radio", options: ["lilac", "accent", "outline"] } },
} satisfies Meta<typeof IconChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lilac: Story = { args: { icon: phone, tone: "lilac" } };
export const Accent: Story = { args: { icon: envelope, tone: "accent" } };
export const Outline: Story = { args: { icon: github, tone: "outline", label: "GitHub" } };
