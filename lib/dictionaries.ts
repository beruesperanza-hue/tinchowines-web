import type { Locale } from './i18n';

// Todo el copy del sitio vive acá, en español e inglés. Los componentes no
// tienen texto hardcodeado: reciben la porción del diccionario que les toca.
// Para cambiar un texto del sitio, se edita este archivo y nada más.
//
// El español es el original (viene del rediseño en ../rediseno-ref/), con voz
// argentina —"contanos", "armamos"—. El inglés es la traducción.
const es = {
  nav: {
    ruta: 'La ruta',
    regiones: 'Regiones',
    bodegas: 'Bodegas',
    restaurantes: 'Restaurantes',
    club: 'Club',
    contacto: 'Contacto',
    cta: 'Contactar',
    menu: 'Menú',
    close: 'Cerrar',
    est: 'est. 2015',
  },
  hero: {
    eyebrow: 'Vino argentino · Directo a Europa',
    titleLine1: 'Argentina,',
    titleLine2: 'sin escalas.',
    kicker: 'Del viñedo a tu mesa.',
    // El rediseño decía "cuatro regiones": el catálogo 2025 tiene bodegas en
    // tres (Mendoza, Patagonia y La Rioja). Se ajustó para no afirmar de más.
    body: 'Seleccionamos los vinos en origen, bodega por bodega, y los acercamos directamente a Europa. Trabajamos con quienes los hacen, acortamos el camino y construimos relaciones que van mucho más allá del primer pedido.',
    mono: ['Buenos vinos. Menos intermediarios.', 'Mejores conexiones.'],
    // CTA principal: va directo a WhatsApp, no a una sección de la web.
    ctaPrimary: 'Vinos para restaurantes',
    ctaSecondary: 'Ver la ruta',
    whatsappMensaje: 'Hola Martín, quiero vinos argentinos para mi restaurante.',
    fotoVariedades: 'Malbec · Pinot Noir · Cabernet Franc',
  },
  // El orden de `alts` tiene que coincidir con CARRUSEL_IMAGENES en
  // lib/carrusel.ts — es el carrusel animado que ahora vive en el hero.
  carrusel: {
    frase: 'Ruta 40 · Cafayate · Valle de Uco · Patagonia',
    pie: 'Kilómetros recorridos, bodega por bodega',
    alts: [
      'Brindis con Malbec argentino, de noche',
      'Brindis con Malbec argentino y asado a la luz del día',
      'Mesa compartida con vino, pan y fiambres',
      'Viñedo en Cafayate, Salta',
      'Manos con uvas recién cosechadas',
      'Corchos y cápsulas de las bodegas de la selección',
      'Barricas en la bodega',
      'Botellas argentinas sobre barra de madera',
      'Brindis en una mesa de restaurante con Malbec Domaine Bousquet',
    ],
  },
  franja: {
    frase: 'Elegido en la bodega, no en un catálogo',
    dato: '5 bodegas · 15 años de viñedos recorridos',
  },
  cifras: [
    { valor: '15 años', pie: 'recorriendo bodegas argentinas' },
    { valor: '5 bodegas', pie: 'Mendoza · Patagonia · La Rioja' },
    { valor: '27 etiquetas', pie: 'en la selección 2025' },
    { valor: 'Valencia', pie: 'base para España y Europa' },
  ],
  mapa: {
    eyebrow: 'Argentina ↔ Europa',
    title: 'Una ruta corta para un viaje largo.',
    intro:
      'Cada línea arranca en un viñedo visitado y termina en Valencia. Desde ahí el vino sale a restaurantes, distribuidores y tiendas de toda España y Europa.',
    aside: 'salida de bodega → Valencia',
    origin: 'ORIGEN → VALENCIA',
    base: 'BASE EUROPEA',
    distances: 'DISTANCIAS DE CÍRCULO MÁXIMO',
    projection: 'PROY. NATURAL EARTH · RETÍCULA 15°',
    ariaLabel: 'Mapa de Argentina y Europa con las rutas del vino hasta Valencia, España',
    // Plantilla, no función: el diccionario viaja entero a un Client
    // Component (el formulario) y las funciones no son serializables.
    regionAria: 'Mapa de Argentina con la región de {region} marcada',
  },
  regiones: {
    title: 'Argentina no es solo Mendoza.',
    intro:
      'Cuatro regiones, cuatro alturas, cuatro maneras de entender el tinto. Una por una, con su altura y su variedad.',
    items: [
      {
        nombre: 'Mendoza',
        dato: '900–1.500 m · Malbec',
        texto: 'Valle de Uco y Luján de Cuyo, al pie de los Andes. La región más conocida, y la que todavía da sorpresas.',
      },
      {
        nombre: 'Salta',
        dato: '1.700–3.000 m · Tannat',
        texto: 'Cafayate y los Valles Calchaquíes: entre los viñedos más altos del mundo. Altura, sol de desierto y tintos con tensión.',
      },
      {
        nombre: 'Patagonia',
        dato: 'Clima frío · Pinot Noir',
        texto: 'Río Negro y Neuquén. Viento, amplitud térmica y una identidad que todavía se está escribiendo.',
      },
      {
        nombre: 'La Rioja',
        dato: 'Viñas viejas · Torrontés',
        texto: 'Una de las regiones más antiguas del país: viñedos históricos y mucho por descubrir en Europa.',
      },
    ],
  },
  bodegas: {
    eyebrow: 'La selección 2025',
    title: 'Cinco bodegas, una selección.',
    intro:
      'Domaine Bousquet, Casa de Uco, Finca Los Maza, Familia Schroeder y Valle de la Puerta. Compra directa a bodega, precios de hostelería a pedido.',
    botellasTitulo: 'Las botellas, una por una',
    pie: 'precios de hostelería 2025 — a pedido',
    descripciones: {
      'domaine-bousquet': 'Siete etiquetas: Malbec Crianza y Reserva, Pinot Noir Reserva, Gran Malbec, Gran Chardonnay, espumante y Malbec dulce.',
      'casa-de-uco': 'El Salvaje orgánico, Vineyard Selection en Malbec y Petit Verdot, y el Winemaker’s Blend de guarda.',
      'finca-los-maza': 'Línea Mapa Roble y Reserva, M10 en Malbec y Torrontés, y el Oso Hormiguero con 91 puntos Suckling.',
      'familia-schroeder': 'La familia Saurus completa: clásicos, Select, Barrel Fermented en tres variedades y el Tardío de Pinot Noir.',
      'valle-de-la-puerta': 'Los dos clásicos riojanos de entrada: Malbec y Torrontés, la mejor relación precio-calidad de la carta.',
    } as Record<string, string>,
  },
  como: {
    eyebrow: 'Cómo trabajamos juntos',
    title: 'Cinco pasos, sin letra chica.',
    pasos: [
      { titulo: 'Nos contás', texto: 'Qué cocina tenés, qué carta manejás, en qué precios te movés.' },
      { titulo: 'Armamos la selección', texto: 'Una propuesta corta y concreta: tres a seis tintos que encajan.' },
      { titulo: 'Los probás', texto: 'Cata en tu local o en Valencia, con la información de cada bodega.' },
      { titulo: 'Traemos el pedido', texto: 'Compra directa a bodega, logística coordinada, precio claro.' },
      { titulo: 'Seguimos cerca', texto: 'Reposición, formación al equipo de sala y ajustes de carta.' },
    ],
  },
  restaurantes: {
    eyebrow: 'Para restaurantes',
    title: 'Una carta argentina que funciona en tu salón.',
    body: 'Trabajamos especialmente con restaurantes argentinos en España: desde un Malbec bien elegido hasta una sección completa. Cobertura en toda España, con presencia fuerte en Valencia y la Comunidad Valenciana.',
    aside: 'te llevamos las botellas para probar',
    cta: 'Ver propuesta para restaurantes',
  },
  club: {
    badge: 'Próximamente',
    nombre: 'Sin Escalas',
    subtitulo: 'The Tincho Wines Club',
    eyebrow: 'Valencia',
    title: 'Un pedacito de Argentina, en casa.',
    body: 'Un club alrededor del tinto argentino, con base en Valencia: selección rotativa, catas, presentaciones de bodegas y encuentros alrededor de la mesa. Para la comunidad argentina en España y para cualquiera con ganas de descubrirlo.',
    aside: 'anotate para la apertura',
    cta: 'Sumarme al club',
    fotoAlt: 'Botellas argentinas sobre una barra de madera',
  },
  martin: {
    eyebrow: 'Detrás de la marca',
    title: 'Martín Cabado fundó Tincho Wines en 2015.',
    body: 'Casi quince años dentro del vino argentino: bodegas, cosechas y regiones muy distintas entre sí. De esa experiencia salió la idea que sostiene la marca — comprar directo, seleccionar con criterio y acortar el camino hasta Europa.',
    meta: 'Base en Valencia · Trabajando entre Argentina y Europa',
    fotoAlt: 'Martín Cabado entre barricas, en una bodega argentina',
  },
  contacto: {
    eyebrow: 'Contacto',
    title: 'Hablemos de tinto.',
    intro: 'Restaurantes, distribuidores, tiendas o curiosos: contanos qué buscás y armamos una propuesta concreta.',
    whatsappNota: 'WhatsApp · Respuesta < 24 h',
    emailNota: 'Email',
    instagramNota: 'Instagram',
    nombre: 'Nombre y negocio',
    nombrePlaceholder: 'Ej. Ana · Parrilla Don Julio, Valencia',
    contacto: 'Email o teléfono',
    contactoPlaceholder: 'Por donde te resulte más cómodo',
    mensaje: 'Qué estás buscando',
    mensajePlaceholder: 'Un Malbec para la carta, una selección completa, precios…',
    submit: 'Enviar consulta',
    sending: 'Enviando…',
    aside: 'tres campos, nada más',
    thanks: 'Gracias.',
    thanksBody: 'Recibimos tu consulta y te respondemos en menos de 24 horas.',
    error: 'No se pudo enviar. Probá de nuevo o escribinos directamente por WhatsApp.',
  },
  footer: {
    tagline: 'Tinto argentino comprado directamente en bodega y traído a Europa con menos capas en el medio.',
    kicker: 'Argentina, directo a Europa',
    explorar: 'Explorar',
    contacto: 'Contacto',
    base: 'Valencia, España',
    rights: 'Todos los derechos reservados.',
    slogan: 'Vino argentino · Directo a Europa',
  },
  paginaRestaurantes: {
    eyebrow: 'Para restaurantes',
    title: 'Una carta argentina que funciona en tu salón.',
    subtitle: 'Toda España, con presencia fuerte en Valencia y la Comunidad Valenciana.',
    sectionEyebrow: 'Qué proponemos',
    sectionTitle: 'De una etiqueta a una sección entera.',
    p1: 'No todos los restaurantes necesitan lo mismo. Hay quien busca un Malbec que funcione por copa y quien quiere una sección argentina completa, con blancos, rosado y espumante. Armamos la selección según tu cocina, tus clientes y los precios con los que trabajás.',
    p2: 'Compramos directo a bodega, así que el precio que ves es el precio real, sin capas de intermediación. Y si el vino funciona, nos quedamos cerca: reposición, formación al equipo de sala y ajustes de carta cuando haga falta.',
    nota: 'Precios de hostelería 2025 a pedido — escribinos y te pasamos la lista completa.',
    metaTitle: 'Vino argentino para restaurantes en España',
    metaDescription:
      'Tincho Wines provee vino argentino auténtico a restaurantes de toda España, con presencia fuerte en Valencia y la Comunidad Valenciana. Compra directa a bodega, precios de hostelería a pedido.',
  },
  meta: {
    title: 'Tincho Wines | Vino argentino directo a Europa',
    description:
      'Tincho Wines selecciona en origen vinos de Mendoza, Patagonia y La Rioja y los acerca directamente a Europa. Compra directa a bodega para restaurantes, distribuidores y tiendas en España. Base en Valencia.',
  },
};

const en: typeof es = {
  nav: {
    ruta: 'The route',
    regiones: 'Regions',
    bodegas: 'Wineries',
    restaurantes: 'Restaurants',
    club: 'Club',
    contacto: 'Contact',
    cta: 'Get in touch',
    menu: 'Menu',
    close: 'Close',
    est: 'est. 2015',
  },
  hero: {
    eyebrow: 'Argentine wine · Direct to Europe',
    titleLine1: 'Argentina,',
    titleLine2: 'no stopovers.',
    kicker: 'From the vineyard to your table.',
    body: 'We select the wines at source, winery by winery, and bring them straight to Europe. We work with the people who make them, shorten the route, and build relationships that go well beyond the first order.',
    mono: ['Good wine. Fewer middlemen.', 'Better connections.'],
    ctaPrimary: 'Wine for restaurants',
    ctaSecondary: 'See the route',
    whatsappMensaje: 'Hi Martín, I’m looking for Argentine wine for my restaurant.',
    fotoVariedades: 'Malbec · Pinot Noir · Cabernet Franc',
  },
  carrusel: {
    frase: 'Ruta 40 · Cafayate · Valle de Uco · Patagonia',
    pie: 'Kilometres travelled, winery by winery',
    alts: [
      'A nighttime toast with Argentine Malbec',
      'A daytime toast with Argentine Malbec and grilled beef',
      'A shared table with wine, bread and charcuterie',
      'Vineyard in Cafayate, Salta',
      'Hands holding freshly harvested grapes',
      'Corks and capsules from the wineries in the selection',
      'Barrels in the cellar',
      'Argentine bottles on a wooden bar',
      'A toast at a restaurant table with Domaine Bousquet Malbec',
    ],
  },
  franja: {
    frase: 'Chosen at the winery, not from a catalogue',
    dato: '5 wineries · 15 years walking vineyards',
  },
  cifras: [
    { valor: '15 years', pie: 'visiting Argentine wineries' },
    { valor: '5 wineries', pie: 'Mendoza · Patagonia · La Rioja' },
    { valor: '27 labels', pie: 'in the 2025 selection' },
    { valor: 'Valencia', pie: 'base for Spain and Europe' },
  ],
  mapa: {
    eyebrow: 'Argentina ↔ Europe',
    title: 'A short route for a long journey.',
    intro:
      'Every line starts at a vineyard we have visited and ends in Valencia. From there the wine goes out to restaurants, distributors and shops across Spain and Europe.',
    aside: 'winery gate → Valencia',
    origin: 'ORIGIN → VALENCIA',
    base: 'EUROPEAN BASE',
    distances: 'GREAT-CIRCLE DISTANCES',
    projection: 'NATURAL EARTH PROJ. · 15° GRATICULE',
    ariaLabel: 'Map of Argentina and Europe showing the wine routes to Valencia, Spain',
    regionAria: 'Map of Argentina with the {region} region marked',
  },
  regiones: {
    title: 'Argentina is not only Mendoza.',
    intro: 'Four regions, four altitudes, four ways of understanding red wine. One by one, with their altitude and their grape.',
    items: [
      {
        nombre: 'Mendoza',
        dato: '900–1,500 m · Malbec',
        texto: 'Valle de Uco and Luján de Cuyo, at the foot of the Andes. The best-known region, and still the one that surprises.',
      },
      {
        nombre: 'Salta',
        dato: '1,700–3,000 m · Tannat',
        texto: 'Cafayate and the Calchaquí Valleys: among the highest vineyards in the world. Altitude, desert sun and reds with real tension.',
      },
      {
        nombre: 'Patagonia',
        dato: 'Cool climate · Pinot Noir',
        texto: 'Río Negro and Neuquén. Wind, wide temperature swings and an identity still being written.',
      },
      {
        nombre: 'La Rioja',
        dato: 'Old vines · Torrontés',
        texto: 'One of the oldest wine regions in the country: historic vineyards and a lot still to discover in Europe.',
      },
    ],
  },
  bodegas: {
    eyebrow: 'The 2025 selection',
    title: 'Five wineries, one selection.',
    intro:
      'Domaine Bousquet, Casa de Uco, Finca Los Maza, Familia Schroeder and Valle de la Puerta. Bought direct from the winery; trade prices on request.',
    botellasTitulo: 'The bottles, one by one',
    pie: '2025 trade prices — on request',
    descripciones: {
      'domaine-bousquet': 'Seven labels: Malbec Crianza and Reserva, Pinot Noir Reserva, Gran Malbec, Gran Chardonnay, sparkling and sweet Malbec.',
      'casa-de-uco': 'El Salvaje organic, Vineyard Selection in Malbec and Petit Verdot, and the age-worthy Winemaker’s Blend.',
      'finca-los-maza': 'Línea Mapa Roble and Reserva, M10 in Malbec and Torrontés, and Oso Hormiguero with 91 Suckling points.',
      'familia-schroeder': 'The full Saurus family: classics, Select, Barrel Fermented in three varieties and the Pinot Noir Tardío.',
      'valle-de-la-puerta': 'The two Riojan entry classics: Malbec and Torrontés, the best value on the list.',
    } as Record<string, string>,
  },
  como: {
    eyebrow: 'How we work together',
    title: 'Five steps, no small print.',
    pasos: [
      { titulo: 'You tell us', texto: 'What you cook, what your list looks like, what price points you work with.' },
      { titulo: 'We build the selection', texto: 'A short, concrete proposal: three to six reds that actually fit.' },
      { titulo: 'You taste them', texto: 'A tasting at your place or in Valencia, with the background on each winery.' },
      { titulo: 'We bring the order', texto: 'Bought direct from the winery, logistics coordinated, price clear.' },
      { titulo: 'We stay close', texto: 'Restocking, floor-team training and adjustments to the list.' },
    ],
  },
  restaurantes: {
    eyebrow: 'For restaurants',
    title: 'An Argentine list that works in your dining room.',
    body: 'We work especially closely with Argentine restaurants across Spain: from one well-chosen Malbec to a full section. Coverage across Spain, with a strong presence in Valencia and the Comunidad Valenciana.',
    aside: 'we bring the bottles over for you to taste',
    cta: 'See the restaurant offer',
  },
  club: {
    badge: 'Coming soon',
    nombre: 'Sin Escalas',
    subtitulo: 'The Tincho Wines Club',
    eyebrow: 'Valencia',
    title: 'A little piece of Argentina, at home.',
    body: 'A club built around Argentine red wine, based in Valencia: a rotating selection, tastings, winery presentations and gatherings around the table. For the Argentine community in Spain, and for anyone curious enough to discover it.',
    aside: 'sign up for the opening',
    cta: 'Join the club',
    fotoAlt: 'Argentine bottles on a wooden bar',
  },
  martin: {
    eyebrow: 'Behind the label',
    title: 'Martín Cabado founded Tincho Wines in 2015.',
    body: 'Almost fifteen years inside Argentine wine: wineries, harvests and regions that are nothing alike. That experience produced the idea the company runs on — buy direct, select with judgement, and shorten the road to Europe.',
    meta: 'Based in Valencia · Working between Argentina and Europe',
    fotoAlt: 'Martín Cabado among barrels, at an Argentine winery',
  },
  contacto: {
    eyebrow: 'Contact',
    title: 'Let’s talk red.',
    intro: 'Restaurants, distributors, shops or the simply curious: tell us what you are after and we will put together a concrete proposal.',
    whatsappNota: 'WhatsApp · Reply < 24 h',
    emailNota: 'Email',
    instagramNota: 'Instagram',
    nombre: 'Name and business',
    nombrePlaceholder: 'E.g. Ana · Parrilla Don Julio, Valencia',
    contacto: 'Email or phone',
    contactoPlaceholder: 'Whichever suits you best',
    mensaje: 'What you are looking for',
    mensajePlaceholder: 'A Malbec for the list, a full selection, prices…',
    submit: 'Send enquiry',
    sending: 'Sending…',
    aside: 'three fields, that’s it',
    thanks: 'Thank you.',
    thanksBody: 'We have your enquiry and will reply within 24 hours.',
    error: 'Could not send. Please try again or message us directly on WhatsApp.',
  },
  footer: {
    tagline: 'Argentine red wine bought straight from the winery and brought to Europe with fewer layers in between.',
    kicker: 'Argentina, direct to Europe',
    explorar: 'Explore',
    contacto: 'Contact',
    base: 'Valencia, Spain',
    rights: 'All rights reserved.',
    slogan: 'Argentine wine · Direct to Europe',
  },
  paginaRestaurantes: {
    eyebrow: 'For restaurants',
    title: 'An Argentine list that works in your dining room.',
    subtitle: 'All of Spain, with a strong presence in Valencia and the Comunidad Valenciana.',
    sectionEyebrow: 'What we offer',
    sectionTitle: 'From a single label to a whole section.',
    p1: 'Not every restaurant needs the same thing. Some want one Malbec that works by the glass; others want a full Argentine section, with whites, rosé and sparkling. We build the selection around your kitchen, your guests and the prices you actually work with.',
    p2: 'We buy direct from the winery, so the price you see is the real price, without layers of intermediation. And if the wine works, we stay close: restocking, training for your floor team, and adjustments to the list whenever they are needed.',
    nota: '2025 trade prices on request — get in touch and we will send the full list.',
    metaTitle: 'Argentine wine for restaurants in Spain',
    metaDescription:
      'Tincho Wines supplies authentic Argentine wine to restaurants across Spain, with a strong presence in Valencia and the Comunidad Valenciana. Bought direct from the winery, trade prices on request.',
  },
  meta: {
    title: 'Tincho Wines | Argentine wine direct to Europe',
    description:
      'Tincho Wines selects wines at source in Mendoza, Patagonia and La Rioja and brings them straight to Europe. Bought direct from the winery for restaurants, distributors and shops in Spain. Based in Valencia.',
  },
};

export type Dictionary = typeof es;

const DICTIONARIES: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
