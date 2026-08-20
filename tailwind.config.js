/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium color system
        dark: {
          bg: '#0b0f19',       // Deep night slate
          card: '#121826',     // Premium card background
          border: '#1f293d',   // Border line color
          text: '#f3f4f6',     // Light grey for readability
          muted: '#9ca3af',    // Muted grey
        },
        light: {
          bg: '#f8fafc',       // Soft slate white
          card: '#ffffff',     // Card background
          border: '#e2e8f0',   // Border line color
          text: '#0f172a',     // Dark slate text
          muted: '#64748b',    // Muted grey
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Bright blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Emerald green
          600: '#16a34a',
          700: '#15803d',
        },
        accent: {
          cyan: '#06b6d4',     // Cyber cyan
          purple: '#8b5cf6',   // Electric purple
          pink: '#ec4899',     // Hot pink
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 25px rgba(59, 130, 246, 0.6)' }
        }
      },
    },
  },
  plugins: [],
}
