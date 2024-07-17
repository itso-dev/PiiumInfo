/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Pretendard': ['Pretendard'],
      },
      colors: {
        primary: {
          dark: "#2E2E35",
          DEFAULT: "#383940",
          light: "#566A6C",
          white: "#F0FBFB",
        },
      },
      screens: {
        'lg': '1200px',
        'mi': '1080px',
        'md': '900px',
        'mo': '575px',
      },
    }
  },
  plugins: [
  ],
};
