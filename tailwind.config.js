/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
