import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import './refinements.css'
import './final-touches.css'
import './hero-reference.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dialekta.ch'),
  title: {
    default: 'Dialekta | KI nutzen. Alltag entlasten.',
    template: '%s | Dialekta',
  },
  description:
    'Dialekta macht KI praxisnah nutzbar - mit Schulungen, Telefonagenten und digitalen Helfern.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  )
}
