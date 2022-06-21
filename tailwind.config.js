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
        "vista-white": "#FCF7F7",
        "chestnut-rose": "#D04B4B",
        chablis: "#FFF1F1",
        alto: "#D5D5D5",
      },
      keyframes: {
        "bounce-horizontal": {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        "bounce-horizontal": "bounce-horizontal 1s infinite",
      },
    },
    fontFamily: {
      kalameh: ["kalameh"],
    },
  },
  plugins: [],
};
