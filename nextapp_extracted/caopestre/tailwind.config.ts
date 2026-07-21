import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petrol: { DEFAULT: "#083F4A", 2: "#0F5663", dark: "#062C34" },
        sand: { DEFAULT: "#F5EFE6", 2: "#EFE7DA" },
        brand: { orange: "#E58B21", "orange-d": "#C9760F" },
        ink: "#1A1A1A",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(8,63,74,.45)",
        softsm: "0 10px 30px -16px rgba(8,63,74,.3)",
      },
      maxWidth: { content: "1180px" },
    },
  },
  plugins: [],
};
export default config;
