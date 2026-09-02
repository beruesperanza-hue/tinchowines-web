import WorldRouteMap from '@/components/maps/WorldRouteMap';
import AllRegionsMap from '@/components/maps/AllRegionsMap';
import type { Dictionary } from '@/lib/dictionaries';

// "Una ruta corta para un viaje largo" (el mapa mundial) y "Argentina no es
// solo Mendoza" (el mapa de regiones) van juntas, en una sola sección: las
// dos son, en el fondo, la misma historia — de dónde sale el vino y cómo
// llega — así que comparten un solo bloque sin corte entre medio. El nav
// sigue teniendo dos anclas ("La ruta" → #mapa, "Regiones" → #regiones)
// porque cada una apunta a su capítulo dentro de esta misma sección.
export default function RutaMapa({ dict }: { dict: Dictionary }) {
  const m = dict.mapa;
  const r = dict.regiones;
  return (
    <section id="mapa" className="scroll-mt-20 pt-20 md:pt-24">
      <div className="container-page">
        <p className="label mb-4 text-ink">{m.eyebrow}</p>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-[20ch] font-display text-[40px] leading-[.92] tracking-[-0.025em] md:text-[76px]">
            {m.title}
          </h2>
          <p className="max-w-[44ch] text-base leading-relaxed text-prose md:text-[17px]">{m.intro}</p>
        </div>
        <div className="relative mt-10 border-t-2 border-ink pt-7">
          <p className="aside-serif -rotate-1 text-xl text-ink md:text-[26px]">{m.aside}</p>
          <div className="mt-4 overflow-x-auto">
            <div className="min-w-[720px]">
              <WorldRouteMap
                labels={{
                  origin: m.origin,
                  base: m.base,
                  distances: m.distances,
                  projection: m.projection,
                  ariaLabel: m.ariaLabel,
                }}
              />
            </div>
          </div>
        </div>

        <div id="regiones" className="scroll-mt-20 flex flex-wrap items-baseline justify-between gap-6 border-t-2 border-ink pt-7 mt-14 md:mt-16">
          <h2 className="font-display text-[34px] leading-[.94] tracking-[-0.025em] md:text-[58px]">{r.title}</h2>
          <p className="max-w-[42ch] text-base leading-relaxed text-prose">{r.intro}</p>
        </div>
      </div>

      <div className="mt-10 border-y-2 border-ink bg-ink">
        <div className="container-page grid gap-0 lg:grid-cols-[.85fr_1.15fr]">
          <div className="border-b-2 border-paper/25 px-0 py-9 sm:px-6 lg:border-b-0 lg:border-r-2 lg:py-12">
            <div className="mx-auto max-w-xs">
              <AllRegionsMap ariaLabel={m.ariaLabel.replace('Europa', 'Argentina')} />
            </div>
          </div>

          <div>
            {r.items.map((item, i) => (
              <div
                key={item.nombre}
                className={`flex gap-5 px-0 py-7 sm:px-8 ${i > 0 ? 'border-t-2 border-paper/25' : ''}`}
              >
                <span className="aside-serif shrink-0 text-2xl text-olive md:text-[28px]">{`0${i + 1}`}</span>
                <div>
                  <p className="aside-serif text-[26px] text-paper/95 md:text-[30px]">{item.nombre}</p>
                  <p className="label mt-2 text-olive">{item.dato}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
