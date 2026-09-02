import Link from 'next/link';
import { WHATSAPP_URL, EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/contacto';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const nav = [
    { href: `/${lang}#mapa`, label: dict.nav.ruta },
    { href: `/${lang}#regiones`, label: dict.nav.regiones },
    { href: `/${lang}#bodegas`, label: dict.nav.bodegas },
    { href: `/${lang}/restaurantes`, label: dict.nav.restaurantes },
    { href: `/${lang}#club`, label: dict.nav.club },
    { href: `/${lang}#contacto`, label: dict.nav.contacto },
  ];

  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        <div>
          <p className="font-mono text-lg font-extrabold uppercase tracking-[.16em] [word-spacing:.28em]">Tincho Wines</p>
          <p className="aside-serif mt-3 text-2xl text-olive">{dict.footer.kicker}</p>
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-paper/60">{dict.footer.tagline}</p>
        </div>

        <div>
          <p className="label mb-4 text-paper/45">{dict.footer.explorar}</p>
          <ul className="flex flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label mb-4 text-paper/45">{dict.footer.contacto}</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href={`mailto:${EMAIL}`} className="text-paper/80 hover:text-paper">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-paper/80 hover:text-paper">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-paper/80 hover:text-paper">
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
          <p className="label mt-5 text-paper/45">{dict.footer.base}</p>
        </div>
      </div>

      <div className="border-t-2 border-paper/20">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Tincho Wines. {dict.footer.rights}</p>
          <p>{dict.footer.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
