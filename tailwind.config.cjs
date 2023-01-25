/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F9F9F9",
          200: "#E2E2E2",
          600: "#353535",
          700: "#272727",
          800: "#212121"
        },
        orange: {
          400: "#FD9255"
        }
      }
    }
  },
  plugins: []
}
