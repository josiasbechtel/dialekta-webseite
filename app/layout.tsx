import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dialekta.ch'),
  title: 'Dialekta | KI verstehen, einsetzen und entlasten',
  description:
    'Dialekta unterstützt mit KI-Schulungen, KI-Telefonagenten und digitalen Arbeitshelfern für KMU, Teams, Vereine und Selbstständige.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  )
}
