/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2cbce9',
        red: '#dc4492',
        yellow: '#fdcc49',
        grey: '#ededed',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: () => ({
        'gradient-rainbow':
        'linear-gradient(81.66deg, #00b5ee 7.21%, #ff445a4 45.05%, #ffba00 78.07%)',
        'gradient-rainblue':
        'linear-gradient(90.66deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        brush: 'url("./assets/brush.png")',
      },
    },
    screens: {
      xs: '480px',
      sm: '760px',
      md: '1060px',
    },
  },
  plugins: [],
};
