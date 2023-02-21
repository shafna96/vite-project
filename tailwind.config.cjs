/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "Open Sans"],
    },
  },
  plugins: [require("daisyui")],
};
