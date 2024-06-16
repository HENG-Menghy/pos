/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'colorWhite': '#ffffff',
      'colorBlack': '#0F172A',
      'colorGray': '#64748B',
      'colorRed': '#FF0000',
      'colorBlue': '#0C7EA5',
      'colorGreen': '#179D86',
      'borderColor': '#CDD5E0',
      'footerColor': '#F9F9F9',
      'bgColor': '#F2F5F9',
      'transparent': 'transparent'
    },
    extend: {},
  },
  plugins: [],
}