/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black2: {
          light: '#161616',
          lighter: '#27272a',
          DEFUALT: '#101010',
          dark: '#131313',
        }
      },
    },
  },
  plugins: [],
}

