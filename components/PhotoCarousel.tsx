import Image from 'next/image';

export interface CarouselSlide {
  src: string;
  alt: string;
}

// Pila de fotos con cross-fade en CSS puro (keyframes twSlide en
// globals.css): ciclo de 18s, una foto entra cada 2s. Sin JS — se anima
// sola. El contenedor que lo use tiene que ser position:relative (o
// absolute/fixed) para que el `fill` de cada imagen calce.
export default function PhotoCarousel({ slides }: { slides: CarouselSlide[] }) {
  return (
    <>
      {slides.map((slide, i) => (
        <div key={slide.src} className="absolute inset-0 opacity-0" style={{ animation: `twSlide 18s linear ${i * 2}s infinite` }}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            // Sólo la primera entra con prioridad: las demás aparecen
            // recién a partir del segundo 2 del ciclo.
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}
    </>
  );
}
