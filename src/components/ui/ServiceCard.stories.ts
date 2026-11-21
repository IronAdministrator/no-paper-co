import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { services } from "../../data/content";
import ServiceCard from "./ServiceCard.vue";

const meta = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  args: services[0],
  decorators: [() => ({ template: '<div style="width: 248px"><story /></div>' })],
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MobileApps: Story = {};
export const Logistics: Story = { args: services[3] };
