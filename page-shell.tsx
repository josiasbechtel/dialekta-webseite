import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dialekta.ch'),
  title: {
    default: 'Dialekta | KI verstehen, einsetzen und entlasten',
    template: '%s | Dialekta',
  },
  description:
    'Dialekta unterstützt mit KI-Schulungen, KI-Telefonagenten und digitalen Arbeitshelfern für KMU, Teams, Vereine und Selbstständige.',
  openGraph: {
    title: 'Dialekta',
    description:
      'Praxisnahe KI-Schulungen, Telefonagenten und digitale Arbeitshelfer für spürbare Entlastung im Alltag.',
    url: 'https://dialekta.ch',
    siteName: 'Dialekta',
    locale: 'de_CH',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  )
}
