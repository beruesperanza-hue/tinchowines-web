import Image from 'next/image';
import type { Dictionary } from '@/lib/dictionaries';

export default function Martin({ dict }: { dict: Dictionary }) {
  const t = dict.martin;
  return (
    <section className="border-y-2 border-ink bg-ink py-16 md:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-paper/40">
          <Image
            src="/images/martin-bodega.jpg"
            alt={t.fotoAlt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="label mb-4 text-olive">{t.eyebrow}</p>
          <h2 className="font-display text-[32px] leading-[.96] tracking-[-0.025em] text-paper md:text-[56px]">
            {t.title}
          </h2>
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-paper/80 md:text-[17px]">{t.body}</p>
          <p className="label mt-5 text-paper/55">{t.meta}</p>
        </div>
      </div>
    </section>
  );
}
