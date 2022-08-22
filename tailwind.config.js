module.exports = {
  purge: [
    'source/**/*.blade.php',
    'source/**/*.md',
    'source/**/*.html',
  ],
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
  variants: {
    extend: {},
  },
  plugins: [],
};
