/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        colors: {
          accent: '#e5ff00',
          dark: '#11190c',
          secondary: '#cfc9bb',
          light: '#f2f1ed',
          white: '#fefefe',
        },
        animation: {
          'fade-in': 'fade-in 0.5s ease-out forwards',
          gradient: 'gradient 15s ease infinite',
          'scale-in': 'scale-in 0.5s ease-out forwards',
          'fade-in-fast': 'fade-in-fast 0.3s ease-out forwards',
          'slide-in': 'slide-in 0.3s ease-out forwards',
          'reveal-card': 'reveal-card 0.8s ease-out forwards',
          'slide-in-scale': 'slide-in-scale 0.3s ease-out forwards',
          'pulse-glow': 'pulse-glow 2s ease infinite',
          'pulse-filter': 'pulse-filter 2s ease infinite',
          'modal-enter': 'modal-enter 0.5s ease-out forwards',
          'zoom-in': 'zoom-in 0.5s ease-out forwards',
          'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
          'feature-in': 'feature-in 0.5s ease-out forwards',
        },
        keyframes: {
          'fade-in': {
            from: { opacity: 0, transform: 'translateY(10px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          'scale-in': {
            from: { opacity: 0, transform: 'scale(0.95)' },
            to: { opacity: 1, transform: 'scale(1)' },
          },
          'fade-in-fast': {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          'slide-in': {
            from: { opacity: 0, transform: 'translateY(100px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          'reveal-card': {
            from: { opacity: 0, transform: 'translateY(50px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          'slide-in-scale': {
            from: { opacity: 0, transform: 'translateY(100px) scale(0.95)' },
            to: { opacity: 1, transform: 'translateY(0) scale(1)' },
          },
          'pulse-glow': {
            '0%': { boxShadow: '0 0 10px rgba(229, 255, 0, 0.5)' },
            '50%': { boxShadow: '0 0 20px rgba(229, 255, 0, 0.8)' },
            '100%': { boxShadow: '0 0 10px rgba(229, 255, 0, 0.5)' },
          },
          'pulse-filter': {
            '0%': { boxShadow: '0 0 5px rgba(229, 255, 0, 0.5)' },
            '50%': { boxShadow: '0 0 10px rgba(229, 255, 0, 0.8)' },
            '100%': { boxShadow: '0 0 5px rgba(229, 255, 0, 0.5)' },
          },
          'modal-enter': {
            from: { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
            to: { opacity: 1, transform: 'translateY(0) scale(1)' },
          },
          'zoom-in': {
            from: { opacity: 0, transform: 'scale(0.95)' },
            to: { opacity: 1, transform: 'scale(1)' },
          },
          'fade-in-right': {
            from: { opacity: 0, transform: 'translateX(20px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          'feature-in': {
            from: { opacity: 0, transform: 'scale(0.9)' },
            to: { opacity: 1, transform: 'scale(1)' },
          },
        },
      },
    },
    plugins: [],
  }