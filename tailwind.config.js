/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-dark-clr': '#000000',
        'dark-gray-clr': '#101828',
        'bg-white-clr': '#F5F5F5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        great: ['"Great Vibes"', 'cursive'],
        delight: ['"Delight Mother"', 'cursive'],
      },
    },
  },
  plugins: [],
};
