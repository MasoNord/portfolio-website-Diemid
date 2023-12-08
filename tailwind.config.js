/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

