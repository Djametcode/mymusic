/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Concert One', 'cursive']
      },
      backgroundImage: {
        'user': "url('./img/user (1).png')"
      }
    },
  },
  plugins: [],
}
