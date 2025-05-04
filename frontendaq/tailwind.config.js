/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'hsl(var(--color-brand) / <alpha-value>)',
          dark: 'hsl(var(--color-brand-dark) / <alpha-value>)',
          light: 'hsl(var(--color-brand-light) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
