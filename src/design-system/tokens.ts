/**
 * NO_PAPER design tokens, taken from the Figma file "Commercial_Website".
 * Every component styles itself with these tokens and shortcuts, so a change here
 * updates the whole site and the Storybook design system at once.
 */
export const tokens = {
  colors: {
    ink: "#000022", // page background
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
