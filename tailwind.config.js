/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F2DCCB',    // El fondo durazno/beige suave de la imagen
          text: '#988073',  // El color topo/marrón del texto y el ícono
          accent: '#B89F91',// Un tono intermedio para hover o detalles
          dark: '#6B584E',  // Un tono más oscuro para textos de lectura largos
        }
      },
      fontFamily: {
        // Asegúrate de importar Satoshi en tu index.css (puedes usar Fontshare)
        satoshi: ['Satoshi', 'sans-serif'], 
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}