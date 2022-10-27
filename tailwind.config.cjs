/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily:{
      'silkscreen': ['Silkscreen', 'cursive'],
      'signika': ['Signika Negative', 'sans-serif'],
      'shadows': ['Shadows Into Light', 'cursive'],
      'amiri': ['Amiri', 'serif'],
      'josefin': ['Josefin Sans', 'sans-serif'],
      'playfair':['Playfair Display SC', 'serif'],
      'bebas':['Bebas Neue', 'cursive'],
      'amatic': ['Amatic SC', 'cursive'],
      'righteous':['Righteous', 'cursive']
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px'],
      '4xl': ['52px', '60px'],
      '5xl': ['56px', '64px'],
      '6xl': ['60px', '68px'],
      '7xl': ['64px', '72px'],
      '8xl': ['68px', '76px'],
      '9xl': ['72px', '80px'],
    },
    extend: {
      colors:{
        black: '#300219',
        white: '#F4F6FF',
        gray: {
          300: '#B1B4BD',  
          500: '#91949D',  
          700: '#696C74',  
        },
        red: {
          300: '#BB2E57',
          500: '#AF053F',
          700: '#300219',
        },
        purple: {
          300: '#e0aaff',
          500: '#c77dff',
          700: '#9d4edd',
        },
        blue: {
          300: '#8ecae6',
          500: '#219ebc',
          700: '#023047',
        }
      }
    },
  },
  plugins: [],
}

