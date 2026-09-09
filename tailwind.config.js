/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0A0A',
          light: '#171717',
          dark: '#050505',
          navy: '#060D17',
        },
        volt: {
          DEFAULT: '#D4AF37', // Metallic Volt Gold
          gold: '#D4AF37',
          yellow: '#F59E0B',
          amber: '#D97706',
          light: '#FDE047',
          glow: 'rgba(212, 175, 55, 0.4)',
        },
        accent: {
          DEFAULT: '#26FFD3', // Electric Mint / Cyan
          light: '#7bffe3',
          dark: '#00d5a9',
          glow: 'rgba(38, 255, 211, 0.35)',
        },
        onyx: {
          950: '#060606',
          900: '#0c0c0e',
          850: '#131316',
          800: '#1b1b20',
          700: '#2a2a32',
          600: '#3f3f4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
        display: ['Orbitron', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(212, 175, 55, 0.08) 1px, transparent 1px)",
        'circuit-pattern': "radial-gradient(circle, rgba(38, 255, 211, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
