"use client";

import { MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ui-pill px-3 py-2 text-xs"
      aria-label="Toggle dark mode"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
