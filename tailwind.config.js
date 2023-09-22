/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  lightMode: '#fff',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}