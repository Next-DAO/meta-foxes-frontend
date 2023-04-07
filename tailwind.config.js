const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "1024px",
      lg: "1920px",
      xl: "1920px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-cake-n-truffles)", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: "#1F2D91",
        secondary: "#2F3CB4",
        tertiary: "#303030",
        fox: "#FF9321",
      },
      width: {
        95: "23.75rem",
        250: "62.5rem",
      },
    },
  },
  plugins: [],
};
