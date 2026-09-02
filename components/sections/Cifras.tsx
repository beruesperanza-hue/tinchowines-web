import type { Dictionary } from '@/lib/dictionaries';

export default function Cifras({ dict }: { dict: Dictionary }) {
  return (
    <>
      <div className="border-b-2 border-ink bg-ink">
        <div className="container-page flex flex-wrap items-center justify-between gap-5 py-8">
          <p className="aside-serif -rotate-1 text-[26px] text-paper/95 [text-shadow:0_0_9px_rgba(244,242,235,.22)] md:text-[38px]">
            {dict.franja.frase}
          </p>
          <p className="label text-olive">{dict.franja.dato}</p>
        </div>
      </div>

      <div className="container-page">
        <div className="grid grid-cols-2 border-b-2 border-ink lg:grid-cols-4">
          {dict.cifras.map((c, i) => (
            <div
              key={c.valor}
              className={`py-7 pr-6 ${i > 0 ? 'border-l-2 border-ink pl-6' : ''} ${i === 2 ? 'border-t-2 border-ink lg:border-t-0' : ''} ${i === 3 ? 'border-t-2 border-ink lg:border-t-0' : ''}`}
            >
              <p className="font-display text-[36px] leading-none tracking-[-0.02em] text-ink md:text-[52px]">{c.valor}</p>
              <p className="mt-2 text-sm text-prose">{c.pie}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
