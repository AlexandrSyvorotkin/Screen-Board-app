module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
      backgroundColor: theme => ({
          ...theme('colors'),
          'phoneBlock': '#86D3F4',
      }),
    extend: {
          color: {
              button: '#4E4E4E'
          }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
