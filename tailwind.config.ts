import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ivory / champagne foundation — never pure white
        ivory: "#F8F4ED",
        cream: "#FBF8F2",
        bone: "#F2ECE1",
        sand: "#EBE2D4",
        champagne: "#E3D4BC",
        // Muted gold accents
        gold: "#B79B6E",
        "gold-deep": "#9A7E54",
        "gold-soft": "#C9B48F",
        // Charcoal / espresso typography
        ink: "#241F1A",
        charcoal: "#332D26",
        cocoa: "#4A4138",
        muted: "#6B6053",
        espresso: "#211C18",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wide2: "0.18em",
      },
      maxWidth: {
        prose2: "62ch",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1.12)" },
        },
        "draw": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1.4s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
