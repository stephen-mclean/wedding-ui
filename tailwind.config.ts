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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-overpass)"],
        serif: ["var(--font-cormorant-garamond)"],
      },
    },
    colors: {
      primary: {
        DEFAULT: "#897A59",
      },
      accent: {
        DEFAULT: "#AAC6C9",
        dark: "#2D3E40",
      },
      pink: {
        DEFAULT: "#AF3B6E",
      },
      black: {
        DEFAULT: "#252323",
      },
      surface: {
        DEFAULT: "#F8F6F3",
      },
    },
  },
  plugins: [],
};
export default config;
