import type { Metadata } from 'next';
import { Instrument_Serif, Space_Mono, Archivo } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDictionary } from '@/lib/dictionaries';
import { LOCALES, isLocale, type Locale } from '@/lib/i18n';

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const body = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const SITE_URL = 'https://tinchowines.com';

// Este es el root layout del sitio: renderiza <html>/<body>. Vive dentro de
// [lang] para poder setear <html lang> con el idioma real de cada página.
// La ruta "/" se redirige a /es desde next.config.ts.
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.title, template: '%s | Tincho Wines' },
    description: dict.meta.description,
    keywords: [
      'vino argentino España',
      'vino argentino Valencia',
      'importador vino argentino',
      'Malbec España',
      'vino argentino para restaurantes',
      'Argentine wine Spain',
      'Argentine wine importer',
      'Argentine Malbec Spain',
      'Argentine wine for restaurants',
      'Domaine Bousquet',
      'Familia Schroeder',
      'Casa de Uco',
    ],
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: { en: `${SITE_URL}/en`, es: `${SITE_URL}/es`, 'x-default': `${SITE_URL}/es` },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      siteName: 'Tincho Wines',
      images: ['/images/brindis-noche.png'],
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/images/brindis-noche.png'],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = getDictionary(l);

  return (
    <html lang={l} className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <body className="bg-paper font-body text-ink antialiased">
        <Header lang={l} dict={dict} />
        {children}
        <Footer lang={l} dict={dict} />
      </body>
    </html>
  );
}
