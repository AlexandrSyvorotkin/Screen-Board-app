module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      backgroundColor: theme => ({
          ...theme('colors'),
          'phoneBlock': '#86D3F4',
      }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
