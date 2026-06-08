import type { MetadataRoute } from 'next'

const routes = [
  '',
  '/schulung',
  '/automatisierung',
  '/ki-telefonagent',
  '/ki-check',
  '/ueber-uns',
  '/kontakt',
  '/faq',
  '/impressum',
  '/datenschutz',
  '/agb',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://dialekta.ch${route}`,
    lastModified: new Date('2026-06-08'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
