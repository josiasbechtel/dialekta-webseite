import type { Metadata } from 'next'
import { ButtonLink } from '@/components/button-link'
import { PriceCard, SimpleCard } from '@/components/cards'
import { PageShell } from '@/components/page-shell'
import { SectionHeading } from '@/components/section-heading'
import { trainingModules } from '@/lib/content'

export const metadata: Metadata = {
  title: 'KI-Schulung',
  description: 'Live-Schulungen für KI-Einsteiger, Teams, Vereine und Unternehmen.',
}

export default function SchulungPage() {
  return (
    <PageShell
      eyebrow="KI-Schulung"
      title="KI ist überall. Aber was bringt sie dir wirklich?"
      text="Unsere Live-Schulung zeigt dir verständlich, wie du KI sicher und sinnvoll nutzt - ganz ohne technisches Vorwissen."
      secondaryCta="Module ansehen"
    >
      <section className="section" id="details">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Einstieg"
              title="Von der Neugier zur Anwendung."
              text="Du bekommst einen klaren Einstieg in KI, lernst die wichtigsten Tools kennen und siehst direkt, wie du sie für Texte, Bilder, Organisation, Planung und wiederkehrende Aufgaben nutzen kannst."
            />
          </div>
          <div className="grid three">
            <SimpleCard title="Verstehen" text="Du verstehst, was KI ist, was sie kann und wo ihre Grenzen liegen." />
            <SimpleCard title="Ausprobieren" text="Du testest einfache Anwendungen für Text, Bild, Recherche, Planung und Organisation." />
            <SimpleCard title="Sicher nutzen" text="Datenschutz, Faktencheck, Urheberrecht und sensible Daten werden verständlich eingeordnet." />
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeading
            center
            eyebrow="KI-Ready"
            title="Von der Neugier zur Anwendung."
            text="Ein kompakter Live-Workshop für alle, die KI nicht nur spannend finden, sondern endlich praktisch nutzen möchten."
          />
          <div className="grid three">
            {[
              'KI einfach verstehen',
              'Die wichtigsten KI-Tools einordnen',
              'Text, Bild und Sound ausprobieren',
              'Bessere Prompts schreiben',
              'Sicherer Umgang mit KI',
              'Transfer in den Alltag',
            ].map((title) => (
              <SimpleCard key={title} title={title} text="Praxisnah, verständlich und mit konkretem Nutzen für deinen Alltag." />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading center eyebrow="Module" title="Schulungsmodule" />
          <div className="grid two">
            {trainingModules.map((module) => (
              <article className="card" key={module.title}>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
                <p><strong>Geeignet für:</strong> {module.suited}</p>
                <ul className="check-list">
                  {module.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeading center eyebrow="Preise" title="Transparente Einstiege" />
          <div className="grid three">
            <PriceCard title="KI-Ready Einzelperson" price="290 CHF" text="Für Einsteigerinnen und Einsteiger, die KI verstehen und erste Anwendungen sicher nutzen möchten." />
            <PriceCard title="KI-Ready Gruppe" price="890 CHF" text="Für Teams, Vereine oder kleine Gruppen, die gemeinsam starten möchten." featured />
            <PriceCard title="Individuelle Firmenschulung" price="Individuell" text="Auf dein Unternehmen, dein Team und typische Aufgaben abgestimmt." />
          </div>
          <div className="section-actions" style={{ justifyContent: 'center' }}>
            <ButtonLink href="/kontakt">Analysegespräch zur Schulung sichern</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
