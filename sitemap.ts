import { ButtonLink } from '@/components/button-link'
import { OfferCard, PriceCard, SimpleCard } from '@/components/cards'
import { ContactForm } from '@/components/contact-form'
import { FaqList } from '@/components/faq-list'
import { SectionHeading } from '@/components/section-heading'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { faqs, pillars, processSteps, values } from '@/lib/content'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">KI-Schulung, Telefonagent und digitale Arbeitshelfer</span>
              <h1>KI verstehen, gezielt einsetzen und den Alltag spürbar entlasten.</h1>
              <p className="lead">
                Dialekta unterstützt dich mit praxisnahen KI-Schulungen, KI-Telefonlösungen und
                digitalen Arbeitshelfern, die wiederkehrende Aufgaben einfacher machen.
              </p>
              <div className="hero-actions">
                <ButtonLink href="/kontakt" variant="light">
                  Kostenloses Analysegespräch sichern
                </ButtonLink>
                <ButtonLink href="#angebote" variant="ghost">
                  Angebote ansehen
                </ButtonLink>
              </div>
              <ul className="quick-points">
                <li>Verständlich erklärt</li>
                <li>Direkt nutzbar</li>
                <li>Für Teams, Vereine und KMU</li>
              </ul>
            </div>
            <div className="hero-panel" aria-label="Dialekta Angebot">
              <div className="phone-card">
                <strong>Verstehen. Struktur schaffen. Entlastung umsetzen.</strong>
              </div>
              <div className="stats-strip">
                <div className="stat">
                  24/7 <span>Telefonagent</span>
                </div>
                <div className="stat">
                  30+ <span>Sprachen</span>
                </div>
                <div className="stat">
                  Live <span>Schulungen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="angebote">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Angebote"
              title="Womit möchtest du starten?"
              text="Wähle den Bereich, der dir aktuell am meisten hilft. Die Angebote lassen sich einzeln nutzen oder sinnvoll kombinieren."
            />
            <div className="grid three">
              {pillars.map((pillar, index) => (
                <OfferCard key={pillar.href} {...pillar} featured={index === 1} />
              ))}
            </div>
          </div>
        </section>

        <section className="section surface">
          <div className="container split">
            <div>
              <span className="eyebrow dark">Über Dialekta</span>
              <h2>KI soll entlasten - nicht komplizierter machen.</h2>
              <p className="section-lead">
                Dialekta wurde von Josias Bechtel und Martin Wichmann gegründet. Unser Ziel ist es,
                KI so einzusetzen, dass sie Menschen im Alltag wirklich unterstützt: verständlich,
                pragmatisch und mit klarem Nutzen.
              </p>
              <div className="section-actions">
                <ButtonLink href="/ueber-uns">Mehr über uns</ButtonLink>
              </div>
            </div>
            <div className="grid two">
              {values.map((value) => (
                <SimpleCard key={value.title} title={value.title} text={value.text} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Ablauf"
              title="So einfach startest du."
              text="Ein klarer Startpunkt, eine passende Lösung und eine Umsetzung, die verständlich bleibt."
            />
            <div className="grid three steps">
              {processSteps.map((step) => (
                <article className="card step" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container">
            <SectionHeading
              center
              title="Bereit für weniger Aufwand im Alltag?"
              text="Lass uns in einem kostenlosen Analysegespräch herausfinden, welche KI-Lösung für dich aktuell am meisten Sinn macht."
            />
            <div className="section-actions" style={{ justifyContent: 'center' }}>
              <ButtonLink href="/kontakt" variant="light">
                Kostenloses Analysegespräch sichern
              </ButtonLink>
              <ButtonLink href="mailto:info@dialekta.ch" variant="ghost">
                Nachricht schreiben
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="section surface">
          <div className="container">
            <SectionHeading center eyebrow="FAQ" title="Häufige Fragen" />
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="section" id="kontakt">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow dark">Analysegespräch</span>
              <h2>Finde heraus, was dich am meisten entlastet.</h2>
              <p className="section-lead">
                Gemeinsam klären wir, ob eine KI-Schulung, ein KI-Telefonagent oder ein digitaler
                Helfer aktuell den grössten Nutzen bringt.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
