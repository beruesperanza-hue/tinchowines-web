# Web — Tincho Wines

Sitio de **Tincho Wines** (Martín Cabado): vino argentino directo a Europa.
Next.js 15 (App Router) + Tailwind, sin base de datos. El formulario de
contacto envía por **Resend** (Railway bloquea SMTP saliente).

Implementa el **rediseño "Modernist"** que está en `../rediseno-ref/`
(paquete exportado del canvas de Claude Design, con su propio `LEEME.md`).
Esa carpeta es la referencia de diseño: si hay que rehacer o extender una
sección, mirar ahí primero.

## Desarrollo

```bash
npm run dev
```

Puerto 3010, o desde el workspace: `preview_start({ name: "tinchowines-web" })`.

⚠️ **No correr `npm run build` con el dev server levantado**: comparten la
carpeta `.next` y el build le pisa los chunks al dev (da 500 en todas las
rutas). Si pasa: parar el server, `rm -rf .next`, y volver a levantarlo.

El formulario funciona sin configurar nada en local: si no hay
`RESEND_API_KEY`, la API loguea el envío por consola en vez de fallar.

## Sistema visual

Del rediseño (tokens en `tailwind.config.ts`, utilidades en `app/globals.css`):

- **Fondo** `#F4F2EB` (`paper`) · **tinta** `#14100F` (`ink`) · **gris tierra**
  `#D6D1C3` (`earth`) · **acento oliva** `#C7C64B` (`olive`, **sólo sobre
  fondos oscuros**) · **gris de etiqueta** `#7A6157` (`label`).
- **Titulares** Instrument Serif · **etiquetas y botones** Space Mono en
  mayúsculas (clase `.label`) · **cuerpo** Archivo.
- Reglas de 2 px, radio 0, todo alineado a la izquierda.

## Bilingüe (ES / EN)

- **Todo el copy vive en `lib/dictionaries.ts`**. Los componentes no tienen
  texto hardcodeado. Para cambiar un texto del sitio se edita ese archivo y
  nada más.
- Rutas `/es/...` y `/en/...`; `/` redirige a `/es` (el negocio vende en
  España y el copy original es en español).
- El layout raíz vive en `app/[lang]/layout.tsx`, no en `app/`: es la única
  forma de setear `<html lang>` con el idioma real.
- El diccionario viaja entero a un Client Component (el formulario), así que
  **no puede contener funciones** — usar plantillas tipo `'… {region} …'` y
  hacer `.replace()` en el componente.

## Mapas

`components/maps/` — geografía real (Natural Earth vía `world-atlas` +
`d3-geo`), **renderizada en el servidor**: el SVG sale ya dibujado en el HTML.
Sin JS de mapas en el cliente y sin fetch a ningún CDN (el rediseño original
sí cargaba d3 y el atlas desde unpkg/jsdelivr en runtime; acá son
dependencias npm resueltas en build).

- `WorldRouteMap` — planisferio Argentina↔Europa. Dibuja sólo Argentina y
  Europa, con retícula de 15°, rutas de círculo máximo y un índice lateral con
  las distancias reales calculadas (no escritas a mano).
- `RegionMap` — mini mapa de Argentina con una región marcada.

Nunca dibujar contornos de países a mano: siempre desde el atlas.

## Catálogo

`lib/catalogo.ts` tiene las **5 bodegas y 27 referencias reales** del catálogo
2025, extraídas de los PDF de `../rediseno-ref/uploads/`. No agregar entradas
que no estén en esos PDF.

Los **precios de hostelería están en el archivo pero no se renderizan**: la
decisión del rediseño es mostrar "precios a pedido". Quedan cargados para
cuando haya un área B2B o una ficha privada.

## Qué es real y qué no

- **Real y verificado**: Martín Cabado como fundador, 2015, base en Valencia,
  Instagram `@tinchowines`, las 5 bodegas, las 27 etiquetas, las distancias
  del mapa (calculadas), los 91 puntos Suckling del Oso Hormiguero.
- **Cambiado respecto del rediseño, a propósito** — el rediseño traía cifras
  que no se pueden sostener con el catálogo real:
  - Decía "cuatro regiones argentinas" en el hero y "4 regiones" en las
    cifras. El catálogo tiene bodegas en **tres**: Mendoza, Patagonia y
    La Rioja. **No hay ninguna bodega de Salta.** Se reescribió el hero y se
    cambiaron las cifras por datos verificables (5 bodegas · 27 etiquetas).
  - Se quitaron "10.400 km" y "< 24 h" del bloque de cifras (el primero es
    aproximado —las distancias reales van de 9.800 a 11.100 km— y el segundo
    es una promesa de servicio sin respaldo).
  - **Sigue en pie**: la sección Regiones muestra 4 tarjetas incluyendo Salta.
    Se dejó porque la sección habla de las regiones de Argentina, no del
    porfolio ("Argentina no es solo Mendoza"). **Decidir si se quita** o si se
    aclara que todavía no hay bodega de Salta en la selección.
  - "Respuesta < 24 h" sigue junto al WhatsApp: es un compromiso de servicio,
    confirmar que se puede cumplir.
- **Placeholders que quedan**: 4 de las 12 botellas destacadas (El Salvaje
  Orgánico, Línea Mapa Reserva, Oso Hormiguero, Malbec Clásico VDLP) siguen
  siendo casillero con el nombre — sin packshot todavía. Las 5 bodegas ya
  tienen logo real. La foto de Martín en "Detrás de la marca" ya es real
  (`martin-bodega.jpg`, sumada 2026-08-31 — Martín entre barricas). El número
  de WhatsApp es real (`+34 699 34 18 61`); el email de contacto
  (`hello@tinchowines.com`) es el real usado también en el CRM.
- **Ojo con `El Salvaje Orgánico`**: el catálogo (`lib/catalogo.ts`) lo tiene
  cargado como Malbec, pero la foto de producto real que llegó después
  (2026-08-31) tiene la etiqueta "EL SALVAJE — CABERNET FRANC — Orgánico".
  No se cambió la variedad en el catálogo ni se usó esa foto todavía —
  confirmar con Martín si el dato del PDF original está mal o si son dos
  vinos "El Salvaje" distintos antes de tocarlo.

## Fotografía

`public/images/` — las fotos reales aportadas por Martín (`brindis-dia`,
`brindis-noche`, `foto-bodega-1/2/3`, `mesa-copas`, `mesa-fiambres`,
`brindis-restaurante` — brindis en mesa de restaurante con Malbec Domaine
Bousquet, sumada 2026-08-31) más algunas de Unsplash que quedaron del sitio
anterior (`salta-cafayate`, `harvest-hands`, `barrels-cellar`,
`restaurant-table`, etc.).

`public/images/botellas/` — packshots reales de producto (fondo blanco/gris
del dossier o mandados por Martín), presentados con `mix-blend-mode:multiply`
para simular recorte transparente. Cuando el original traía un badge de
puntaje (ej. "90 PUNTOS", "x6") se pintó de blanco esa zona antes de
guardarlo, porque el blend-mode ya trata el blanco como transparente.

`public/images/logos/` — logos reales de las 5 bodegas (el de Valle de la
Puerta se sumó 2026-08-31).

Las de Unsplash de "Patagonia" y "La Rioja" **no son de Argentina** y ya no se
usan en ninguna sección; `salta-cafayate.jpg` (sí es de Cafayate) y
`harvest-hands.jpg` siguen en el carrusel.

## Pendientes antes de publicar

1. **Número de WhatsApp real** — hoy `wa.me/34600000000` en `lib/contacto.ts`.
2. **Confirmar el email** `hello@tinchowines.com`.
3. **Logo definitivo** — hay un wordmark provisorio aislado en
   `components/Logo.tsx`; reemplazar ese componente y listo.
4. **Foto de Martín en bodega** (casillero en `components/sections/Martin.tsx`).
5. **Packshots de botellas y logos de bodega en alta** — pedírselos a cada
   bodega (el dossier tiene URLs de terceros que no conviene hotlinkear).
6. **Decidir qué hacer con Salta** (ver arriba).
7. Configurar `RESEND_API_KEY` y verificar el dominio remitente en Resend.
8. Sumar structured data (Organization / LocalBusiness) — falta, y pesa para
   el foco GEO/IA.
9. Optimizar los PNG grandes: `brindis-dia` y `brindis-noche` pesan ~3,3 MB
   cada uno. `next/image` los sirve en AVIF/WebP, pero conviene bajarlos de
   origen.
10. Decidir dominio y desplegar (Railway, como el resto del workspace).
