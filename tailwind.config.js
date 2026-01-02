import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        NeuePlakRegular: ["NeuePlak"],
        NeuePlakSemibold: ["NeuePlakSemibold"],
        NeuePlakBold: ["NeuePlakBold"],
        NeuePlakBlack: ["NeuePlakBlack"],
        FontSpringBold: ["FontSpringBold"],
        FontSpringBoldOne: ["FontSpringBoldOne"],
        NeuePlakExtendedBold: ["NeuePlakExtendedBold"],
        NeuePlakExtendedBlack: ["NeuePlakExtendedBlack"],
        NeuePlakExtendedSemiBold: ["NeuePlakExtendedSemiBold"],
      },
      colors: {
        primary: "#1A20EA",
        secondary: "#CD1396",
      },
      screens: {
        xm: { max: "640px" },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
