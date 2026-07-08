/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F5E6BE',
          DEFAULT: '#D4AF37',
          dark: '#AA7C11',
          50: '#FAF8F0',
          100: '#F5EFCF',
          200: '#EBDCA0',
          300: '#E1C971',
          400: '#D7B642',
          500: '#D4AF37',
          600: '#B08E22',
          700: '#8C6F16',
          800: '#68500C',
          900: '#443305',
        },
        dark: {
          light: '#1A1A1A',
          DEFAULT: '#0A0A0A',
          pure: '#050505',
          card: '#121212',
          border: '#262626',
          accent: '#1E1E1E',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        'spin-reverse-slow': 'spin-reverse 50s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.2', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.2))' },
          '50%': { opacity: '0.5', filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.5))' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.2)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'glass-gold': '0 8px 32px 0 rgba(212, 175, 55, 0.08)',
      }
    },
  },
  plugins: [],
}
