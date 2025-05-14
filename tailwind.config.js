import { text } from "@fortawesome/fontawesome-svg-core";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,sass,scss}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        accent: "var(--accent)",
      },
      boxShadow: {
        dark: "0px 10px 0px 0.1px rgba(12, 12, 12, 1)",
        light: "0px 10px 0px 0.1px rgba(253,253, 253, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) white",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "green",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "red",
            borderRadius: "20px",
            border: "1px solid yellow",
          },
          "&::-webkit-scrollbar-button, &::-moz-scrollbar-button": {
            width: "0px",
            height: "0px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
