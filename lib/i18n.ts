export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
// El negocio vende en España y el copy original está en español.
export const DEFAULT_LOCALE: Locale = 'es';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
