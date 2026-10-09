/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          charcoal: '#0A0A0A',
          card: '#121212',
          surface: '#171717',
          border: 'rgba(191, 149, 63, 0.25)',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          gold: {
            light: '#FCF6BA',
            mid: '#BF953F',
            primary: '#B38728',
            dark: '#AA771C',
            accent: '#FBF5B7',
          },
          silver: {
            pure: '#FFFFFF',
            light: '#E8E8E8',
            mid: '#C0C0C0',
            muted: '#8A8A8A',
          }
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Cormorant Garamond', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #AA771C 75%, #FBF5B7 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(191,149,63,0.15) 0%, rgba(252,246,186,0.05) 50%, rgba(179,135,40,0.15) 100%)',
        'gold-radial': 'radial-gradient(circle at 50% 50%, rgba(191,149,63,0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, #161616 0%, #0D0D0D 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(179, 135, 40, 0.15)',
        'gold-md': '0 0 30px rgba(179, 135, 40, 0.22)',
        'gold-lg': '0 10px 40px rgba(179, 135, 40, 0.28)',
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.3em',
      }
    },
  },
  plugins: [],
}
