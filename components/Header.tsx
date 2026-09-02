'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // La home es un long-scroll: la nav apunta a anclas dentro de /[lang].
  const nav = [
    { href: `/${lang}#mapa`, label: dict.nav.ruta },
    { href: `/${lang}#regiones`, label: dict.nav.regiones },
    { href: `/${lang}#bodegas`, label: dict.nav.bodegas },
    { href: `/${lang}/restaurantes`, label: dict.nav.restaurantes },
    { href: `/${lang}#club`, label: dict.nav.club },
  ];

  const otherLang: Locale = lang === 'en' ? 'es' : 'en';
  const pathWithoutLang = pathname?.replace(/^\/(en|es)/, '') || '';
  const switchHref = `/${otherLang}${pathWithoutLang}`;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="container-page flex items-center justify-between gap-8 py-4">
        <Link href={`/${lang}`} onClick={() => setOpen(false)} className="text-ink">
          <Logo est={dict.nav.est} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium text-ink hover:text-wine">
              {item.label}
            </Link>
          ))}
          <Link href={switchHref} hrefLang={otherLang} className="font-mono text-xs font-bold tracking-[.14em] text-label hover:text-ink">
            {otherLang.toUpperCase()}
          </Link>
          <Link href={`/${lang}#contacto`} className="btn btn-ink">
            {dict.nav.cta}
          </Link>
        </nav>

        <button className="label text-ink lg:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? dict.nav.close : dict.nav.menu}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-ink bg-paper lg:hidden">
          <nav className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/15 py-3 text-base text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={switchHref}
              hrefLang={otherLang}
              onClick={() => setOpen(false)}
              className="border-b border-ink/15 py-3 text-base text-label"
            >
              {otherLang === 'es' ? 'Español' : 'English'}
            </Link>
            <Link href={`/${lang}#contacto`} onClick={() => setOpen(false)} className="btn btn-ink mt-5 mb-4 self-start">
              {dict.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
