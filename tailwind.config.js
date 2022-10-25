/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '720px',
        xl: '720px',
      },
    },
    extend: {},
  },
  plugins: [],
};
