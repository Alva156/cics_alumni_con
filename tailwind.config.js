/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgray: "#F6F6F6",
        hgray: "#D9D9D9",
        fgray: "#3D3C3C",
        white: "#FFFEFE",
        grayt: "#FFFFFF",
        black: "#000000",
      },
      // fontFamily: {
      //   primary: ["Roboto", "sans-serif"],
      // },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
