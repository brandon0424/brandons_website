import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        }
      },
      boxShadow: {
        soft: "0 14px 50px rgba(18, 37, 55, 0.08)"
      },
      animation: {
        "float-in": "float-in 0.7s ease-out both"
      },
      keyframes: {
        "float-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      fontFamily: {
        sans: [
          "Manrope",
          "Avenir Next",
          "Segoe UI",
          "Helvetica Neue",
          "sans-serif"
        ],
        serif: ["Fraunces", "Iowan Old Style", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "Menlo", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
