import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          50: 'color-mix(in srgb, var(--primary) 10%, white)',
          100: 'color-mix(in srgb, var(--primary) 20%, white)',
          200: 'color-mix(in srgb, var(--primary) 40%, white)',
          300: 'color-mix(in srgb, var(--primary) 60%, white)',
          400: 'var(--primary)',
          500: 'var(--primary)',
          600: 'color-mix(in srgb, var(--primary) 80%, black)',
          700: 'color-mix(in srgb, var(--primary) 60%, black)',
          800: 'color-mix(in srgb, var(--primary) 40%, black)',
          900: 'color-mix(in srgb, var(--primary) 20%, black)',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;