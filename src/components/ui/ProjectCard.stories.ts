import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { projects } from "../../data/content";
import ProjectCard from "./ProjectCard.vue";

const meta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  args: projects[0],
  decorators: [() => ({ template: '<div style="width: 520px; max-width: 100%"><story /></div>' })],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fresco: Story = {};
export const Routely: Story = { args: projects[1] };
