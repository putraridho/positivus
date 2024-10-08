import type { Config } from "tailwindcss";

function toRem(px: number): string {
  return `${px / 16}rem`;
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: [toRem(60), "normal"],
        h2: [toRem(40), "normal"],
        h3: [toRem(30), "normal"],
        h4: [toRem(20), "normal"],
        "h1-mob": [toRem(43), "normal"],
        "h2-mob": [toRem(36), "normal"],
        "h3-mob": [toRem(26), "normal"],
        "h4-mob": [toRem(18), "normal"],
      },
      fontFamily: {
        sans: "var(--font-space-grotesk)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "var(--green)",
        dark: "var(--dark)",
        grey: "var(--grey)",
      },
      boxShadow: {
        solid: "var(--shadow-solid)",
      },
    },
  },
  plugins: [],
};
export default config;
