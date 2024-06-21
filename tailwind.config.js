/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "430px",
      md: "1280px",
      lg: "1920px",
    },
    fontFamily: {
      body: ["body", "ui-sans-serif"],
      title: ["title", "ui-sans-serif"],
    },
    colors: {
      gray: "#f5f4f7",
      darkGray: "#A6A6A6",
      blue: "#0066CC",
      black: "#1d1d1f",
      white: "#ffffff",
      spaceGray: "#7c7e80",
      silver: "#e2e4e6",
    },
    extend: {},
  },
  plugins: [],
};
