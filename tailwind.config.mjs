/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tan: "rgb(242, 234, 225)",
        red: "rgb(217, 0, 0)",
        black: "#1d1d1d",
      },
      fontFamily: {
        sans: "Roboto Condensed",
        serif: "Georgia",
      },
    },
  },
  plugins: [],
};
