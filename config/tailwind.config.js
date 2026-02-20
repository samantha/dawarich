const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        tropical: {
          "primary": "#2D4F1E",
          "secondary": "#A67C52",
          "accent": "#E6B325",
          "neutral": "#1A1A1A",
          "base-100": "#F7F3E9",
          "base-content": "#1A1A1A",
        }
      }
    ]
  }
}
