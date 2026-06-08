import type { Metadata } from 'next'
import { ButtonLink } from '@/components/button-link'
import { SimpleCard } from '@/components/cards'
import { PageShell } from '@/components/page-shell'
import { SectionHeading } from '@/components/section-heading'
import { processSteps, values } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Dialekta macht KI verständlich, pragmatisch und nützlich für Alltag, Teams und KMU.',
}

export default function UeberUnsPage() {
  return (
    <PageShell
      eyebrow="Über Dialekta"
      title="KI soll entlasten - nicht komplizierter machen."
      text="Dialekta wurde von Josias Bechtel und Martin Wichmann gegründet. Wir setzen KI so ein, dass sie Menschen im Alltag wirklich unterstützt."
    >
      <section className="section" id="details">
        <div className="container split">
          <SectionHeading
            eyebrow="Arbeitsweise"
            title="Persönlich, verständlich und mit klarem Nutzen."
            text="Wir starten nicht mit Buzzwords, sondern mit konkreten Aufgaben: Wo entsteht Aufwand? Was lässt sich erklären, vereinfachen oder sinnvoll automatisieren?"
          />
          <div className="grid two">
            {values.map((value) => (
              <SimpleCard key={value.title} title={value.title} text={value.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeading center eyebrow="Ablauf" title="So arbeiten wir zusammen." />
          <div className="grid three steps">
            {processSteps.map((step) => (
              <article className="card step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="section-actions" style={{ justifyContent: 'center' }}>
            <ButtonLink href="/kontakt">Kostenloses Analysegespräch sichern</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
