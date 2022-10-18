/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".form-control": {
          padding: ".5rem .85rem",
          backgroundColor: colors.gray[300],
          outlineWidth: "2px",
          outlineStyle: "solid",
          outlineColor: colors.gray[400],
					borderRadius: '.15rem'
        },
        ".form-div": {
          display: "flex",
          flexDirection: "column",
          marginBottom: ".5rem",
        },
        ".form-div > label": {
          textAlign: "left",
          marginBottom: ".15rem",
        },
      });
    }),
  ],
};
