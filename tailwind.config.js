/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-img": "url(./src/assets/more/15.jpg)",
        "banner-img": "url(./src/assets/more/3.png)",
        "footer-img": "url(./src/assets/more/13.jpg)",
        "footer-copyright-img": "url(./src/assets/more/24.jpg)",
      },
      fontFamily: {
        rancho: '"Rancho", cursive;',
        raleway: '"Raleway", sans-serif;',
      },
      colors: {
        primary: "#E3B577",
        secondary: "#331A15",
        tertiary: "#F5F4F1",
      },
    },
  },
  plugins: [require("daisyui")],
};
