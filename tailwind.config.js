/** @type {import('tailwindcss').Config} */
module.exports = {
 
  darkMode: "class", // Enables dark mode with 'class' strategy
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"]
      }
      ,

    },
  },
  plugins: [],
};
