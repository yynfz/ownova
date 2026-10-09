import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "on-background": "#1b1c19",
        "surface-variant": "#e4e2dd",
        "primary-fixed": "#c1ecdd",
        "on-primary": "#ffffff",
        "on-tertiary-container": "#ca9a52",
        "surface-container-lowest": "#ffffff",
        surface: "#fbf9f3",
        "surface-container-low": "#f5f3ee",
        "on-surface-variant": "#414845",
        background: "#fbf9f3",
        "surface-container": "#f0eee8",
        "on-primary-container": "#82aa9d",
        "surface-container-high": "#eae8e2",
        secondary: "#4a6451",
        "surface-container-highest": "#e4e2dd",
        "tertiary-fixed": "#ffddb1",
        primary: "#002920",
        "primary-container": "#173f35",
        "secondary-container": "#c9e7ce",
        "on-secondary-container": "#4e6955",
        "on-surface": "#1b1c19",
      },
      fontFamily: {
        display: ["var(--font-manrope)"],
        body: ["var(--font-inter)"],
      },
      spacing: {
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem",
        "margin-mobile": "1.25rem",
        "margin-desktop": "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
