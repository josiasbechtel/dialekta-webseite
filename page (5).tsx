import type { Metadata } from 'next'
import { ButtonLink } from '@/components/button-link'
import { PriceCard, SimpleCard } from '@/components/cards'
import { PageShell } from '@/components/page-shell'
import { SectionHeading } from '@/components/section-heading'
import { automationExamples } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Digitale Arbeitshelfer',
  description: 'Digitale Helfer für wiederkehrende Aufgaben, Anfrageverwaltung und einfache Prozesse.',
}

export default function AutomatisierungPage() {
  return (
    <PageShell
      eyebrow="Digitale Arbeitshelfer"
      title="Digitale Helfer, die wiederkehrende Aufgaben einfacher machen."
      text="Für Betriebe, Teams und Vereine, die mit Anfragen, Listen, Kursen, Freigaben oder Übersichten weniger Aufwand haben möchten."
      primaryCta="Digitale Lösung im Analysegespräch besprechen"
      secondaryCta="Beispiele ansehen"
    >
      <section className="section" id="details">
        <div className="container split">
          <SectionHeading
            eyebrow="Nutzen"
            title="Weniger Chaos. Mehr Übersicht."
            text="Ein digitaler Helfer bringt Ordnung in Aufgaben, die heute zu viel Zeit kosten oder schnell unübersichtlich werden."
          />
          <div className="grid three">
            <SimpleCard title="Klarer Prozess" text="Eine Aufgabe wird sauber abgebildet und für alle Beteiligten einfacher nutzbar." />
            <SimpleCard title="Einfache Bedienung" text="Die Lösung bleibt schlank und verständlich." />
            <SimpleCard title="Schneller Start" text="Eine erste Version kann klein starten und später erweitert werden." />
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeading center eyebrow="Beispiele" title="Typische digitale Arbeitshelfer" />
          <div className="grid three">
            {automationExamples.map(([title, text]) => (
              <SimpleCard key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading center eyebrow="Preise" title="Klein starten, sinnvoll erweitern" />
          <div className="grid three">
            <PriceCard title="Digitale Starter-Lösung" price="ab 1'500 CHF" text="Für eine klar abgegrenzte Aufgabe mit einfacher Oberfläche." featured />
            <PriceCard title="Individuelle digitale Lösung" price="nach Aufwand" text="Für erweiterte Funktionen, Rollen, Übersichten oder Anbindungen." />
            <PriceCard title="Betreuung & Erweiterung" price="optional monatlich" text="Für laufende Anpassungen, Support und Weiterentwicklung." />
          </div>
          <div className="section-actions" style={{ justifyContent: 'center' }}>
            <ButtonLink href="/kontakt">Digitale Lösung besprechen</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
