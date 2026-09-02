import { geoMercator, geoPath } from 'd3-geo';
import { pais, REGIONES } from '@/lib/geo';

const OLIVE = '#C7C64B';
const MONO = 'var(--font-mono), ui-monospace, monospace';
const SERIF = 'var(--font-display), Georgia, serif';

const W = 480;
const H = 720;

// Desplazamiento de cada etiqueta respecto de su punto, a mano — con sólo 4
// puntos alcanza con ajustar caso por caso para que ningún nombre pise el
// contorno del país ni a otra etiqueta (Mendoza y La Rioja quedan cerca).
const LABEL_OFFSET: Record<string, { dx: number; dy: number; anchor: 'start' | 'end' }> = {
  Mendoza: { dx: -16, dy: 6, anchor: 'end' },
  Salta: { dx: 16, dy: -4, anchor: 'start' },
  Patagonia: { dx: 16, dy: 6, anchor: 'start' },
  'La Rioja': { dx: 16, dy: -10, anchor: 'start' },
};

/** Un solo mapa de Argentina con las 4 regiones marcadas y numeradas. */
export default function AllRegionsMap({ ariaLabel }: { ariaLabel: string }) {
  const ar = pais('Argentina');
  if (!ar) return null;

  const projection = geoMercator().fitExtent(
    [
      [40, 32],
      [W - 40, H - 32],
    ],
    ar
  );
  const path = geoPath(projection);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={ariaLabel}>
      <path d={path(ar) ?? undefined} fill="rgba(244,242,235,.10)" stroke="rgba(244,242,235,.55)" strokeWidth={1.25} />

      {REGIONES.map((r, i) => {
        const [x, y] = projection(r.coord) as [number, number];
        const label = LABEL_OFFSET[r.nombre] ?? { dx: 16, dy: 0, anchor: 'start' as const };
        return (
          <g key={r.nombre}>
            <circle cx={x} cy={y} r={5.5} fill={OLIVE} />
            <circle cx={x} cy={y} r={14} fill="none" stroke={OLIVE} strokeOpacity={0.55} />
            <text
              x={x + label.dx}
              y={y + label.dy}
              textAnchor={label.anchor}
              fill="rgba(244,242,235,.55)"
              style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '.14em' }}
            >
              {`0${i + 1}`}
            </text>
            <text
              x={x + label.dx}
              y={y + label.dy + 20}
              textAnchor={label.anchor}
              fill="rgba(244,242,235,.95)"
              style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 22 }}
            >
              {r.nombre}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
