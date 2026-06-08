import { PageFrame } from '@/components/site-chrome'
import { Hero } from '@/components/ui'
import { phoneNumber } from '@/lib/site'

export default function AnalysePage() {
  return (
    <PageFrame pageClass="page-analysegespraech">
      <Hero visual="analysis" image="/assets/img/hero-analysegespraech-v2.png" title={<>Finde deine<br />passende KI-Lösung.</>} lead="Im kostenlosen Analysegespräch finden wir gemeinsam heraus, welche KI-Lösung dir aktuell am meisten Entlastung bringt." actions={[{ href: '#kontakt', label: 'Analysegespräch auswählen' }]} />
      <section className="section section-dark" id="kontakt"><div className="container form-wrap"><div className="contact-box"><h2>Analysegespräch auswählen</h2><p>Du kannst dein Interesse direkt auswählen und eine Nachricht ergänzen.</p><a className="phone-link" href="tel:+41615391929">{phoneNumber}</a></div><form action="mailto:info@dialekta.ch" className="form-card" method="post" encType="text/plain"><div className="form-grid"><label>Name<input name="name" placeholder="Name" type="text" /></label><label>E-Mail-Adresse<input name="email" placeholder="E-Mail-Adresse" type="email" /></label><label>Telefonnummer<input name="telefon" placeholder="Telefonnummer" type="tel" /></label><label>Interesse<select name="interesse"><option>KI-Schulung</option><option>KI-Telefonagent</option><option>Digitale Arbeitshelfer</option><option>Ich bin noch unsicher</option></select></label><label>Nachricht<textarea name="nachricht" placeholder="Nachricht" /></label><button className="btn btn-gradient" type="submit">Analysegespräch auswählen</button></div></form></div></section>
    </PageFrame>
  )
}
