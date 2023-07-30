/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "retro-dark-blue": "#2D4356",
        "retro-light-blue": "#435B66",
        "retro-dark-pink": "#A76F6F",
        "retro-light-pink": "#EAB2A0",
      },
    },
  },
  plugins: [],
};
