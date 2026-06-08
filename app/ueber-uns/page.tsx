import Link from 'next/link'
import { PageFrame } from '@/components/site-chrome'
import { Card, Hero, SectionHead } from '@/components/ui'
import { steps, values } from '@/lib/site'

export default function UeberUnsPage() {
  return (
    <PageFrame pageClass="page-ueber-uns">
      <Hero image="/assets/img/hero-ueber-uns-v2.png" title={<>KI soll entlasten.<br />Nicht komplizierter machen.</>} lead="Dialekta wurde von Josias Bechtel und Martin Wichmann gegründet. Wir setzen KI so ein, dass sie Menschen im Alltag wirklich unterstützt." actions={[{ href: '/analysegespraech', label: 'Analysegespräch sichern' }]} />
      <section className="section"><div className="container"><SectionHead title="Persönlich, verständlich und mit klarem Nutzen." /><div className="grid grid-4">{values.map(([title, text, icon]) => <Card icon={icon} key={title} title={title} text={text} />)}</div></div></section>
      <section className="section section-muted"><div className="container"><SectionHead title="So arbeiten wir zusammen." /><div className="steps">{steps.map(([title, text]) => <article className="step" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><p style={{ textAlign: 'center', marginTop: 34 }}><Link className="btn btn-gradient" href="/analysegespraech">Kostenloses Analysegespräch sichern</Link></p></div></section>
    </PageFrame>
  )
}
