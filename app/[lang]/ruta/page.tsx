import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import WorldRouteMap from '@/components/maps/WorldRouteMap';
import AllRegionsMap from '@/components/maps/AllRegionsMap';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const l = lang as Locale;

  const title = l === 'es' ? 'La ruta del vino · Tincho Wines' : 'The wine route · Tincho Wines';
  const description = l === 'es'
    ? 'De Argentina a Europa sin intermediarios. Descubre el recorrido de nuestros vinos.'
    : 'From Argentina to Europe without middlemen. Discover the journey of our wines.';

  return {
    title,
    description,
  };
}

export default async function RutaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = getDictionary(l);

  const m = dict.mapa;
  const r = dict.regiones;

  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="border-b-2 border-ink pb-20 md:pb-28">
        <div className="container-page">
          <h1 className="font-display text-[48px] leading-[.9] tracking-[-0.025em] text-ink md:text-[76px]">
            {l === 'es' ? 'La ruta del vino' : 'The wine route'}
          </h1>
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-ink/70 md:text-[17px]">
            {l === 'es'
              ? 'Desde la bodega hasta tu mesa. Argentina a Europa sin capas de por medio.'
              : 'From the winery to your table. Argentina to Europe without middlemen.'}
          </p>
        </div>
      </section>

      {/* Mapa mundial */}
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
        </div>
      </section>

      {/* Regiones */}
      <section id="regiones" className="scroll-mt-20 pt-20 md:pt-24">
        <div className="container-page">
          <div className="flex flex-wrap items-baseline justify-between gap-6 border-b-2 border-ink pb-7 mb-10">
            <h2 className="font-display text-[34px] leading-[.94] tracking-[-0.025em] md:text-[58px]">{r.title}</h2>
            <p className="max-w-[42ch] text-base leading-relaxed text-prose">{r.intro}</p>
          </div>
        </div>

        <div className="border-y-2 border-ink bg-ink">
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

      {/* Importador directo */}
      <section className="border-y-2 border-ink bg-ink py-16 md:py-20">
        <div className="container-page">
          <p className="label mb-4 text-olive">{l === 'es' ? 'Quién está detrás' : "Who's behind it"}</p>
          <h2 className="font-display text-[32px] leading-[.96] tracking-[-0.025em] text-paper md:text-[56px] mb-6">
            {l === 'es'
              ? 'Martín Cabado, importador directo'
              : 'Martín Cabado, direct importer'}
          </h2>
          <p className="max-w-[56ch] text-base leading-relaxed text-paper/80 md:text-[17px]">
            {l === 'es'
              ? 'Quince años recorriendo bodegas argentinas. Sin distribuidores. Sin brokers. Sin capas de por medio que suban el precio y alejen el vino de su origen.'
              : 'Fifteen years touring Argentine wineries. No distributors. No brokers. No middlemen raising prices and distancing wine from its source.'}
          </p>
          <p className="mt-4 text-base leading-relaxed text-paper/80 md:text-[17px]">
            {l === 'es'
              ? 'Seleccionamos en origen, compramos directo, y acercamos a Europa lo que realmente vale la pena beber.'
              : "We select at source, buy direct, and bring to Europe what's truly worth drinking."}
          </p>
        </div>
      </section>
    </main>
  );
}
