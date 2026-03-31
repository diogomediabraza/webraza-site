import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5800',
          'orange-light': '#FF7A2F',
          'orange-muted': 'rgba(255,88,0,0.15)',
          dark: '#000000',
          'dark-soft': '#1A1A1A',
          'dark-mid': '#3D3D3D',
          modal: '#1F1F20',
          light: '#FFFFFF',
          muted: '#777777',
        }
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter-tight)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'display-hero': 'clamp(120px, 22vw, 320px)',
        'display-lg': 'clamp(60px, 10vw, 140px)',
        'display-md': 'clamp(40px, 6vw, 80px)',
      },
      backdropBlur: {
        header: '16px',
      },
      borderRadius: {
        pill: '35px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
