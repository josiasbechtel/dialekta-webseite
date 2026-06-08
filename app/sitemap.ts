import type { MetadataRoute } from 'next'

const routes = ['', '/ki-schulung', '/ki-telefonagent', '/digitale-arbeitshelfer', '/analysegespraech', '/ueber-uns', '/kontakt', '/schulung', '/automatisierung', '/impressum', '/datenschutz', '/agb']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://dialekta.ch${route}`, lastModified: new Date('2026-06-08') }))
}
