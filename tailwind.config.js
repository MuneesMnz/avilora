/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      darkGreen:"#40513B"
    },

    extend: {
      fontFamily: {
        Arvo: ["Arvo", "serif"],
        Ysabeau: ["Ysabeau Infant", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// url('./public/assets/images/webCovers/river.jpg')
