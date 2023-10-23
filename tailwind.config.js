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
        white: 'var(--neutral-white)',
        light: 'var(--neutral-light)',
        mid: 'var(--neutral-mid)',
        greyLight: 'var(--neutral-grey-light)',
        grey: 'var(--neutral-grey)',
        greyDark: 'var(--neutral-grey-dark)',
      },
      red: {
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

