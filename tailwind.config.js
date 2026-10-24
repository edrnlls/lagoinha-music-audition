/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#f7ce00',
        accent: '#2c5282',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        ballinger: ['Ballinger', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
