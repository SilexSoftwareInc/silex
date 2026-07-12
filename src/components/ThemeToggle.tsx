"use client";

import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    root.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", next === "dark" ? "#000000" : "#ffffff");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] transition-colors duration-100 hover:bg-[var(--color-muted)]"
    >
      <Sun size={18} strokeWidth={1.5} className="icon-sun" aria-hidden="true" />
      <Moon size={18} strokeWidth={1.5} className="icon-moon" aria-hidden="true" />
    </button>
  );
}
