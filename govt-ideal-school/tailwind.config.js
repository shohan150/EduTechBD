/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#A90047",
      secondary: "#8B1446",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        poppins: ['"poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
