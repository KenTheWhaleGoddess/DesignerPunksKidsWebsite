const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {  
  content: [
    './assets/css/app.css',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        peach: {
          DEFAULT: '#EDC2B2',
          50: '#FEFDFC',
          100: '#FCF6F4',
          200: '#F9E9E4',
          300: '#F5DCD3',
          400: '#F1CFC3',
          500: '#EDC2B2',
          600: '#E29E85',
          700: '#D87A57',
          800: '#C8582F',
          900: '#9A4424'
        }
      }
    },
  }
};
