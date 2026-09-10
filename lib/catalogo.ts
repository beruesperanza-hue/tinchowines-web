// Catálogo real 2025 de Tincho Wines — 6 bodegas, 32 referencias.
// Fuente: "Vinos Tincho Wines 2025_VALENCIA_HOSTELERIA.pdf" y
// "Tincho_Wines_Botellas_y_Logos_Referencia.pdf" (ver ../rediseno-ref/uploads/).
// NO inventar entradas acá: si un vino no está en esos PDFs, no va.
//
// Los precios (`precioHosteleria`, € + IVA) se guardan porque son el dato real
// del catálogo, pero DELIBERADAMENTE NO SE RENDERIZAN en el sitio público: la
// home dice "precios de hostelería a pedido", que es la decisión comercial del
// rediseño. Quedan acá para cuando haya un área B2B o una ficha privada.

export interface Vino {
  nombre: string;
  tipo: 'tinto' | 'blanco' | 'rosado' | 'espumante';
  variedad: string;
  precioHosteleria: number;
  nota?: string;
  /** Packshot encontrado en el dossier (páginas de bodega/distribuidor),
   *  descargado a public/images/botellas/ — no son cortes con fondo
   *  transparente real, son fotos de producto con fondo blanco/gris. Se
   *  presentan con mix-blend-mode:multiply sobre una tarjeta clara para
   *  simular el recorte (ver components/sections/Bodegas.tsx). Igual
   *  conviene pedir el packshot oficial en alta a cada bodega antes de
   *  publicar en serio. */
  imagenReferencia?: string;
}

export interface Bodega {
  slug: string;
  nombre: string;
  zona: string;
  region: 'Mendoza' | 'La Rioja' | 'Patagonia';
  /** Logo real, provisto por Martín (public/images/logos/). Sin esto, la
   *  ficha muestra el nombre como placeholder — ver Bodegas.tsx. */
  logo?: string;
  /** La mayoría de los logos son oscuros sobre fondo claro; el de Familia
   *  Schroeder es blanco sobre fondo oscuro y necesita la tarjeta invertida
   *  para leerse. */
  logoFondo?: 'claro' | 'oscuro';
  vinos: Vino[];
}

export const BODEGAS: Bodega[] = [
  {
    slug: 'domaine-bousquet',
    nombre: 'Domaine Bousquet',
    zona: 'Gualtallary · Valle de Uco',
    region: 'Mendoza',
    logo: '/images/logos/domaine-bousquet.jpeg',
    vinos: [
      {
        nombre: 'Malbec Crianza',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 8.75,
        imagenReferencia: '/images/botellas/bousquet-malbec-crianza.png',
      },
      {
        nombre: 'Malbec Reserva',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 13.8,
        imagenReferencia: '/images/botellas/bousquet-malbec-reserva.jpeg',
      },
      { nombre: 'Pinot Noir Reserva', tipo: 'tinto', variedad: 'Pinot Noir', precioHosteleria: 13.8 },
      {
        nombre: 'Gran Malbec Reserva',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 19.5,
        imagenReferencia: '/images/botellas/bousquet-gran-malbec.png',
      },
      { nombre: 'Gran Chardonnay Reserva', tipo: 'blanco', variedad: 'Chardonnay', precioHosteleria: 12.9 },
      { nombre: 'Sparkling', tipo: 'espumante', variedad: 'Chardonnay', precioHosteleria: 9.9 },
      { nombre: 'Malbec Dulce', tipo: 'tinto', variedad: 'Malbec', precioHosteleria: 10.0 },
    ],
  },
  {
    slug: 'casa-de-uco',
    nombre: 'Casa de Uco',
    zona: 'Los Chacayes · Valle de Uco',
    region: 'Mendoza',
    logo: '/images/logos/casa-de-uco.jpeg',
    vinos: [
      {
        nombre: 'El Salvaje Orgánico',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 13.9,
        imagenReferencia: '/images/botellas/casadeuco-el-salvaje.png',
      },
      { nombre: 'Vineyard Selection Malbec', tipo: 'tinto', variedad: 'Malbec', precioHosteleria: 19.5 },
      {
        nombre: 'Vineyard Selection Petit Verdot',
        tipo: 'tinto',
        variedad: 'Petit Verdot',
        precioHosteleria: 19.5,
        imagenReferencia: '/images/botellas/casadeuco-petit-verdot.png',
      },
      {
        nombre: "Winemaker's Blend",
        tipo: 'tinto',
        variedad: 'Blend',
        precioHosteleria: 29.0,
        imagenReferencia: '/images/botellas/casadeuco-winemakers-blend.png',
      },
    ],
  },
  {
    slug: 'familia-furlan',
    nombre: 'Familia Furlán',
    zona: 'Altamira · Valle de Uco',
    region: 'Mendoza',
    logo: '/images/logos/familia-furlan.jpeg',
    vinos: [
      {
        nombre: 'Malbec',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 10.5,
        imagenReferencia: '/images/botellas/furlan-malbec.png',
      },
      {
        nombre: 'Torrontés Semillón',
        tipo: 'blanco',
        variedad: 'Blend',
        precioHosteleria: 9.8,
        imagenReferencia: '/images/botellas/furlan-torrontes-semillon.png',
      },
      {
        nombre: 'Reserva Malbec',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 14.5,
        imagenReferencia: '/images/botellas/furlan-reserva-malbec.png',
      },
      {
        nombre: 'Gran Reserva Malbec',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 18.9,
        imagenReferencia: '/images/botellas/furlan-gran-reserva-malbec.png',
      },
    ],
  },
  {
    slug: 'familia-schroeder',
    nombre: 'Familia Schroeder',
    zona: 'Neuquén',
    region: 'Patagonia',
    logo: '/images/logos/familia-schroeder.png',
    vinos: [
      { nombre: 'Saurus Malbec', tipo: 'tinto', variedad: 'Malbec', precioHosteleria: 7.5 },
      { nombre: 'Saurus Rosé', tipo: 'rosado', variedad: 'Pinot Noir', precioHosteleria: 7.5 },
      { nombre: 'Saurus Chardonnay', tipo: 'blanco', variedad: 'Chardonnay', precioHosteleria: 7.5 },
      {
        nombre: 'Saurus Select Pinot Noir',
        tipo: 'tinto',
        variedad: 'Pinot Noir',
        precioHosteleria: 11.0,
        imagenReferencia: '/images/botellas/schroeder-saurus-select-pinot-noir.jpg',
      },
      {
        nombre: 'Saurus Select Malbec',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 11.0,
        imagenReferencia: '/images/botellas/schroeder-saurus-select-malbec.png',
      },
      {
        nombre: 'Barrel Fermented Pinot Noir',
        tipo: 'tinto',
        variedad: 'Pinot Noir',
        precioHosteleria: 15.0,
        imagenReferencia: '/images/botellas/schroeder-barrel-pinot-noir.jpg',
      },
      { nombre: 'Barrel Fermented Cabernet Franc', tipo: 'tinto', variedad: 'Cabernet Franc', precioHosteleria: 15.0 },
      { nombre: 'Barrel Fermented Malbec', tipo: 'tinto', variedad: 'Malbec', precioHosteleria: 15.0 },
      { nombre: 'Tardío Pinot Noir', tipo: 'tinto', variedad: 'Pinot Noir', precioHosteleria: 12.0 },
    ],
  },
  {
    slug: 'bodega-gieco',
    nombre: 'Bodega Gieco',
    zona: 'Luján de Cuyo',
    region: 'Mendoza',
    logo: '/images/logos/bodega-gieco.png',
    vinos: [
      { nombre: 'Malbec Single Vineyard', tipo: 'tinto', variedad: 'Malbec', precioHosteleria: 0 },
      { nombre: 'Malbec Special Selection', tipo: 'tinto', variedad: 'Malbec', precioHosteleria: 0 },
      { nombre: 'Cabernet Franc Special Selection', tipo: 'tinto', variedad: 'Cabernet Franc', precioHosteleria: 0 },
      { nombre: 'Petit Verdot Special Selection', tipo: 'tinto', variedad: 'Petit Verdot', precioHosteleria: 0 },
      { nombre: 'Tannat Special Selection', tipo: 'tinto', variedad: 'Tannat', precioHosteleria: 0 },
    ],
  },
  {
    slug: 'valle-de-la-puerta',
    nombre: 'Valle de la Puerta',
    zona: 'La Rioja',
    region: 'La Rioja',
    logo: '/images/logos/valle-de-la-puerta.jpg',
    vinos: [
      {
        nombre: 'Malbec Clásico',
        tipo: 'tinto',
        variedad: 'Malbec',
        precioHosteleria: 6.9,
        imagenReferencia: '/images/botellas/valle-de-la-puerta-malbec-clasico.png',
      },
      { nombre: 'Torrontés Clásico', tipo: 'blanco', variedad: 'Torrontés', precioHosteleria: 6.9 },
    ],
  },
];

export const TOTAL_REFERENCIAS = BODEGAS.reduce((n, b) => n + b.vinos.length, 0);

/** Las 12 botellas destacadas de la home, en el orden del rediseño. Las 8 que
 *  tienen `imagenReferencia` son fotos de producto reales (dossier +
 *  fotos que fue mandando Martín, ver comentario en `Vino.imagenReferencia`);
 *  las otras 4 todavía no tienen packshot y muestran un casillero con el
 *  nombre. */
export const BOTELLAS_DESTACADAS: { vino: string; bodega: string; imagenReferencia?: string }[] = [
  {
    vino: 'Malbec Crianza',
    bodega: 'Domaine Bousquet',
    imagenReferencia: '/images/botellas/bousquet-malbec-crianza.png',
  },
  {
    vino: 'Malbec Reserva',
    bodega: 'Domaine Bousquet',
    imagenReferencia: '/images/botellas/bousquet-malbec-reserva.jpeg',
  },
  {
    vino: 'Gran Malbec Reserva',
    bodega: 'Domaine Bousquet',
    imagenReferencia: '/images/botellas/bousquet-gran-malbec.png',
  },
  {
    vino: 'El Salvaje Orgánico',
    bodega: 'Casa de Uco',
    imagenReferencia: '/images/botellas/casadeuco-el-salvaje.png',
  },
  {
    vino: 'Vineyard Selection Petit Verdot',
    bodega: 'Casa de Uco',
    imagenReferencia: '/images/botellas/casadeuco-petit-verdot.png',
  },
  {
    vino: "Winemaker's Blend",
    bodega: 'Casa de Uco',
    imagenReferencia: '/images/botellas/casadeuco-winemakers-blend.png',
  },
  {
    vino: 'Saurus Select Malbec',
    bodega: 'Familia Schroeder',
    imagenReferencia: '/images/botellas/schroeder-saurus-select-malbec.png',
  },
  {
    vino: 'Barrel Fermented Pinot Noir',
    bodega: 'Familia Schroeder',
    imagenReferencia: '/images/botellas/schroeder-barrel-pinot-noir.jpg',
  },
  {
    vino: 'Saurus Select Pinot Noir',
    bodega: 'Familia Schroeder',
    imagenReferencia: '/images/botellas/schroeder-saurus-select-pinot-noir.jpg',
  },
  {
    vino: 'Reserva Malbec',
    bodega: 'Familia Furlán',
    imagenReferencia: '/images/botellas/furlan-reserva-malbec.png',
  },
  {
    vino: 'Gran Reserva Malbec',
    bodega: 'Familia Furlán',
    imagenReferencia: '/images/botellas/furlan-gran-reserva-malbec.png',
  },
  {
    vino: 'Malbec Clásico',
    bodega: 'Valle de la Puerta',
    imagenReferencia: '/images/botellas/valle-de-la-puerta-malbec-clasico.png',
  },
];
