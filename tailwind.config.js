/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matblack: '#28282B',
        primary: '#c83b0e',
        primaryhover: '#952c0c',
        secondary: '#b36c53',
        bgcolor: '#fcf8f5',
        grey: '#9e9592'
      },
      fontFamily: {
        redHat: ['"Red Hat Text"', 'serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
    },
  },
  plugins: [],
}

