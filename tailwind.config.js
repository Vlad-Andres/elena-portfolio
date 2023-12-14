/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    colors: {
      primary: {
        white: 'var(--primary-white)',
        red: 'var(--primary-red)',
        dark: 'var(--primary-dark)',
      },
      neutral: {
        white: 'var(--white)',
        light: 'var(--light)',
        mid: 'var(--mid)',
        greyLight: 'var(--grey-light)',
        grey: 'var(--grey)',
        greyDark: 'var(--grey-dark)',
      },
      red: {
        100: 'var(--red-lighter)',
        200: 'var(--red-light',
        300: 'var(--red)',
        400: 'var(--red-dark)',
        500: 'var(--red-darker)',
        lighter: 'var(--red-ligher)',
        light: 'var(--red-light)',
        default: 'var(--red)',
        dark: 'var(--red-dark)',
        darker: 'var(--red-darker)',
      },
    },
    fontFamily: {
      primary: 'var(--font-primary)',
      secondary: 'var(--font-secondary)',
    },
  },
  plugins: [],
}

