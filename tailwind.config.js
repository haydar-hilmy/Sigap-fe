/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text_dark: "#321c43"
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          fontFamily: theme("fontFamily.body"),
          scrollBehavior: "smooth",
          backgroundColor: "#eeeeee",
          color: theme("colors.text_dark"),
        },
        html: {
          scrollBehavior: "smooth",
        },
      });
    }),
  ],
};
