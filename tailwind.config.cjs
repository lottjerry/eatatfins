/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,vue}', './slices/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#06398C',
        background_alt: '#3949AB',
      },
    },
  },
  plugins: [],
}
