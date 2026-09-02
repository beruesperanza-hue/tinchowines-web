import ContactForm from '@/components/ContactForm';
import { WHATSAPP_URL, WHATSAPP_VISIBLE, EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/contacto';
import type { Dictionary } from '@/lib/dictionaries';

function Linea({ href, titulo, nota }: { href: string; titulo: string; nota: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-baseline justify-between gap-5 text-ink hover:text-wine"
    >
      <span className="text-xl font-bold tracking-[-0.01em] md:text-2xl">{titulo}</span>
      <span className="font-mono text-[10px] font-bold uppercase tracking-[.18em] [word-spacing:.28em] text-label">
        {nota}
      </span>
    </a>
  );
}

export default function Contacto({ dict }: { dict: Dictionary }) {
  const t = dict.contacto;
  return (
    <section id="contacto" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-[72px]">
        <div>
          <p className="label mb-4 text-ink">{t.eyebrow}</p>
          <h2 className="font-display text-[38px] leading-[.94] tracking-[-0.025em] md:text-[66px]">{t.title}</h2>
          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-prose md:text-[17px]">{t.intro}</p>
          <div className="mt-9 flex flex-col gap-4 border-t-2 border-ink pt-5">
            <Linea href={WHATSAPP_URL} titulo={WHATSAPP_VISIBLE} nota={t.whatsappNota} />
            <Linea href={`mailto:${EMAIL}`} titulo={EMAIL} nota={t.emailNota} />
            <Linea href={INSTAGRAM_URL} titulo={INSTAGRAM_HANDLE} nota={t.instagramNota} />
          </div>
        </div>
        <ContactForm dict={dict} />
      </div>
    </section>
  );
}
