/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'min-screen': '840px',
        'l-screen':'890px',
        'xl-screen':'950px',
        '2xl-screen':'1000px',
        '3xl-screen':'1100px'
      },
    },
  },
  plugins: [],
}