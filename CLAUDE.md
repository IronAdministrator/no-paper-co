# NO_PAPER: notes for Claude

Landing page for the NO_PAPER studio. Vue 3 + TypeScript, UnoCSS, Storybook, built with Vite+ (`vp`) and pnpm.

## Design sources

- **Design system (rules, tokens, components, assets):** [NO_PAPER design system](https://claude.ai/artifact/KCWAWkADpemUpzAEaNW7pk).
  Its README holds the design rules. Read it before designing or building anything new.
- **Canvas:** [NO_PAPER landing page](https://claude.ai/artifact/Maon1LoaGoVWjW3w6k6fbW), with the design system installed.
- The Figma file is kept for reference only. Claude Design is the source of truth for design.

## Rules

- **Tokens live in one place in code:** `src/design-system/tokens.ts`, fed into `uno.config.ts`. Never hard-code a colour,
  font, radius or line height in a component. If you add or change a token, change it in the design system's
  `tokens.json` too (and the other way round), and update `src/design-system/Foundations.mdx`.
- **Two themes, one set of names.** Dark is the default; the light theme lives in `lightColors` in the same file.
  `uno.config.ts` writes both as `--colors-*` CSS variables, switched by `data-theme` on `<html>` (set before paint in
  `index.html`, changed through `useTheme()`). Use `text-fg`/`text-fg/70` etc. for text, never `text-white`, and draw
  single-colour icons with `ThemeIcon` so they follow the theme. Check new text pairs at 4.5:1 in both themes.
- **UnoCSS first.** Use theme utilities (`bg-ink`, `text-primary`, `rounded-card`, `font-heading`) and the shortcuts
  (`text-display`, `text-h2`, `text-h3`, `text-eyebrow`, `text-lead`, `text-body`, `text-label`, `card`, `section`,
  `container-page`, `icon-chip`). Responsive variants are `lt-lg:`, `lt-md:`, `lt-sm:`.
- **Plain CSS only in `<style scoped>`**, and only for what utilities can't express (gradients, masks, keyframes).
  In scoped CSS, use the theme variables (`var(--colors-primary-DEFAULT)`), not hex values. `src/style.css` holds only
  the fonts, body base and the theme-switch view transition.
- **Components:** reusable pieces go in `src/components/ui/`, each with a `*.stories.ts` Storybook story. Page sections
  go in `src/components/sections/` and are built from ui components. Copy goes in `src/data/content.ts`.
- When a ui component's look or API changes, update its story and the matching component in the design system.
- Follow the design rules: dark only, lilac `primary` + teal `accent`, Outfit for headings and Nunito Sans for body,
  pill buttons, translucent outlined cards with no shadows, 44px touch targets, 4.5:1 text contrast.
- Write the name as `NO_PAPER`. Use [PLACEHOLDER] instead of invented facts or numbers.

## Commands

```bash
pnpm install
pnpm dev               # app at http://localhost:5173 and Storybook at http://localhost:6006
pnpm dev:app           # just the app
pnpm check             # vp check (format + lint) and vue-tsc; run before every commit
pnpm build             # type-check and production build
pnpm build-storybook   # make sure stories still build
```

Use `vp add` (or `pnpm add`) for dependencies. Don't use npm or yarn.
