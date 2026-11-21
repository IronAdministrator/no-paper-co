import type { Preview } from "@storybook/vue3-vite";
import { themes } from "storybook/theming";
import "virtual:uno.css";
import "../src/style.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      options: {
        ink: { name: "Ink (page)", value: "#000022" },
        surface: { name: "Surface", value: "#312a64" },
      },
    },
    controls: { matchers: { color: /(background|color)$/i }, exclude: ["icon", "thumbnail"] },
    docs: { theme: themes.dark },
  },
  initialGlobals: { backgrounds: { value: "ink" } },
  tags: ["autodocs"],
};

export default preview;
