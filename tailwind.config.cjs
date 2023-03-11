/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary':'#0067b2',
        'primary-h':'#005da0',
        'primary-l':'#e6f0f7',
        'primary-lh':'#d9e8f3',
        'primary-dark':'#004d86',
        'primary-lact':'#b0d0e7',
        'secondary':'#ff731d',
        'secondary-h':'#FFEADD',
        'secondary-lact':'#cc5c17',
        'grey-lact':'#bfbfbf',
        'grey-l':'#eaeaea',
        'grey':'#303030',
        'grey-h':'#2b2b2b',
        'grey-f':'#F3F3F3',
        'success':'#159001',
        'success-bg':'#F1F8F2',
        'warning':'#EF8943',
        'error':'#ED0303',
        'wb':'#FBEFEF'
      }
    },
  },
  plugins: [],
}
