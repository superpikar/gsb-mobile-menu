module.exports = {
  purge: {
    content: ['./src/js/**/*.js', './src/css/**/*.css', './**/*.html'],
    options: {
      safelist: {
        standard: ['html', 'body', 'active', 'body-noscroll'],
        deep: [/modal/, /js/],
      },
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  theme: {
    extend: {
      colors: {
        primary: '#255062',
        secondary: '#f1692c',
      },
      fontFamily: {
        sans: ['Asap Condensed', 'sans-serif'],
      },
      borderWidth: {
        md: '1rem',
        lg: '1.5rem',
      },
    },
  },

  variants: {},
  plugins: [],
};
