/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F8FAFC',
        'surface-card': '#FFFFFF',
        'primary-blue': '#1263B5',
        'electric-blue': '#0090D2',
        cyan: '#00C8FF',
        'cyber-slate': '#0F172A',
        dark: '#111827',
        muted: '#64748B',
        'glass-border': 'rgba(18, 99, 181, 0.12)',
        'glass-hover': 'rgba(0, 144, 210, 0.18)',
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['SF Mono', 'Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(18, 99, 181, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'glass-md': '0 12px 32px -4px rgba(18, 99, 181, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'glass-lg': '0 20px 48px -6px rgba(18, 99, 181, 0.16), 0 8px 24px -4px rgba(0, 200, 255, 0.12)',
        'glow-blue': '0 0 35px -5px rgba(0, 144, 210, 0.4)',
        'glow-cyan': '0 0 35px -5px rgba(0, 200, 255, 0.45)',
      },
      backgroundImage: {
        'grid-pattern':
          'radial-gradient(circle, rgba(18, 99, 181, 0.08) 1px, transparent 1px)',
        'cyber-gradient':
          'linear-gradient(135deg, #1263B5 0%, #0090D2 50%, #00C8FF 100%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.7) 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
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
