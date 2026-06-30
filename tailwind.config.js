/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#211922',
        qblue: '#e60023',
        cyanline: '#7e238b',
        mint: '#103c25',
        sun: '#f8b94a',
        sand: '#e5e5e0',
        warm: '#f6f6f3',
        warmline: '#c8c8c1',
        olive: '#62625b',
        silver: '#91918c',
        darkwarm: '#33332e'
      },
      boxShadow: {
        glow: '0 10px 24px rgba(33, 25, 34, 0.08)',
        card: '0 8px 22px rgba(33, 25, 34, 0.08)'
      },
      fontFamily: {
        sans: [
          'Pin Sans',
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
