/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts.jsx,tsx}',
    './src/components/**/*.{js,ts.jsx,tsx}'
  ],
  darkMode: 'class', // 'media' or 'class'
 // content: [ ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}
