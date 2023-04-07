const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      // => @media (min-width: 390px) { ... }

      md: "780px",
      // => @media (min-width: 780px) { ... }

      lg: "1170px",
      // => @media (min-width: 1170px) { ... }

      xl: "1170px",
      // => @media (min-width: 1170px) { ... }

      "2xl": "1170px",
      // => @media (min-width: 1170px) { ... }
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
    },
  },
  plugins: [],
};
