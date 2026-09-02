import type { Config } from 'tailwindcss';

// Sistema visual "Modernist" — viene del rediseño en canvas
// (`../rediseno-ref/`, ver su LEEME.md). Editorial/brutalista: reglas de 2px,
// radio 0, todo alineado a la izquierda, mucho contraste papel/tinta.
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],   // Instrument Serif
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'], // Space Mono
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],   // Archivo
      },
      colors: {
        paper: '#F4F2EB',   // fondo
        ink: '#14100F',     // tinta / campo oscuro
        field: '#1C1817',
        earth: '#D6D1C3',   // gris tierra
        mist: '#EAE7DE',    // gris claro de sección
        olive: '#C7C64B',   // acento — SOLO sobre fondos oscuros
        label: '#7A6157',   // gris de etiqueta
        prose: '#4E3A34',   // texto corrido sobre papel
        wine: '#4A0F0E',    // fondo de las fichas de botella
        deep: '#3F0605',    // velo sobre fotos
      },
      maxWidth: {
        content: '1360px',
      },
    },
  },
  plugins: [],
};
export default config;
