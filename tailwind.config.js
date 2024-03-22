/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1001px',
      'rotated': { 'max': '1000px' },
      'portrait': { 'max': '700px' },
    },
    extend: {
      boxShadow: {
        'bs': '0 2px 8px black'
      }
    },
  },
  plugins: [],
}

