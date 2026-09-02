import { feature } from 'topojson-client';
import type { Feature, Geometry } from 'geojson';
import type { Topology } from 'topojson-specification';
import atlas from 'world-atlas/countries-110m.json';

// Geografía real (Natural Earth vía world-atlas), resuelta en build. El JSON
// se importa como módulo, así que NO hay fetch a un CDN en runtime ni JS de
// mapas en el cliente: los mapas salen como SVG ya renderizado en el HTML.
// Nunca dibujar contornos de países a mano.

export interface Region {
  nombre: string;
  coord: [number, number];
}

// Las 4 regiones vitivinícolas que muestra la home.
// OJO: Salta está acá porque la incluye el rediseño como región argentina,
// pero el catálogo 2025 NO tiene ninguna bodega de Salta (ver lib/catalogo.ts:
// las bodegas están en Mendoza, La Rioja y Patagonia). Es una decisión
// editorial pendiente de confirmar — ver README.
export const REGIONES: Region[] = [
  { nombre: 'Mendoza', coord: [-68.84, -32.89] },
  { nombre: 'Salta', coord: [-65.41, -24.79] },
  { nombre: 'Patagonia', coord: [-68.06, -38.95] },
  { nombre: 'La Rioja', coord: [-66.85, -29.41] },
];

export const VALENCIA: [number, number] = [-0.375, 39.47];

export const EUROPA = new Set([
  'Spain', 'Portugal', 'France', 'Italy', 'Germany', 'United Kingdom', 'Ireland', 'Belgium',
  'Netherlands', 'Luxembourg', 'Switzerland', 'Austria', 'Denmark', 'Norway', 'Sweden', 'Finland',
  'Poland', 'Czechia', 'Czech Rep.', 'Slovakia', 'Hungary', 'Slovenia', 'Croatia', 'Bosnia and Herz.',
  'Serbia', 'Montenegro', 'Kosovo', 'Albania', 'North Macedonia', 'Macedonia', 'Greece', 'Bulgaria',
  'Romania', 'Moldova', 'Ukraine', 'Belarus', 'Lithuania', 'Latvia', 'Estonia', 'Iceland', 'Malta',
]);

interface CountryProps {
  name: string;
}

let cache: Feature<Geometry, CountryProps>[] | null = null;

export function paises(): Feature<Geometry, CountryProps>[] {
  if (!cache) {
    const topo = atlas as unknown as Topology;
    const fc = feature(topo, topo.objects.countries) as unknown as {
      features: Feature<Geometry, CountryProps>[];
    };
    cache = fc.features;
  }
  return cache;
}

export function pais(nombre: string) {
  return paises().find((f) => f.properties?.name === nombre);
}

/** Miles con punto, formato es-AR (10400 → "10.400"). */
export function miles(n: number): string {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
