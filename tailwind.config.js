/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: [ 'Outfit', 'sans-serif'],
        Protest: [ 'Protest', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

