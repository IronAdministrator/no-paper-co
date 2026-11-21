import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { defineConfig, lazyPlugins } from "vite-plus";

// https://vite.dev/config/
export default defineConfig({
  fmt: { ignorePatterns: ["storybook-static/**", "dist/**"] },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    // Type checking of .vue files is done by vue-tsc (`pnpm typecheck`), which understands SFCs.
    options: { typeAware: true, typeCheck: false },
  },
  plugins: lazyPlugins(() => [vue(), UnoCSS()]),
});
