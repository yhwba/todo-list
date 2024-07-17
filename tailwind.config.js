/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.css"],

  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

