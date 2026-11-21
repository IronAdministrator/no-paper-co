import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "NO_PAPER design system",
    colorPrimary: "#8d8dda",
    colorSecondary: "#85cecf",
    appBg: "#000022",
    appContentBg: "#000022",
    barBg: "#141240",
    fontBase: '"Nunito Sans", system-ui, sans-serif',
  }),
});
