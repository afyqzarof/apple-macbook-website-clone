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
      gray: "#F2F2F2",
      darkGray: "#A6A6A6",
    },
    extend: {},
  },
  plugins: [],
};
