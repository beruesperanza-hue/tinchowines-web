// Wordmark provisorio (Space Mono en mayúsculas + "est. 2015" en itálica).
// El logo definitivo lo va a proveer Martín: cuando llegue, se reemplaza el
// contenido de este componente por un <Image>/<svg> y no hay que tocar nada más.
export default function Logo({ est }: { est?: string }) {
  return (
    <span className="flex items-baseline gap-2.5 whitespace-nowrap">
      <span className="font-mono text-lg font-extrabold uppercase tracking-[.14em] [word-spacing:.24em] sm:text-xl md:text-[26px]">
        Tincho Wines
      </span>
      {est && <span className="font-display text-lg italic md:text-2xl">{est}</span>}
    </span>
  );
}
