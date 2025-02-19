/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#554641",
      lightBrown: "#675853",
      darkBrown: "#2e2725",
      black: "#201b19",
      white: "#f3e4db",
      cyan: "#17d4ec",
      lightCyan: "#8ae8f3",
      darkCyan: "#00a2b6",
      orange: "#fc9a1a",
      lightOrange: "#fbc580",
      darkOrange: "#d58725",
      grey: "#646b68",
      lightGrey: "#9a8884",
      darkGrey: "#414745",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Roboto Flex"],
      special: ['"serif"'],
    },
  },
  plugins: [],
};
