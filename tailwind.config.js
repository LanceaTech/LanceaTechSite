/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1A1F2E',
        primary: '#2B4C7E',
        accent: '#00D9FF',
        silver: '#E8EEF2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Archivo Black', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'spear-pierce': 'spearPierce 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spearPierce: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
      },
      clipPath: {
        corner: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
        'corner-large': 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',
        'corner-small': 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
}
