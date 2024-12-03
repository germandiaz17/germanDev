/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        greenBase: "#28db70",
        greenBg: '#101e12'
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        Gummy: "Sour Gummy"
      }
    },
  },
  plugins: [],
}

