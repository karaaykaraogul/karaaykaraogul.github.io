/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-primary": "#475ADB",
        "main-secondary": "#E4F3EE",
        "side-primary": "#23A0DB",
        "side-secondary": "#23A0DB",
        "header-primary": "#d3f5ee",
      },
    },
  },
  plugins: [],
};
