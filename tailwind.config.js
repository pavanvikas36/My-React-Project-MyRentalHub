/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust as per your project
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  themes: ["light", "dark", "cupcake"], // add more if needed
}

