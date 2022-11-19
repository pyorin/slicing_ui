/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      source: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#4A72FF",
        dark: "#0C1B4D",
        primaryLight: "rgba(74, 114, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
