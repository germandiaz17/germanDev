/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        greenBase: "#28db70",
        greenBg: '#101e12',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        Gummy: "Sour Gummy",
        orbitron: "Orbitron",
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #28db70' },
          '50%': { boxShadow: '0 0 20px #28db70' },
        },
      },
      animation: {
        glow: 'glow 2s infinite',
      },
    },
  },
  plugins: [],
};
