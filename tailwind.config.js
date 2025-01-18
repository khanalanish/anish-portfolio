/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    screens: {
      exs: '320px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      elg: '1025px',
      xl: '1280px',
      exl: '1400px',
      '2xl': '1536px',
      lgmax: { max: '1024px' },
      mdmax: { max: '767px' },
      print: { raw: 'print' }
    },
    extend: {
      colors: {
        gray: {
          50: '#E5E5E5',
          100: '#F1F2F2',
          150: '#F1F5F8',
          200: '#D9DEE0',
          300: '#B6B6B7',
          350: '#A2A2A2',
          400: '#6E6E6E',
          450: '#A1A1A1',
          600: '#838c95',
          800: '#262626',
          900: '#011928'
        },
        orange: {
          50: '#FAF3F3',
          100: '#FDE4DE',
          400: '#FF6B41',
          500: '#F04B23',
          600: '#DC370F'
        },
        background: '#ebeeee'
      },
      background: (theme) => ({
        ...theme('colors')
      }),
      spacing: {
        half: '50%',
        full: '100%'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
