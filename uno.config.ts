import { defineConfig, presetWind4, transformerDirectives, transformerVariantGroup } from "unocss";
import { lightColors, tokens } from "./src/design-system/tokens.ts";

type ColorTree = { readonly [key: string]: string | ColorTree };

/** Flattens a colour tree into the --colors-* variables that presetWind4 reads (primary.DEFAULT → --colors-primary-DEFAULT). */
function colorVars(tree: ColorTree, prefix = "--colors"): string {
  return Object.entries(tree)
    .map(([key, value]) =>
      typeof value === "string"
        ? `${prefix}-${key}:${value};`
        : colorVars(value, `${prefix}-${key}`),
    )
    .join("");
}

export default defineConfig({
  presets: [presetWind4({ preflights: { reset: true } })],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // Both themes as CSS variables, so every colour utility follows data-theme on <html>.
  preflights: [
    {
      getCSS: () =>
        `:root{color-scheme:dark;${colorVars(tokens.colors)}}` +
        `:root[data-theme="light"]{color-scheme:light;${colorVars(lightColors)}}`,
    },
  ],
  // light:… applies a utility only in the light theme (for the few things that differ beyond colour).
  variants: [
    (matcher) =>
      matcher.startsWith("light:")
        ? { matcher: matcher.slice(6), selector: (s) => `:root[data-theme="light"] ${s}` }
        : matcher,
  ],
  theme: {
    colors: tokens.colors,
    font: tokens.font,
    radius: tokens.radius,
    leading: tokens.leading,
  },
  shortcuts: {
    // Layout
    "container-page": "mx-auto w-[min(1065px,calc(100%-48px))] lt-sm:w-[calc(100%-32px)]",
    section: "mt-[140px] scroll-mt-10 lt-md:mt-24 lt-sm:mt-18",

    // Typography
    "text-display":
      "font-heading font-bold text-[48.8px] leading-[1.2] lt-md:text-[40px] lt-sm:text-[34px]",
    "text-h2": "font-heading font-bold text-[44px] leading-[1.2] lt-sm:text-[32px]",
    "text-h3": "font-heading font-semibold text-[24px] leading-heading",
    "text-eyebrow":
      "font-heading font-semibold text-[18px] leading-heading tracking-[1.44px] uppercase text-primary lt-sm:text-[15px]",
    "text-lead": "font-body text-[18px] leading-[1.6]",
    "text-body": "font-body text-[16px] leading-[1.5]",
    "text-label": "font-heading font-semibold uppercase leading-heading",

    // Surfaces
    card: "bg-surface-card border border-solid border-primary-line rounded-card",
    "icon-chip": "grid place-items-center shrink-0",
  },
});
