import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apex: {
          white: "#FFFFFF",
          surface: "#F7F7F9",
          purple: "#6F3DFF",
          "purple-hover": "#5B2BE6",
          "purple-light": "rgba(111, 61, 255, 0.08)",
          dark: "#111111",
          cardDark: "#18181B",
          grey: "#666666",
          border: "#ECECEC",
          borderDark: "#27272A",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "sans-serif"],
      },
      boxShadow: {
        "apex-soft": "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        "apex-hover": "0 20px 40px -15px rgba(111, 61, 255, 0.15)",
        "apex-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
