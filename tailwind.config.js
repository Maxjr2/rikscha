/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'federal-blue': '#090446',
          'forest-green': '#4d8b31',
          'imperial-red': '#f71735',
          'ecru': '#e5c687',
        },
      },
    },
    plugins: [],
  }