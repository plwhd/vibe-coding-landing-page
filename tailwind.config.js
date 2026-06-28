/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#243B5A',
        qblue: '#1377F9',
        cyanline: '#18B6D9',
        mint: '#3ED6A2',
        sun: '#F8B94A'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(19, 119, 249, 0.16)',
        card: '0 18px 50px rgba(36, 59, 90, 0.08)'
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}
