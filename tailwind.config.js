const { colorTheme } = require("./src/global/theme/color");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: colorTheme,
    },
  },
  plugins: [],
};
