/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-200%)' },
          },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        charm: ["Charm", "sans-serif"],
        pattaya: ['Pattaya','sans-serif']
      },
    },
  },
  plugins: [],
}
