import type { Preview } from "@storybook/vue3-vite";
import { themes } from "storybook/theming";
import "virtual:uno.css";
import "../src/style.css";
import { lightColors, tokens } from "../src/design-system/tokens";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: { matchers: { color: /(background|color)$/i }, exclude: ["icon", "thumbnail"] },
    docs: { theme: themes.dark },
  },
  // Toolbar switch for the site theme. Stories render on the theme's page colour.
  globalTypes: {
    theme: {
      description: "Site theme",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "dark", title: "Dark", icon: "moon" },
          { value: "light", title: "Light", icon: "sun" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "dark" },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      document.body.style.background = theme === "light" ? lightColors.ink : tokens.colors.ink;
      return story();
    },
  ],
  tags: ["autodocs"],
};

export default preview;
