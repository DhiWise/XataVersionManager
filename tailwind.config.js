module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_50: "#eaecf0",
        blue_700: "#0468d7",
        light_blue_300: "#54c5f8",
        red_700: "#d03329",
        bluegray_100: "#d6dae2",
        deep_purple_500: "#6648ba",
        light_blue_400: "#29b6f6",
        light_blue_301: "#61dafb",
        gray_50: "#f8f9fa",
        light_blue_900: "#01579b",
        bluegray_900: "#262b35",
        bluegray_700: "#424c5d",
        bluegray_600: "#5f6c86",
        bluegray_400: "#74839d",
        gray_900_a2: "#0d1624a2",
        white_A700: "#ffffff",
        gray_700_11: "#55555511",
        bluegray_901: "#282c34",
      },
      borderRadius: {
        radius6: "6px",
        radius8: "8px",
        radius10: "10px",
        radius50: "50%",
      },
      fontFamily: { sourcesanspro: "Source Sans Pro", gilroy: "Gilroy" },
      boxShadow: { bs: "0px 0px  10px 4px #55555511" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
