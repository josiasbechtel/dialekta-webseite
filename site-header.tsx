import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { PageShell } from '@/components/page-shell'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kostenloses Analysegespräch mit Dialekta sichern.',
}

export default function KontaktPage() {
  return (
    <PageShell
      eyebrow="Analysegespräch"
      title="Finde heraus, was dich am meisten entlastet."
      text="Sichere dir ein kostenloses Analysegespräch. Gemeinsam finden wir heraus, ob eine KI-Schulung, ein KI-Telefonagent oder ein digitaler Helfer aktuell den grössten Nutzen bringt."
    >
      <section className="section" id="details">
        <div className="container contact-grid">
          <div>
            <SectionHeading
              eyebrow="Kontakt"
              title="Schreib uns kurz, wo du stehst."
              text="Eine grobe Idee oder ein konkretes Problem reicht für den Start. Wir melden uns schnellstmöglich bei dir."
            />
            <div className="card teal">
              <h3>Direkt testen</h3>
              <p>Demoagent: +41 61 539 19 29</p>
              <p>E-Mail: info@dialekta.ch</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  )
}
