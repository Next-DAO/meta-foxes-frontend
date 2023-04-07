const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "780px",
      lg: "1024px",
      xl: "1920px",
    },
    extend: {
      fontSize: {
        xxs: ["10px", "13.72px"],
      },
      fontFamily: {
        sans: ["var(--font-cake-n-truffles)", ...defaultTheme.fontFamily.sans],
        serif: [
          "var(--font-alibaba-PuHuiTi)",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      backgroundColor: {
        primary: "#1F2D91",
        secondary: "#2F3CB4",
        tertiary: "#303030",
        fox: "#FF9321",
      },
      width: {
        95: "23.75rem",
        189: "47.25rem",
        225: "56.25rem",
        250: "62.5rem",
      },
    },
  },
  plugins: [],
};
