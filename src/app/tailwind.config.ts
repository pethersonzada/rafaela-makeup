import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FDFBF7', // Fundo off-white
          DEFAULT: '#D4AF37', // Dourado elegante
          dark: '#1A1A1A', // Preto suave para textos
          accent: '#E6A8D7', // Rosa suave descontraído
        }
      }
    }
  },
  plugins: [],
}
export default config