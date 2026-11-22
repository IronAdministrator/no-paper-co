# NO_PAPER landing page

Landing page for the NO_PAPER design & development studio.

## Design

The design lives in Claude Design:

- [NO_PAPER design system](https://claude.ai/artifact/KCWAWkADpemUpzAEaNW7pk): design rules, tokens, components and assets.
- [NO_PAPER landing page canvas](https://claude.ai/artifact/Maon1LoaGoVWjW3w6k6fbW): the full landing page and a tokens and components board, with the design system installed.

Keep the design system and `src/design-system/tokens.ts` in step when either changes. `CLAUDE.md` has the working rules.
The original Figma file ([Commercial_Website](https://www.figma.com/design/b2od3B5r7SfhHiFxgj0OsB/Commercial_Website?node-id=0-1))
is kept for reference only.

## Stack

- [Vite+](https://viteplus.dev) (`vp`) for dev server, build, lint and format
- Vue 3 + TypeScript
- [UnoCSS](https://unocss.dev) (`presetWind4`) for styling, with plain CSS in `<style scoped>` blocks only where
  utilities can't express something (gradients, masks, keyframes)
- Storybook 10 for the design system
- pnpm

## Scripts

```bash
pnpm install
pnpm dev               # site at http://localhost:5173 + Storybook at http://localhost:6006
pnpm dev --host        # same, reachable from other devices on your network
pnpm dev:app           # just the site
pnpm build             # type-check and build to dist/
pnpm preview           # serve the production build
pnpm check             # format, lint (vp check) and type-check (vue-tsc)
pnpm storybook         # design system at http://localhost:6006
pnpm build-storybook   # static Storybook in storybook-static/
```

## Structure

```
src/
  design-system/
    tokens.ts            # colors, fonts, line heights, radii from Figma
    Foundations.mdx      # Storybook docs page for the tokens
  components/
    ui/                  # design system components + *.stories.ts
    sections/            # page sections composed from ui components
  data/content.ts        # all page copy, links and lists
  assets/                # images and icons exported from Figma
uno.config.ts            # UnoCSS theme (from tokens.ts) and shortcuts such as text-h2, card, section
```

## Notes

- The contact form has no backend yet. Submitting opens the visitor's mail app with the message pre-filled
  to `hello@nopaper.studio`.
- The about-section laptop illustration was cropped from a Figma render; its page-colour background was converted to
  transparency so it works in both themes. A clean export from the source file would still be sharper.
