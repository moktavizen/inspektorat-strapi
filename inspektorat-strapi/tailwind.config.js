/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#008A88",
        secondary: "#00478A",
        neutral50: "#F6F8F7",
        neutral800: "#292E3D",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: "url('./src/assets/hero.png')",
        contact: "url('./src/assets/contact.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
