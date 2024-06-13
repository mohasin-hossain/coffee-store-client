/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-img": "url(./src/assets/more/24.jpg)",
        "header-img": "url(./src/assets/more/15.jpg)",
      },
      fontFamily: {
        rancho: '"Rancho", cursive;',
        raleway: '"Raleway", sans-serif;',
      },
    },
  },
  plugins: [require("daisyui")],
};
