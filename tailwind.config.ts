import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b1220",
          800: "#111b2e",
          700: "#1b2a46",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
