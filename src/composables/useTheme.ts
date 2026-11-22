import { readonly, ref } from "vue";

export type Theme = "light" | "dark";

const STORAGE_KEY = "np-theme";

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// One shared state for the whole app. index.html sets data-theme before first paint.
const theme = ref<Theme>(readTheme());

function apply(next: Theme) {
  theme.value = next;
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }
}

/**
 * Switches the theme. When the browser supports view transitions and motion is allowed,
 * the new theme grows out of `origin` (the toggle) as a circle.
 */
function setTheme(next: Theme, origin?: { x: number; y: number }) {
  if (next === theme.value) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduceMotion || !origin) {
    apply(next);
    return;
  }
  const { x, y } = origin;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const transition = document.startViewTransition(() => apply(next));
  void transition.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      {
        duration: 550,
        easing: "cubic-bezier(.4, 0, .2, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}

export function useTheme() {
  return { theme: readonly(theme), setTheme };
}
