/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      smTab: "577px",
      mdTab: "769px",
      lgTab: "993px",
      smLap: "1279px",
      mdLap: "1400px",
      lgLap: "1680px",
      ...defaultTheme.screens,
    },
    colors: {
      themeDark: "#17171A",
      grayThunder: "#3B3F54",
      // grayLava: "#3B3F54",
      elevationDark: "#1B1C22",
      elevationLight: "#ff7849",
      anchor: "#2A2D3C",
      white: "#FFFFFF",
      black: "#000000",
      blackLime: "#141416",
      offWhite: "#F6F7FA",
      grayLight: "#DBDDE6",
      grayLightV2: "#A0A4BB",
      grayText: "#B7BBCC",
      yellow: "#FEBF32",
      ...defaultTheme.colors,
    },
    extend: {
      fontFamily: {
        monto: ["Montserrat Alternates", "sans-serif"],
        Minecraft: ["Minecraft", "sans-serif"],
      },
      backgroundImage: {
        cardNoise: "url('/images/Noise.png')",
        gradient:
          "linear-gradient(270.23deg,#5691ff -9.34%,#72f6d1 17.09%,#76e268 48.54%,#ffd505 78.11%,#ff5e52 107.63%)",
      },
      boxShadow: {
        card: "1px -1px 3px 0px #3e3e3e8c",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
