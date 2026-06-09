import Link from 'next/link'
import { PageFrame } from '@/components/site-chrome'
import { Card, FlipCard, Hero, SectionHead } from '@/components/ui'
import { offers, steps, values } from '@/lib/site'

export default function HomePage() {
  return (
    <PageFrame pageClass="page-home">
      <Hero home visual="home" image="/assets/img/hero-home-v3.svg" title={<>KI nutzen.<br />Alltag entlasten.</>} lead="Dialekta macht KI praxisnah nutzbar - mit Schulungen, Telefonagenten und digitalen Helfern, die den Alltag spürbar vereinfachen." actions={[{ href: '/analysegespraech', label: 'Kostenloses Analysegespräch sichern' }, { href: '#angebote', label: 'Angebote ansehen', outline: true }]} points={['Verständlich erklärt', 'Direkt im Alltag nutzbar', 'Für Einsteiger, Teams, Vereine und Unternehmen']} />
      <section className="section section-muted" id="angebote"><div className="container"><SectionHead title="Womit möchtest du starten?" text="Wähle den Bereich, der dir aktuell am meisten hilft." /><div className="grid grid-3">{offers.map((offer) => <FlipCard key={offer.href} {...offer} />)}</div></div></section>
      <section className="section" id="ueber-uns"><div className="container split"><div className="copy-card"><span className="mini-label">Über uns</span><h2>KI soll entlasten - nicht komplizierter machen.</h2><p>Dialekta wurde von Josias Bechtel und Martin Wichmann gegründet. Unser Ziel ist es, KI so einzusetzen, dass sie Menschen im Alltag wirklich unterstützt: verständlich, pragmatisch und mit klarem Nutzen.</p><div className="card-cta"><Link className="btn btn-gradient" href="/ueber-uns">Mehr über uns</Link></div></div><div className="grid grid-2">{values.map(([title, text, icon]) => <Card icon={icon} key={title} text={text} title={title} />)}</div></div></section>
      <section className="section section-muted"><div className="container"><SectionHead title="So einfach startest du." /><div className="steps">{steps.map(([title, text]) => <article className="step" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><p style={{ textAlign: 'center', marginTop: 34 }}><Link className="btn btn-gradient" href="/analysegespraech">Kostenloses Analysegespräch sichern</Link></p></div></section>
      <section className="section section-prefooter-light"><div className="container"><div className="cta-band"><div><h2>Bereit für weniger Aufwand im Alltag?</h2><p>Lass uns in einem kostenlosen Analysegespräch herausfinden, welche KI-Lösung für dich aktuell am meisten Sinn macht.</p></div><div className="hero-actions"><Link className="btn btn-primary" href="/analysegespraech">Kostenloses Analysegespräch sichern</Link><Link className="btn btn-outline-light" href="/analysegespraech#kontakt">Nachricht schreiben</Link></div></div></div></section>
    </PageFrame>
  )
}
