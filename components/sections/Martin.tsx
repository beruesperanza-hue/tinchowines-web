'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/lib/dictionaries';

const MARTIN_FOTOS = [
  '/images/martin-bodega.jpg',
  '/images/martin-vinexpo-paris.png',
  '/images/martin-cata-wine-of-chile.png',
  '/images/martin-vinedo.png',
];

export default function Martin({ dict }: { dict: Dictionary }) {
  const t = dict.martin;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MARTIN_FOTOS.length) % MARTIN_FOTOS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MARTIN_FOTOS.length);
  };

  return (
    <section className="border-y-2 border-ink bg-ink py-16 md:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-14">
        <div className="relative flex flex-col">
          <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-paper/40">
            <Image
              key={currentIndex}
              src={MARTIN_FOTOS[currentIndex]}
              alt={t.fotoAlt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          {MARTIN_FOTOS.length > 1 && (
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="text-sm font-semibold text-olive hover:text-paper transition-colors"
              >
                ← Anterior
              </button>
              <span className="text-xs text-paper/60">
                {currentIndex + 1} / {MARTIN_FOTOS.length}
              </span>
              <button
                onClick={handleNext}
                className="text-sm font-semibold text-olive hover:text-paper transition-colors"
              >
                Siguiente →
              </button>
            </div>
          )}
        </div>
        <div>
          <p className="label mb-4 text-olive">{t.eyebrow}</p>
          <h2 className="font-display text-[32px] leading-[.96] tracking-[-0.025em] text-paper md:text-[56px]">
            {t.title}
          </h2>
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-paper/80 md:text-[17px]">{t.body}</p>
          <p className="label mt-5 text-paper/55">{t.meta}</p>
        </div>
      </div>
    </section>
  );
}
