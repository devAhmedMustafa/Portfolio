/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000", // #374151
        secondary: "#F2C94C", // #f2c94c
        accent: "#FF5722", // #ff5722
      },
    },
  },
  plugins: [],
}
