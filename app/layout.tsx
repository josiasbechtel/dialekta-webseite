import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import './refinements.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dialekta.ch'),
  title: {
    default: 'Dialekta | KI nutzen. Alltag entlasten.',
    template: '%s | Dialekta',
  },
  description:
    'Dialekta macht KI praxisnah nutzbar - mit Schulungen, Telefonagenten und digitalen Helfern.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  )
}
