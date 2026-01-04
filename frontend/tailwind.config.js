/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#537345",
        secondary: "#89A65D",
        accent: "#9EBF56",
        background: "#D1D9C1",
        soft: "#CDD9A3",
      },
    },
  },
  plugins: [],
}