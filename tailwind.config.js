/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004AAD',
        orange: '#FFBD59',
        gray: '#70747B',
      },
      fontSize: {
        'xl': '64px',
        'lg': '52px',
        'md': '48px',
        'sm': '20px',
      },
    },
  },
  plugins: [],
}