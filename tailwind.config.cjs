/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      height: {
        rem26: "26rem",
        dialog: "32rem",
        rem33: "33rem",

        carousel: "38rem",
      },
      width: {
        carousel: "50rem",
      },
      fontFamily: {
        mainFont: ["LaleZar"],
        SultanFont: ["SultanFont"],
      },
      fontSize: {
        "10xl": "14rem",
      },
    },

    screens: {
      xs: { max: "767px" },
      sm: { min: "768px", max: "991px" },
      md: { min: "992px", max: "1199px" },
      lg: { min: "1200px" },
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      mainBlack: "#000000  ",
      mainBlue: "#ee9b00",
      mainYellow: "#ffbd00",
      // mainBlue: "#1982C4",
      mainWhite: "#ee9b00",
      mainCream: "#faf2a1",
      // darkPurple: "#240046",
      goldie: "#ff9e00",
      CoolGray: "#000814",
      white: colors.white,
      black: colors.black,
      gray: colors.neutral,
      LightBlue: colors.sky,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      blueGray: colors.slate,
      Lime: colors.lime,
      Fuchsia: colors.fuchsia,
      purple: colors.purple,
      green: colors.green,
      pink: colors.pink,
      Rose: colors.rose,
      Indigo: colors.indigo,
      Amber: colors.amber,
      Cyan: colors.cyan,
      Emerald: colors.emerald,
      Sky: colors.sky,
    },
  },

  variants: {
    extend: {},
  },
  // plugins: [require("daisyui")],
};
