/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a2d2ff',
        secondary: '#64748b',
        dark: '#001d3d',
      },
    },
  },
  plugins: [],
}
