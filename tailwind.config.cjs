/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      'primary': colors.blue[500],
      'primary-hover': colors.blue[600],
      'secondary': colors.slate[50],
      'tertiary': colors.slate[900]
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".form-control": {
          padding: ".5rem .85rem",
          backgroundColor: "linear-gradient(to right, var(--tw-gradient-stops))",
          outlineWidth: "2px",
          outlineStyle: "solid",
          outlineColor: colors.gray[700],
					borderRadius: '.5rem'
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
