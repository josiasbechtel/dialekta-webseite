import type { Metadata } from 'next'
import { ButtonLink } from '@/components/button-link'
import { SimpleCard } from '@/components/cards'
import { PageShell } from '@/components/page-shell'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'KI-Check',
  description: 'Kurzer KI-Check als Einstieg in die passende Dialekta-Lösung.',
}

export default function KiCheckPage() {
  return (
    <PageShell
      eyebrow="KI-Check"
      title="Wo kann KI dich am schnellsten entlasten?"
      text="Der KI-Check ist der pragmatische Einstieg, wenn du noch nicht sicher bist, ob Schulung, Telefonagent oder digitaler Helfer am besten passt."
    >
      <section className="section" id="details">
        <div className="container">
          <SectionHeading center title="Drei Fragen für einen klaren Start" />
          <div className="grid three">
            <SimpleCard title="Was kostet Zeit?" text="Wir sammeln wiederkehrende Aufgaben, Unterbrüche und manuelle Arbeit." />
            <SimpleCard title="Was braucht Sicherheit?" text="Wir prüfen, wo Wissen, Regeln oder Datenschutz zuerst geklärt werden sollten." />
            <SimpleCard title="Was kann klein starten?" text="Wir definieren den sinnvollsten ersten Schritt mit überschaubarem Aufwand." />
          </div>
          <div className="section-actions" style={{ justifyContent: 'center' }}>
            <ButtonLink href="/kontakt">KI-Check anfragen</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
