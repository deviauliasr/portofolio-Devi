/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    variants: {
      extend: {
        display: ["group-focus"],
        opacity: ["group-focus"],
        inset: ["group-focus"],
      },
    },
    extend: {
      spacing: {
        big: "36rem",
      },
      colors: {
        primary: "#8b5cf6",
        main: "#4c1d95",
      },
    },
  },
  plugins: [],
};
