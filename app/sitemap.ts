import type { MetadataRoute } from 'next';
import { LOCALES } from '@/lib/i18n';

const SITE_URL = 'https://tinchowines.com';
const PATHS = ['', '/restaurantes'];

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((lang) =>
    PATHS.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path}`,
          es: `${SITE_URL}/es${path}`,
        },
      },
    }))
  );
}
