import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { processSteps } from "../../data/content";
import ProcessStep from "./ProcessStep.vue";

const meta = {
  title: "Components/ProcessStep",
  component: ProcessStep,
  args: processSteps[0],
  decorators: [() => ({ template: '<ol style="width: 248px"><story /></ol>' })],
} satisfies Meta<typeof ProcessStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Discover: Story = {};
