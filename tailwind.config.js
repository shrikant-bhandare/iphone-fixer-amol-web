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
        // Standard Color Theme
        primary: {
          DEFAULT: '#3B82F6', // Blue 500
          dark: '#1D4ED8',    // Blue 700
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        surface: {
          light: '#F9FAFB',
          dark: '#1F2937',
        },
        border: '#E5E7EB', // Gray 200
        text: {
          primary: '#111827',   // Gray 900
          secondary: '#6B7280', // Gray 500
          dark: '#F9FAFB',      // White-ish for dark mode
        },
        status: {
          success: '#10B981',   // Green 500
          warning: '#F59E0B',   // Amber 500
          error: '#EF4444',     // Red 500
          info: '#0EA5E9',      // Sky 500
        },
        // Keep tech colors for backward compatibility during transition
        tech: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
    },
  },
  plugins: [],
}