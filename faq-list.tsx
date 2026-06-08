import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Impressum',
}

export default function ImpressumPage() {
  return (
    <PageShell eyebrow="Rechtliches" title="Impressum" text="Angaben zur Dialekta GmbH.">
      <section className="section" id="details">
        <div className="container legal-content card">
          <h2>Dialekta GmbH</h2>
          <p>CHE-338.544.623</p>
          <p>Schweiz</p>
          <p>E-Mail: info@dialekta.ch</p>
          <p>Telefon Demoagent: +41 61 539 19 29</p>
        </div>
      </section>
    </PageShell>
  )
}
