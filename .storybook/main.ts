import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.ts"],
  addons: ["@storybook/addon-docs"],
  framework: { name: "@storybook/vue3-vite", options: {} },
  staticDirs: ["../public"],
};

export default config;
