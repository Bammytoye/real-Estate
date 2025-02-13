/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      color: {
        primary: '#101828',
        secondary: '#7f56d9',
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.88)',
      },
    },
  },
  plugins: [],
}