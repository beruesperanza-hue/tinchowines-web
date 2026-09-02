import Image from 'next/image';
import { BODEGAS, BOTELLAS_DESTACADAS } from '@/lib/catalogo';
import type { Dictionary } from '@/lib/dictionaries';

export default function Bodegas({ dict }: { dict: Dictionary }) {
  const t = dict.bodegas;
  return (
    <section id="bodegas" className="scroll-mt-20 pt-20 md:pt-24">
      <div className="container-page">
        <p className="label mb-4 text-ink">{t.eyebrow}</p>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-[20ch] font-display text-[40px] leading-[.92] tracking-[-0.025em] md:text-[76px]">
            {t.title}
          </h2>
          <p className="max-w-[44ch] text-base leading-relaxed text-prose md:text-[17px]">{t.intro}</p>
        </div>
      </div>

      {/* Las 12 botellas destacadas, sobre fondo claro: las 5 que tienen foto
          real (packshot con fondo blanco del dossier, no un recorte) usan
          mix-blend-mode:multiply para que ese fondo blanco desaparezca contra
          la tarjeta clara — el efecto de un PNG transparente sin serlo. Las
          otras 7 todavía no tienen packshot y muestran el nombre. */}
      <div className="mt-10 border-y-2 border-ink bg-mist py-11">
        <div className="container-page">
          <p className="aside-serif mb-6 text-[26px] text-ink md:text-[36px]">{t.botellasTitulo}</p>
          <div className="grid grid-cols-2 gap-0.5 border-2 border-ink/15 bg-ink/10 sm:grid-cols-3 lg:grid-cols-6">
            {BOTELLAS_DESTACADAS.map((b) => (
              <div key={`${b.bodega}-${b.vino}`} className="flex flex-col bg-paper px-4 pb-5 pt-5">
                <div className="relative flex aspect-[3/5] w-full items-start justify-center overflow-hidden">
                  {b.imagenReferencia ? (
                    <Image
                      src={b.imagenReferencia}
                      alt={`Botella de ${b.vino}, ${b.bodega}`}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                      className="object-contain object-top mix-blend-multiply"
                    />
                  ) : (
                    <span className="label mt-8 px-2 text-center text-label/50">{b.vino}</span>
                  )}
                </div>
                <p className="mt-3.5 text-sm font-bold leading-tight text-ink">{b.vino}</p>
                <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[.14em] [word-spacing:.28em] text-wine">
                  {b.bodega}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="mt-12 grid gap-0.5 border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-5">
          {BODEGAS.map((b) => (
            <div key={b.slug} className="flex flex-col gap-3.5 bg-paper px-5 pb-7 pt-6">
              {/* Logo real cuando está (Martín los fue mandando); si no,
                  casillero con el nombre. Fondo blanco liso salvo el de
                  Familia Schroeder, que es blanco-sobre-oscuro y necesita la
                  tarjeta invertida para leerse. */}
              <div
                className={`relative flex h-[150px] items-center justify-center border-2 border-ink px-4 md:h-[168px] ${
                  b.logoFondo === 'oscuro' ? 'bg-ink' : 'bg-white'
                }`}
              >
                {b.logo ? (
                  <Image
                    src={b.logo}
                    alt={`Logo de ${b.nombre}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    // El de fondo oscuro (Schroeder) no es un recorte
                    // transparente: es un rectángulo gris oscuro sólido. Con
                    // padding se nota como una caja flotante; a sangre
                    // (object-cover, sin margen) su gris se pierde contra la
                    // tarjeta #14100F, que es casi el mismo tono.
                    className={b.logoFondo === 'oscuro' ? 'object-cover' : 'object-contain p-5'}
                  />
                ) : (
                  <span className="label text-center text-base text-label/60 md:text-lg">{b.nombre}</span>
                )}
              </div>
              <h3 className="text-[22px] font-extrabold leading-tight tracking-[-0.02em] [overflow-wrap:anywhere]">
                {b.nombre}
              </h3>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] [word-spacing:.28em] text-label">
                {b.zona}
              </p>
              <p className="text-sm leading-relaxed text-prose">{t.descripciones[b.slug]}</p>
            </div>
          ))}
        </div>
        <p className="aside-serif mt-4 text-xl text-ink md:text-2xl">{t.pie}</p>
      </div>
    </section>
  );
}
