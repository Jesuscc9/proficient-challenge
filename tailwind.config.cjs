/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F9F9F9",
          200: "#E2E2E2"
        }
      }
    }
  },
  plugins: []
}
