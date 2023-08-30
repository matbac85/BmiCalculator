/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "16px 32px 56px rgba(143,174,207,0.25)",
      },
    },
    colors: {
      blue: "#345FF6",
      gunmetal: "#253347",
      "dark-electric-blue": "#5e6e85",
      borders: "#d8e2e7",
      "pure-white": "#fff",
      "light-blue": "#D6E6FE",
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [],
};
