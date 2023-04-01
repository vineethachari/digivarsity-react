/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    extend: {},
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'red-pink': '#F63750',
        'fun-blue': '#115BA9',
        'grey-teal': '#509E82',
        'black': '#000000',
        'white': '#FFFFFF',
        'ironside-grey': '#676767',
        'white-smoke': '#F6F6F6',
        'grey': '#919191',
        'charcoal-grey': '#404040',
        'seashell': '#F1F1F1',
        'aquahaze':'#F3F3F3',
        'light-red-pink': 'rgba(246, 55, 80, 0.03)',
        'light-fun-blue': 'rgba(17, 91, 169, 0.04)',
        'light-grey-teal': 'rgba(80, 158, 130, 0.04)',
    }
  },
  plugins: [],
}