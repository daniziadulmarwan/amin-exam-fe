/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29A354",
        second: "#827A7A",
        third: "#0C0531",
      },
      fontFamily: {
        lexend: "Lexend",
        smooch: "Smooch Sans",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
