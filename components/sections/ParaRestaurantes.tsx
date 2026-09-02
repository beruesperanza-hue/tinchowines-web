import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

export default function ParaRestaurantes({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.restaurantes;
  return (
    <section id="restaurantes" className="relative scroll-mt-20 overflow-hidden border-b-2 border-ink py-20 md:py-[104px]">
      <Image src="/images/restaurant-table.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(63,6,5,.92)_0%,rgba(63,6,5,.72)_46%,rgba(20,16,15,.45)_100%)]" />
      <div className="container-page relative">
        <div className="max-w-[60ch]">
          <p className="label mb-4 text-olive">{t.eyebrow}</p>
          <h2 className="font-display text-[36px] leading-[.94] tracking-[-0.025em] text-paper md:text-[68px]">{t.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-paper/90 md:text-lg">{t.body}</p>
          <p className="aside-serif -rotate-1 mt-4 text-[22px] text-olive md:text-[30px]">{t.aside}</p>
          <div className="mt-8">
            <Link href={`/${lang}/restaurantes`} className="btn btn-paper">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
