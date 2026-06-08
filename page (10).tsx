import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'AGB',
}

export default function AgbPage() {
  return (
    <PageShell eyebrow="Rechtliches" title="AGB" text="Allgemeine Geschäftsbedingungen von Dialekta.">
      <section className="section" id="details">
        <div className="container legal-content card">
          <h2>Allgemeine Geschäftsbedingungen</h2>
          <p>
            Diese Seite dient als strukturierter Platzhalter für die finalen AGB der Dialekta GmbH.
            Die rechtlich geprüfte Fassung sollte vor Veröffentlichung ergänzt werden.
          </p>
          <h3>Leistungen</h3>
          <p>
            Dialekta erbringt Leistungen in den Bereichen KI-Schulung, KI-Telefonagent und digitale
            Arbeitshelfer gemäss individueller Vereinbarung.
          </p>
          <h3>Preise und Abrechnung</h3>
          <p>
            Preise richten sich nach dem vereinbarten Angebot. Einmalige Einrichtungskosten,
            monatliche Betreuung und individuelle Projektleistungen werden transparent ausgewiesen.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
