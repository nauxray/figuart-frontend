/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "492px",
      },
      colors: {
        lilac: "#BBAEC6",
        yellowLight: "#F1E9B2",
        red: "#924949",
        disabledGrey: "#494150",
        disabledBorderGrey: "#888888",
      },
      fontFamily: {
        header: ["Prosto One"],
      },
    },
  },
  plugins: [],
};
