import Link from 'next/link'
import { PageFrame } from '@/components/site-chrome'
import { Card, FAQ, Hero, SectionHead } from '@/components/ui'

export default function KiTelefonagentPage() {
  return (
    <PageFrame pageClass="page-ki-telefonagent">
      <Hero visual="phone" image="/assets/img/hero-ki-telefonagent-v2.png" title={<>Nie wieder einen<br />Anruf verpassen.</>} lead="Dein KI-Assistent übernimmt Telefonate rund um die Uhr, versteht Schweizerdeutsch und spricht über 30 Sprachen." actions={[{ href: '/analysegespraech', label: 'Kostenloses Analysegespräch sichern' }, { href: 'tel:+41615391929', label: 'Demoagent anrufen', outline: true }]} points={['24/7 erreichbar', '30+ Sprachen', 'ohne zusätzliche Hardware']} />
      <section className="section"><div className="container"><SectionHead title="Deine telefonische Erreichbarkeit, neu gedacht." text="Der KI-Telefonagent nimmt Anrufe entgegen, fragt strukturiert nach und sendet dir die wichtigsten Informationen sauber zusammengefasst." /><div className="grid grid-3"><Card icon="clock" title="Rund um die Uhr" text="Anrufe werden auch ausserhalb der Öffnungszeiten professionell angenommen." /><Card icon="phone" title="Natürliches Gespräch" text="Der Agent versteht Schweizerdeutsch und führt Gespräche in über 30 Sprachen." /><Card icon="shield" title="Einfach einrichten" text="Nutzbar über Rufumleitung, ohne zusätzliche Hardware oder Telefonanlage." /></div></div></section>
      <section className="section section-muted"><div className="container"><SectionHead title="Für wen eignet sich der Telefonagent?" /><div className="grid grid-3"><Card title="Praxen und Dienstleister" text="Wenn Termine, Rückrufe oder häufige Fragen den Alltag unterbrechen." icon="briefcase" /><Card title="Vereine und Organisationen" text="Wenn Erreichbarkeit wichtig ist, aber nicht immer jemand ans Telefon kann." icon="person" /><Card title="KMU und Selbstständige" text="Wenn kein Anruf verloren gehen soll, auch während Arbeit, Pause oder Feierabend." icon="target" /></div></div></section>
      <section className="section"><div className="container"><FAQ items={[[ 'Brauche ich neue Hardware?', 'Nein. In der Regel reicht eine Rufumleitung auf den KI-Telefonagenten.' ], [ 'Kann der Agent Schweizerdeutsch?', 'Ja, er kann Schweizerdeutsch verstehen und Gespräche in über 30 Sprachen führen.' ], [ 'Was passiert nach einem Anruf?', 'Du erhältst eine strukturierte Zusammenfassung mit den wichtigsten Angaben.' ]]} /></div></section>
      <section className="section section-muted"><div className="container"><div className="cta-band"><div><h2>Teste den Telefonagenten direkt.</h2><p>Rufe den Demoagenten an oder sichere dir ein kostenloses Analysegespräch.</p></div><div className="hero-actions"><a className="btn btn-primary" href="tel:+41615391929">Demoagent anrufen</a><Link className="btn btn-outline-light" href="/analysegespraech">Analysegespräch sichern</Link></div></div></div></section>
    </PageFrame>
  )
}
