const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.jsx', './components/**/*.jsx', './layouts/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter',...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [],
}
