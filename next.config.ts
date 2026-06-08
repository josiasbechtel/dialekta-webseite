import type { Metadata } from 'next'
import { ButtonLink } from '@/components/button-link'
import { PriceCard, SimpleCard } from '@/components/cards'
import { PageShell } from '@/components/page-shell'
import { SectionHeading } from '@/components/section-heading'
import { phoneBenefits, phoneUseCases } from '@/lib/content'

export const metadata: Metadata = {
  title: 'KI-Telefonagent',
  description: 'KI-Telefonagent für 24/7 Erreichbarkeit, Schweizerdeutsch und mehrsprachige Anrufannahme.',
}

export default function TelefonagentPage() {
  return (
    <PageShell
      eyebrow="KI-Telefonagent"
      title="Nie wieder einen Anruf verpassen!"
      text="Dein KI-Assistent übernimmt Telefonate rund um die Uhr, versteht Schweizerdeutsch und spricht über 30 Sprachen."
      secondaryCta="Demoagent anrufen"
    >
      <section className="section" id="details">
        <div className="container">
          <SectionHeading center eyebrow="Vorteile" title="Vorteile auf einen Blick" />
          <div className="grid four">
            {phoneBenefits.map((benefit, index) => (
              <SimpleCard key={benefit.title} {...benefit} featured={index === 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHeading
            center
            title="Einsatzbereiche"
            text="Massgeschneidert für deine Branche - ohne Zusatzaufwand."
          />
          <div className="grid four">
            {phoneUseCases.map(([title, text]) => (
              <SimpleCard key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeading center eyebrow="Preise" title="Einfach starten, laufend optimieren" />
          <div className="grid two">
            <PriceCard title="Monatlich" price="ab 199 CHF" text="Laufende Optimierung, Betreuung und Support inklusive." featured />
            <PriceCard title="Einmalige Einrichtung" price="individuell" text="Einrichtung passend zu deinen Anforderungen - ohne zusätzliche Hardware." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card teal">
            <h2>Rufe den Demoagenten an.</h2>
            <p>Lass dich von der natürlichen Stimme überraschen und teste den Telefonagenten direkt.</p>
            <p className="price-value">+41 61 539 19 29</p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Agent testen"
              title="Natürlich, erreichbar und sofort verständlich."
              text="Der Demoanruf zeigt direkt, wie ein KI-Telefonagent Gespräche annimmt, Anliegen erkennt und Informationen strukturiert."
            />
            <ButtonLink href="/kontakt">Kostenloses Analysegespräch sichern</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
