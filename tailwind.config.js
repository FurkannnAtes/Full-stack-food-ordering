/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#441151",
        secondary: "#EE85B5",
        violet: "#883677",
        congo: "##FF958C",
        success: "#5FC790",
        warning: "#FFA600",
        danger: "#FF5630",
        dark: "#2E3A44",
        info: "#1CA7EC",
        black: "#2E3A44",
        black2: "#222831",
        grey1: "#A0AABF",
        grey2: "#C0C6D4",
        grey3: "#E3E8F1",
        grey4: "#f1f2f3",
        light: "#F9FBFC",
        white: "#FFF",
        red: "#e01c1d",
        yellow: "#ffc136",
        brown: "#42210c",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
