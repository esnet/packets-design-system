import React from "react";

export function useNearestThemeClass(ref: React.RefObject<HTMLElement>) {
  const [theme, setTheme] = React.useState<"dark" | "light" | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    let el: HTMLElement | null = ref.current;
    while (el) {
      if (el.classList.contains("dark")) {
        setTheme("dark");
        return;
      }
      if (el.classList.contains("light")) {
        setTheme("light");
        return;
      }
      el = el.parentElement;
    }

    // fallback if nothing found
    setTheme("light");
  }, [ref]);

  return theme;
}
