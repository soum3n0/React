/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#081b29',
      },

      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}