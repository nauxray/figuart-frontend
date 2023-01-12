/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lilac: "#BBAEC6",
        yellowLight: "#F1E9B2",
        red: "#924949",
      },
      fontFamily: {
        header: ["Prosto One"],
      },
    },
  },
  plugins: [],
};
