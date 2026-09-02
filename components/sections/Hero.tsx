import Link from 'next/link';
import PhotoCarousel from '@/components/PhotoCarousel';
import { CARRUSEL_IMAGENES } from '@/lib/carrusel';
import { WHATSAPP_URL } from '@/lib/contacto';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.hero;
  // El carrusel animado (antes una sección aparte, más abajo) pasa a ser la
  // foto del hero: es lo primero que se ve, sin scroll. La ex-foto fija del
  // hero (brindis-noche) se sumó como una foto más del carrusel — ver
  // lib/carrusel.ts.
  const slides = CARRUSEL_IMAGENES.map((src, i) => ({ src, alt: dict.carrusel.alts[i] }));

  return (
    <section className="grid border-b-2 border-ink lg:grid-cols-[1.02fr_.98fr]">
      <div className="bg-ink px-5 py-16 text-paper md:px-12 md:py-20 lg:py-[88px] lg:pl-12 lg:pr-14">
        <div className="ml-auto max-w-[640px]">
          <p className="label mb-6 text-olive">{t.eyebrow}</p>
          <h1 className="font-display text-[15vw] leading-[.88] tracking-[-0.025em] sm:text-7xl lg:text-[112px]">
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>
          <p className="aside-serif mt-4 text-[26px] leading-[1.1] text-olive md:text-[34px]">{t.kicker}</p>
          <p className="mt-7 max-w-[46ch] text-base leading-relaxed text-paper/85 md:text-lg">{t.body}</p>
          <p className="label mt-6 leading-[1.7] text-olive">
            {t.mono[0]}
            <br />
            {t.mono[1]}
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            {/* CTA principal: WhatsApp directo con el mensaje ya escrito. */}
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(t.whatsappMensaje)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-paper"
            >
              {t.ctaPrimary}
            </a>
            <Link href={`/${lang}#mapa`} className="btn btn-outline-paper">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">
        <div className="absolute inset-0 [filter:contrast(1.16)_saturate(1.18)_sepia(.04)]">
          <PhotoCarousel slides={slides} />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[.16] mix-blend-overlay"
          style={{ backgroundImage: `url("${NOISE}")`, backgroundSize: '140px 140px' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,rgba(107,18,32,.3),rgba(20,16,15,.6))]" />
        <div className="absolute inset-x-6 bottom-6 md:inset-x-9 md:bottom-8">
          <p className="aside-serif -rotate-2 text-xl text-paper/95 [text-shadow:0_0_10px_rgba(244,242,235,.3)] md:text-[30px]">
            {t.fotoVariedades}
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <p className="aside-serif -rotate-1 text-lg text-olive [text-shadow:0_0_9px_rgba(20,16,15,.5)] md:text-2xl">
              {dict.carrusel.frase}
            </p>
            <p className="label text-paper/70 [text-shadow:0_1px_6px_rgba(20,16,15,.7)]">{dict.carrusel.pie}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
