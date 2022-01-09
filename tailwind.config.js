const defaultTheme = require('tailwindcss/defaultTheme');
const withAnimations = require('animated-tailwindcss');

// tailwind.config.js
module.exports = withAnimations({
    mode: 'jit',
    purge: ['./public/**/*.html'],
    // specify other options here
    theme: {
        extend: {
          fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          },
        },
      },
      plugins: [
        require('@tailwindcss/forms'),
      ],
  });