/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'parchment': '#F5F1E8',
        'sepia-light': '#E8DCC4',
        'sepia': '#C9A961',
        'sepia-dark': '#8B7355',
        'warm-orange': '#D4A574',
      },
      fontFamily: {
        'handwritten': ['Caveat', 'cursive'],
        'storybook': ['Indie Flower', 'cursive'],
      },
    },
  },
  plugins: [],
}

