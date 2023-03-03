/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary':'#0072c6',
        'primary-h':'#0067b2',
        'primary-l':'#e6f1f9',
        'primary-lh':'#d9eaf6',
        'primary-dark':'#005695',
        'primary-lact':'#b0d3ed',
        'secondary':'#ff731d',
        'secondary-h':'#e6681a',
        'grey-l':'#eaeaea',
        'grey':'#303030',
        'grey-h':'#2b2b2b',
        'success':'#2BAC47',
        'success-bg':'#F1F8F2',
        'warning':'#EF8943',
        'error':'#C83532',
        'wb':'#FBEFEF'
      }
    },
  },
  plugins: [],
}
