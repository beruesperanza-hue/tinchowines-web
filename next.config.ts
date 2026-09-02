import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // "/" no tiene página propia: el layout raíz vive en app/[lang]/ para poder
  // setear <html lang> con el idioma real. El español es el idioma principal
  // (el negocio vende en España y el copy original está en español).
  async redirects() {
    return [{ source: '/', destination: '/es', permanent: false }];
  },
};

export default nextConfig;
