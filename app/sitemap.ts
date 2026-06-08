import type { MetadataRoute } from 'next'

const routes = ['', '/schulung', '/ki-telefonagent', '/automatisierung', '/ueber-uns', '/kontakt', '/faq', '/impressum', '/datenschutz', '/agb']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://dialekta.ch${route}`, lastModified: new Date('2026-06-08') }))
}
