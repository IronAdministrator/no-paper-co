import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import type { Theme } from "../../composables/useTheme";
import ThemeToggle from "./ThemeToggle.vue";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  argTypes: { theme: { control: "inline-radio", options: ["light", "dark"] } },
  parameters: {
    docs: {
      description: {
        component:
          "Sun/moon switch for the light and dark themes. In the site it's wired to useTheme(), which saves the choice and reveals the new theme in a circle from the toggle. 64×36 drawn, 44px tall hit area, role=switch.",
      },
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { args: { theme: "light" } };
export const Dark: Story = { args: { theme: "dark" } };

/** Click it to see the animation. */
export const Interactive: Story = {
  args: { theme: "dark" },
  render: (args) => ({
    components: { ThemeToggle },
    setup() {
      const theme = ref<Theme>(args.theme);
      return { theme };
    },
    template: '<ThemeToggle :theme="theme" @toggle="(next) => (theme = next)" />',
  }),
};
