/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#63605E",
        secondary: "#948B85",
        light: "#F5EFEB",
        dark: "#444346",
        danger: "#CD5059",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        sans: ["Open Sans", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
