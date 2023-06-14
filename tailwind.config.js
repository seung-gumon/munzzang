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
        bg: '#F7F7F7',
        'bg-focus': '#ededed',
        'primary-clear': '#FFD700',
        'primary-dull': '#ddb900',
        'primary-visible': '#917800',
        'accent-clear': '#C0C0C0',
        'accent-dull': '#626262',
        clear: '#333333',
        dull: '#5c5c5c',
        duller: '#c4c4c4',
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