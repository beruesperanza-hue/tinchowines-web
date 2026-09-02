import type { Dictionary } from '@/lib/dictionaries';

// Acordeón nativo (<details>/<summary>, sin JS): compacto y cerrado por
// defecto — antes eran 5 columnas con el texto siempre visible, ocupaba
// mucho más alto, sobre todo en mobile donde las columnas se apilaban.
export default function Como({ dict }: { dict: Dictionary }) {
  const t = dict.como;
  return (
    <section className="mt-20 border-y-2 border-ink bg-mist py-16 md:mt-24 md:py-[88px]">
      <div className="container-page">
        <p className="label mb-4 text-ink">{t.eyebrow}</p>
        <h2 className="max-w-[22ch] font-display text-[34px] leading-[.94] tracking-[-0.025em] md:text-[58px]">
          {t.title}
        </h2>
        <div className="mt-10 max-w-[62ch] border-t-2 border-ink">
          {t.pasos.map((p, i) => (
            <details key={p.titulo} className="group border-b-2 border-ink">
              <summary className="flex cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
                <span className="aside-serif w-10 shrink-0 text-2xl text-ink md:text-[28px]">{`0${i + 1}`}</span>
                <span className="flex-1 text-[17px] font-bold md:text-lg">{p.titulo}</span>
                <span className="label shrink-0 text-label transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 pl-14 pr-8 text-sm leading-relaxed text-prose">{p.texto}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
