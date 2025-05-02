/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        charcoal: '#2C3E50',
        deepBlue: '#1E3D59',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      spacing: {
        '100': '100px',
      },
      minHeight: {
        'screen': '100vh',
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
};