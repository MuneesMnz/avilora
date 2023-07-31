/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkGreen: "#103014",
      lightGreen: "#40513B",
      darkBlue: "#262A56",
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
