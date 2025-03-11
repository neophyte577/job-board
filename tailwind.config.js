/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      colors: {
        unionRed: '#8B0000', 
        deepUnionRed: '#6A0000',
        lightUnionRed: '#B22222',
        otherRed: '#4A0000', 
        cream: '#FFF5E1',
        butterCream: '#FFE8A1',
        paleHoney: '#FCE5B1',
        blushClay: '#F0D1D1',
        summerBlush: '#F5DBD3'
      },
    },
  },
  plugins: [],
}

