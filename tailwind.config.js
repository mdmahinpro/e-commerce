/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ...
        primary: {
          light: "#324D67",
          DEFAULT: "#324D67",
          dark: "#2a4156",
        },
        // ...
      },
    },
  },
  plugins: [],
};
