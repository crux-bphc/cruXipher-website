/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#282C2F",
      white: "#FFFFFF",
      grey: "#9E9E9E",
      red: "#FF3838",
    },
    fontFamily: {
      mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
};
