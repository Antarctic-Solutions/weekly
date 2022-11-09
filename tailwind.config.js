/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,tsx}", "./components/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#FFF",
      },
    },
  },
  plugins: [],
};
