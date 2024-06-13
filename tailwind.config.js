/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-img": "url(./src/assets/more/24.jpg)",
        "header-img": "url(./src/assets/more/15.jpg)",
        "banner-img": "url(./src/assets/more/3.png)",
      },
      fontFamily: {
        rancho: '"Rancho", cursive;',
        raleway: '"Raleway", sans-serif;',
      },
      colors: {
        primary: "#E3B577",
      },
    },
  },
  plugins: [require("daisyui")],
};
