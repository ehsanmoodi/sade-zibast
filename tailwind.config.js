/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sea-green": "#369863",
        "wild-sand": "#F5F5F5",
      },
    },
    fontFamily: {
      kalameh: ["kalameh"],
    },
  },
  plugins: [],
};
