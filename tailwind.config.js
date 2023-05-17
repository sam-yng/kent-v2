/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        playfairsemi: ["playfairsemi"],
        playfairbold: ["playfairbold"],
        playfairextrabold: ["playfairextrabold"],
        playfairmedium: ["playfairmedium"],
        roboto: ["roboto"],
        playfairregular: ["playfairregular"],
        circular: ["circular"],
      },
    },
  },
  plugins: [],
}

