import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Como from '@/components/sections/Como';
import Bodegas from '@/components/sections/Bodegas';
import Contacto from '@/components/sections/Contacto';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n';

const SITE_URL = 'https://tinchowines.com';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).paginaRestaurantes;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/restaurantes`,
      languages: {
        en: `${SITE_URL}/en/restaurantes`,
        es: `${SITE_URL}/es/restaurantes`,
        'x-default': `${SITE_URL}/es/restaurantes`,
      },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `${SITE_URL}/${lang}/restaurantes`,
      images: ['/images/restaurant-table.jpg'],
    },
  };
}

export default async function RestaurantesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = getDictionary(l);
  const t = dict.paginaRestaurantes;

  return (
    <main>
      <section className="relative overflow-hidden border-b-2 border-ink py-20 md:py-28">
        <Image src="/images/brindis-dia.png" alt="" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(63,6,5,.92)_0%,rgba(63,6,5,.7)_50%,rgba(20,16,15,.5)_100%)]" />
        <div className="container-page relative">
          <p className="label mb-4 text-olive">{t.eyebrow}</p>
          <h1 className="max-w-[22ch] font-display text-[38px] leading-[.94] tracking-[-0.025em] text-paper md:text-[76px]">
            {t.title}
          </h1>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-paper/85 md:text-lg">{t.subtitle}</p>
        </div>
      </section>

      {/* Acordeón nativo (<details>/<summary>, sin JS): el título hace de
          disparador, cerrado por defecto — achica el bloque, que antes
          mostraba los dos párrafos siempre abiertos. */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <details className="group max-w-3xl">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <div>
                <p className="label mb-4 text-ink">{t.sectionEyebrow}</p>
                <h2 className="font-display text-[34px] leading-[.94] tracking-[-0.025em] md:text-[58px]">
                  {t.sectionTitle}
                </h2>
              </div>
              <span className="label shrink-0 pt-1 text-label transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-prose md:text-[17px]">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
            <p className="aside-serif mt-6 text-xl text-ink md:text-[26px]">{t.nota}</p>
          </details>
        </div>
      </section>

      <Como dict={dict} />
      <Bodegas dict={dict} />
      <Contacto dict={dict} />
    </main>
  );
}
