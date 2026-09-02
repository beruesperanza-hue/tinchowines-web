import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

// El club se llama "Sin Escalas" — eco del titular del hero ("Argentina, sin
// escalas"). Va sobre campo oscuro y con el nombre en grande para que pese
// como sub-marca, no como una sección más.
export default function Club({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.club;
  return (
    <section id="club" className="scroll-mt-20 border-y-2 border-ink bg-ink text-paper">
      <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="label border-2 border-olive px-3 py-1.5 text-olive">{t.badge}</span>
            <span className="label text-paper/50">{t.eyebrow}</span>
          </div>

          <p className="mt-7 font-display text-[64px] leading-[.85] tracking-[-0.03em] text-paper sm:text-[84px] md:text-[104px]">
            {t.nombre}
          </p>
          <p className="label mt-4 text-olive">{t.subtitulo}</p>

          <h2 className="mt-8 font-display text-[28px] italic leading-tight tracking-[-0.02em] text-paper/95 md:text-[38px]">
            {t.title}
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-paper/75 md:text-[17px]">{t.body}</p>
          <p className="aside-serif mt-4 text-xl text-olive md:text-[26px]">{t.aside}</p>

          <Link href={`/${lang}#contacto`} className="btn btn-paper mt-8">
            {t.cta}
          </Link>
        </div>

        <div className="relative aspect-[5/4] w-full border-2 border-paper/40">
          <Image
            src="/images/foto-bodega-1.png"
            alt={t.fotoAlt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover [filter:contrast(1.12)_saturate(1.35)]"
          />
        </div>
      </div>
    </section>
  );
}
