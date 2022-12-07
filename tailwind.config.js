/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': {
            width: '250px'
          },
          '100%': {
            width: '75px'
          }
        }
      },
      animation: {
        shrink: 'shrink 200ms forwards ease-in-out'
      }
    },
  },
  plugins: [],
}
