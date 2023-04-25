/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // using `src` directory :
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#080818',
        'light': '#d9d9d9',
        'primary': '#7796ff',
        'secondary': '#fea36d',
      },
    },
  },
  plugins: [],
}
