import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import Bodegas from '@/components/sections/Bodegas';
import Martin from '@/components/sections/Martin';
import Contacto from '@/components/sections/Contacto';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = getDictionary(l);

  return (
    <main>
      <Hero lang={l} dict={dict} />
      <Bodegas dict={dict} />
      <Martin dict={dict} />
      <Contacto dict={dict} />
    </main>
  );
}
