/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#071426',
        'background-secondary': '#0B1930',
        'card-bg': '#10243D',
        'card-hover': '#152E4E',
        'primary-blue': '#168BFF',
        'electric-cyan': '#00D4FF',
        'text-main': '#F1F5F9',
        'text-secondary': '#A7B7CC',
        'border-custom': 'rgba(255, 255, 255, 0.12)',
        'border-glow': 'rgba(0, 212, 255, 0.35)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(22, 139, 255, 0.45)',
        'glow-cyan': '0 0 35px -5px rgba(0, 212, 255, 0.45)',
        'card-dark': '0 12px 35px -8px rgba(0, 0, 0, 0.5), 0 4px 12px -2px rgba(22, 139, 255, 0.1)',
        'glass-dark': '0 20px 48px -10px rgba(3, 10, 20, 0.7), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      backgroundImage: {
        'cyber-grid-dark':
          'linear-gradient(to right, rgba(22, 139, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 139, 255, 0.08) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(circle at 50% 30%, rgba(22, 139, 255, 0.18) 0%, rgba(0, 212, 255, 0.08) 35%, transparent 70%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(16, 36, 61, 0.85) 0%, rgba(11, 25, 48, 0.95) 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
