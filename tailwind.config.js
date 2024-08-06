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
        primaryHover: '#003b8b', // Darkened primary color
        orange: '#FFBD59',
        orangeHover: '#e6a847', // Darkened orange color
        gray: '#70747B',
        lightGray: '#ACACAC',
        grayHover: '#5d6066', // Darkened gray color
        bgGray: '#F7F7F8'
      },
      fontSize: {
        'xl': '64px',
        'lg': '52px',
        'md': '48px',
        'sm': '20px',
        'xs': '16px',
      },
      backgroundImage: {
        'faded-gradient': 'linear-gradient(to right, rgba(0, 74, 173, 0.3), rgba(255, 189, 89, 0.3))',
        'faded-gradient-hover': 'linear-gradient(to right, rgba(0, 59, 139, 0.2), rgba(230, 168, 71, 0.2))', // Darkened gradient
      },
    },
  },
  plugins: [],
}