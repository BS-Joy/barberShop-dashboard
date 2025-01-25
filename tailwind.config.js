/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D1027",
        playground: "#052255",
      },
      fontFamily: {
        lato: ["lato", "serif"],
      },
    },
  },
  plugins: [],
};
