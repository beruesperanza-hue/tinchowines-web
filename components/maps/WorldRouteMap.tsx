import { geoNaturalEarth1, geoPath, geoGraticule, geoInterpolate, geoDistance } from 'd3-geo';
import { paises, EUROPA, REGIONES, VALENCIA, miles } from '@/lib/geo';

const PAPER = '#F4F2EB';
const LAND = '#D6D1C3';
const INK = '#14100F';

const W = 1000;
const H = 700;
const MAP = { x0: 330, y0: 40, x1: 968, y1: 660 };
const COL = { x0: 32, x1: 288 };

const SERIF = "var(--font-display), Georgia, serif";
const MONO = "var(--font-mono), ui-monospace, monospace";

function kmEntre(a: [number, number], b: [number, number]) {
  // Distancia de círculo máximo, redondeada a la centena.
  return Math.round((geoDistance(a, b) * 6371) / 100) * 100;
}

export default function WorldRouteMap({
  labels,
}: {
  labels: { origin: string; base: string; distances: string; projection: string; ariaLabel: string };
}) {
  // Ventana geográfica: sólo el corredor Argentina–Europa. Se ajusta con un
  // MultiPoint (y no con un polígono) porque el sentido de giro del anillo
  // hacía que fitExtent subescalara el mapa.
  const LON0 = -74, LON1 = 28, LAT0 = -56, LAT1 = 60;
  const ventana = {
    type: 'MultiPoint' as const,
    coordinates: [[LON0, LAT0], [LON1, LAT0], [LON1, LAT1], [LON0, LAT1]],
  };
  const INSET = 22;
  const projection = geoNaturalEarth1().fitExtent(
    [
      [MAP.x0 + INSET, MAP.y0 + INSET],
      [MAP.x1 - INSET, MAP.y1 - INSET],
    ],
    ventana
  );
  const path = geoPath(projection);
  const proj = (c: [number, number]) => projection(c) as [number, number];

  const graticule = geoGraticule().step([15, 15]).extent([
    [LON0, LAT0],
    [LON1, LAT1],
  ]);

  const dest = proj(VALENCIA);

  // Se ordenan de norte a sur según su posición ya proyectada, para que la
  // numeración 01–04 del índice coincida con el orden visual en el mapa.
  const ordenadas = [...REGIONES].sort((a, b) => proj(a.coord)[1] - proj(b.coord)[1]);

  const RING = 17;
  const rutas = ordenadas.map(({ coord }) => {
    const interp = geoInterpolate(coord, VALENCIA);
    const pts: [number, number][] = [];
    for (let t = 0; t <= 1.0001; t += 0.008) {
      const p = proj(interp(Math.min(t, 1)) as [number, number]);
      // Se recorta el tramo final para que la línea no tape el punto destino.
      if (Math.hypot(p[0] - dest[0], p[1] - dest[1]) > RING) pts.push(p);
    }
    return pts.map((p, i) => `${i ? 'L' : 'M'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  });

  const rowTop = MAP.y0 + 28;
  const rowH = 118;
  const footY = MAP.y1 - 22;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={labels.ariaLabel}>
      <defs>
        <clipPath id="tw-world-clip">
          <rect x={MAP.x0} y={MAP.y0} width={MAP.x1 - MAP.x0} height={MAP.y1 - MAP.y0} />
        </clipPath>
      </defs>

      <g clipPath="url(#tw-world-clip)">
        {/* Retícula cada 15°: estructura del mapa, no adorno. */}
        <path d={path(graticule()) ?? undefined} fill="none" stroke="rgba(20,16,15,.14)" strokeWidth={0.75} />

        {/* Sólo Argentina y Europa: el resto del mundo no se dibuja. */}
        {paises().map((f, i) => {
          const nombre = f.properties?.name;
          const esAR = nombre === 'Argentina';
          const esES = nombre === 'Spain';
          if (!esAR && !EUROPA.has(nombre)) return null;
          return (
            <path
              key={i}
              d={path(f) ?? undefined}
              fill={esAR || esES ? INK : LAND}
              stroke={esAR || esES ? PAPER : 'rgba(20,16,15,.4)'}
              strokeWidth={0.9}
            />
          );
        })}

        {rutas.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={INK}
            strokeWidth={1.4}
            strokeOpacity={0.8}
            pathLength={1}
            strokeDasharray={1}
            style={{ animation: `twDraw 2.4s ease-out ${(0.22 * i).toFixed(2)}s both` }}
          />
        ))}

        {ordenadas.map(({ nombre, coord }, i) => {
          const [x, y] = proj(coord);
          return (
            <g key={nombre}>
              <circle cx={x} cy={y} r={8} fill={PAPER} fillOpacity={0.85} />
              <circle cx={x} cy={y} r={4} fill={INK} />
              <text
                x={x - 13}
                y={y + 4}
                fill={INK}
                textAnchor="end"
                style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.08em' }}
              >
                {`0${i + 1}`}
              </text>
            </g>
          );
        })}

        <circle cx={dest[0]} cy={dest[1]} r={13} fill={PAPER} fillOpacity={0.9} />
        <circle cx={dest[0]} cy={dest[1]} r={5.5} fill={INK} />
        <circle cx={dest[0]} cy={dest[1]} r={15} fill="none" stroke={INK} strokeOpacity={0.5} strokeWidth={1.5} />
        <line x1={dest[0] - 24} y1={dest[1]} x2={dest[0] - 17} y2={dest[1]} stroke={INK} strokeWidth={1.5} />
        <line x1={dest[0]} y1={dest[1] + 17} x2={dest[0]} y2={dest[1] + 24} stroke={INK} strokeWidth={1.5} />
      </g>

      {/* Etiquetas de latitud, ancladas al borde real de la retícula. */}
      {([[45, '45° N'], [0, '0°'], [-30, '30° S']] as const).map(([lat, label]) => (
        <text
          key={label}
          x={MAP.x0 + 8}
          y={proj([LON0, lat])[1] - 7}
          fill="rgba(20,16,15,.45)"
          style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '.14em' }}
        >
          {label}
        </text>
      ))}

      <text x={dest[0] + 26} y={dest[1] + 2} fill={INK} style={{ fontFamily: SERIF, fontSize: 26 }}>
        Valencia
      </text>
      <text
        x={dest[0] + 26}
        y={dest[1] + 22}
        fill="rgba(20,16,15,.6)"
        style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '.18em' }}
      >
        {labels.base}
      </text>

      <rect
        x={MAP.x0}
        y={MAP.y0}
        width={MAP.x1 - MAP.x0}
        height={MAP.y1 - MAP.y0}
        fill="none"
        stroke={INK}
        strokeWidth={2}
      />

      {/* Índice de rutas, columna izquierda reglada. */}
      <text x={COL.x0} y={MAP.y0 + 12} fill="rgba(20,16,15,.6)" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '.2em' }}>
        {labels.origin}
      </text>
      <line x1={COL.x0} y1={MAP.y0 + 28} x2={COL.x1} y2={MAP.y0 + 28} stroke={INK} strokeWidth={2} />

      {ordenadas.map(({ nombre, coord }, i) => {
        const top = rowTop + rowH * i;
        const baseline = top + 46;
        return (
          <g key={nombre}>
            {i > 0 && <line x1={COL.x0} y1={top} x2={COL.x1} y2={top} stroke="rgba(20,16,15,.22)" strokeWidth={1} />}
            <text x={COL.x0} y={top + 20} fill="rgba(20,16,15,.5)" style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '.18em' }}>
              {`0${i + 1}`}
            </text>
            <text x={COL.x0} y={baseline} fill={INK} style={{ fontFamily: SERIF, fontSize: 30 }}>
              {nombre}
            </text>
            <text
              x={COL.x0}
              y={baseline + 22}
              fill="rgba(20,16,15,.6)"
              style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.12em' }}
            >
              {`${miles(kmEntre(coord, VALENCIA))} KM`}
            </text>
          </g>
        );
      })}

      <line x1={COL.x0} y1={footY - 30} x2={COL.x1} y2={footY - 30} stroke={INK} strokeWidth={2} />
      <text x={COL.x0} y={footY - 8} fill="rgba(20,16,15,.6)" style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '.16em' }}>
        {labels.distances}
      </text>
      <text x={COL.x0} y={footY + 8} fill="rgba(20,16,15,.6)" style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '.16em' }}>
        {labels.projection}
      </text>
    </svg>
  );
}
