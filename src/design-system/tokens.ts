/**
 * NO_PAPER design tokens, taken from the Figma file "Commercial_Website".
 * Every component styles itself with these tokens and shortcuts, so a change here
 * updates the whole site and the Storybook design system at once.
 */
export const tokens = {
  /** Dark theme (the default). The light theme below overrides the same names. */
  colors: {
    ink: "#000022", // page background
    fg: "#ffffff", // text and line colour; use opacity steps fg/90 … fg/60 for quieter copy
    surface: {
      DEFAULT: "#312a64", // expertise bar, contact gradient start
      deep: "#141240", // contact gradient end
      card: "rgba(49, 42, 100, 0.6)", // service / testimonial cards
    },
    primary: {
      DEFAULT: "#8d8dda", // buttons, eyebrows, process numbers
      hover: "#a0a0e6",
      soft: "rgba(141, 141, 218, 0.18)", // icon chip
      line: "rgba(141, 141, 218, 0.25)", // card borders
      text: "#9a9ae0", // small lilac text on solid surface (4.9:1); primary there is only 4.23:1
    },
    /**
     * Text and icons on a primary fill (filled buttons). Ink on lilac is 6.8:1 (8.5:1 on hover);
     * white on lilac is only 3.0:1, so never put white text on primary.
     * Small primary text on surface is 4.23:1: keep lilac text on surface to 24px and up.
     */
    "on-primary": "#000022",
    accent: {
      DEFAULT: "#85cecf", // links, contact chips
      soft: "rgba(133, 206, 207, 0.15)",
    },
    star: "#f5c452",
  },
  font: {
    heading: '"Outfit", system-ui, sans-serif',
    body: '"Nunito Sans", system-ui, sans-serif',
  },
  /** Line heights that match Figma's "auto" line height for each family. */
  leading: {
    heading: "1.26",
    body: "1.364",
  },
  radius: {
    chip: "12px",
    tile: "16px",
    card: "20px",
    panel: "24px",
    section: "32px",
    pill: "40px",
  },
} as const;

/**
 * Light theme. Same names as tokens.colors; uno.config.ts writes these as CSS variable overrides
 * under :root[data-theme="light"]. Every text pair meets WCAG AA (4.5:1) on ink, surface and cards:
 * fg/60 is 4.7:1 on surface, primary 5.2:1, accent 4.9:1, white on primary 6.3:1.
 */
export const lightColors = {
  ink: "#f5f4fc",
  fg: "#0c0c30",
  surface: {
    DEFAULT: "#e9e7f8",
    deep: "#f3f1fc",
    card: "rgba(255, 255, 255, 0.7)",
  },
  primary: {
    DEFAULT: "#5654b4",
    hover: "#46449c",
    soft: "rgba(86, 84, 180, 0.12)",
    line: "rgba(86, 84, 180, 0.25)",
    text: "#5654b4",
  },
  "on-primary": "#ffffff",
  accent: {
    DEFAULT: "#1b6f71",
    soft: "rgba(27, 111, 113, 0.12)",
  },
  star: "#f5c452",
} as const;
