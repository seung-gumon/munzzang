const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : {
          100 : '#FFC107',
          200 : '#DDA400',
          300 : '#916400',
        },
        accent : {
          100 : '#FFA000',
          200 : '#8f4500',
        },
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
            '.scrollbar-hide': {
              /* IE and Edge */
              '-ms-overflow-style': 'none',

              /* Firefox */
              'scrollbar-width': 'none',

              /* Safari and Chrome */
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }
          }
      )
    })
  ],
}