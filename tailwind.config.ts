import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          950: "var(--color-leaf-950)",
          900: "var(--color-leaf-900)",
          800: "var(--color-leaf-800)",
          700: "var(--color-leaf-700)",
          600: "var(--color-leaf-600)",
          100: "var(--color-leaf-100)",
          50: "var(--color-leaf-50)",
        },
        cream: {
          50: "var(--color-cream-50)",
          100: "var(--color-cream-100)",
          200: "var(--color-cream-200)",
          300: "var(--color-cream-300)",
        },
        turmeric: {
          600: "var(--color-saffron-600)",
          500: "var(--color-turmeric-500)",
          400: "var(--color-turmeric-400)",
          100: "var(--color-turmeric-100)",
        },
        ink: {
          900: "var(--color-ink-900)",
          700: "var(--color-ink-700)",
          500: "var(--color-ink-500)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
