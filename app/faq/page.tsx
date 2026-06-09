import Link from 'next/link'
import { PageFrame } from '@/components/site-chrome'
import { FAQ, Hero, SectionHead } from '@/components/ui'

export default function FaqPage() {
  return (
    <PageFrame pageClass="page-faq">
      <Hero visual="faq" image="/assets/img/hero-faq-v3.svg" title={<>Häufige Fragen<br />zu Dialekta.</>} lead="Kurz, verständlich und auf die wichtigsten Entscheidungen fokussiert." actions={[{ href: '/analysegespraech', label: 'Analysegespräch sichern' }]} />
      <section className="section section-muted"><div className="container"><SectionHead title="FAQ" /><FAQ items={[[ 'Brauche ich technisches Vorwissen?', 'Nein. Dialekta startet bewusst verständlich und praktisch.' ], [ 'Muss ich etwas installieren?', 'Der Telefonagent funktioniert über Rufumleitung mit der bestehenden Nummer.' ], [ 'Kann eine Lösung klein starten?', 'Ja. Digitale Helfer können mit einer klar abgegrenzten Aufgabe starten.' ]]}/><p style={{ textAlign: 'center', marginTop: 34 }}><Link className="btn btn-gradient" href="/analysegespraech">Kostenloses Analysegespräch sichern</Link></p></div></section>
    </PageFrame>
  )
}
