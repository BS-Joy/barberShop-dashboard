/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D1027",
        secondry: "#8B707D",
        playground: "#ECE8EA",
      },
      fontFamily: {
        lato: ["lato", "serif"],
      },
    },
  },
  plugins: [],
};
