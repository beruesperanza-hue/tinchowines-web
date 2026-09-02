import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import Cifras from '@/components/sections/Cifras';
import RutaMapa from '@/components/sections/RutaMapa';
import Bodegas from '@/components/sections/Bodegas';
import Como from '@/components/sections/Como';
import ParaRestaurantes from '@/components/sections/ParaRestaurantes';
import Club from '@/components/sections/Club';
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
      <Cifras dict={dict} />
      <RutaMapa dict={dict} />
      <Bodegas dict={dict} />
      <Como dict={dict} />
      <ParaRestaurantes lang={l} dict={dict} />
      <Club lang={l} dict={dict} />
      <Martin dict={dict} />
      <Contacto dict={dict} />
    </main>
  );
}
