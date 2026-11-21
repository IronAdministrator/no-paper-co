# NO_PAPER landing page

Landing page for the NO_PAPER design & development studio, built from the Figma file
[Commercial_Website](https://www.figma.com/design/b2od3B5r7SfhHiFxgj0OsB/Commercial_Website?node-id=0-1).

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
pnpm dev               # start the site at http://localhost:5173
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
- The about-section laptop illustration was cropped from a Figma render because the Figma API limit was reached
  before it could be exported on its own. Re-export `Object/Other 03` as a transparent PNG and replace
  `src/assets/object-other-03.png` for a sharper image.
