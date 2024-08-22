/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        important:"#c7e52b",
        primary:"#111",
        secondary:"#222",
        tertiary: "#aaa",
        text:"#fff"
      }
    },
  },
  plugins: [],
}

