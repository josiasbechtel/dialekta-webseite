import Link from 'next/link'
import { PageFrame } from '@/components/site-chrome'
import { Card, FAQ, Hero, SectionHead } from '@/components/ui'

const modules = [
  ['KI-Ready Basis', 'Der einfache Einstieg für alle, die KI verstehen und erste Anwendungen sicher ausprobieren möchten.'],
  ['KI im Büroalltag', 'Für alle, die KI direkt für wiederkehrende Aufgaben im Arbeitsalltag nutzen möchten.'],
  ['KI für Teams und Unternehmen', 'Für Teams, die KI gemeinsam, sicher und mit klaren Regeln einsetzen möchten.'],
  ['KI für Content und Kommunikation', 'Für Website, Social Media, Newsletter, Flyer, Texte und Kommunikation.'],
  ['KI-Automation und digitale Entlastung', 'Für alle, die wiederkehrende Aufgaben einfacher organisieren möchten.'],
]

export default function KiSchulungPage() {
  return (
    <PageFrame pageClass="page-ki-schulung ki-schulung-page">
      <Hero visual="school" image="/assets/img/hero-ki-schulung-v2.png" title={<>KI verstehen.<br />Sicher anwenden.</>} lead="Unsere Live-Schulung zeigt dir verständlich, wie du KI sicher und sinnvoll nutzt - ganz ohne technisches Vorwissen." actions={[{ href: '/analysegespraech', label: 'Kostenloses Analysegespräch sichern' }, { href: '#module', label: 'Module ansehen', outline: true }]} points={['Für Einsteigerinnen und Einsteiger geeignet', 'Live online, vor Ort oder hybrid', 'Mit konkreten Beispielen aus Alltag, Büro und Verein']} />
      <section className="section"><div className="container"><SectionHead title="Von der Neugier zur Anwendung." text="Du bekommst einen klaren Einstieg in KI, lernst die wichtigsten Tools kennen und siehst direkt, wie du sie für Texte, Bilder, Organisation und wiederkehrende Aufgaben nutzen kannst." /><div className="grid grid-3"><Card icon="bulb" title="Verstehen" text="Du verstehst, was KI ist, was sie kann und wo ihre Grenzen liegen." /><Card icon="briefcase" title="Ausprobieren" text="Du testest einfache Anwendungen für Text, Bild, Recherche, Planung und Organisation." /><Card icon="shield" title="Sicher nutzen" text="Du lernst, worauf du bei Datenschutz, Faktencheck und sensiblen Daten achten musst." /></div></div></section>
      <section className="section section-dark"><div className="container"><SectionHead title="KI-Ready: Von der Neugier zur Anwendung." text="Ein kompakter Live-Workshop für alle, die KI nicht nur spannend finden, sondern endlich praktisch nutzen möchten." /><div className="grid grid-3">{['KI einfach verstehen', 'Die wichtigsten KI-Tools im Überblick', 'Text, Bild und Sound ausprobieren', 'Bessere Prompts schreiben', 'Sicherer Umgang mit KI', 'Transfer in den Alltag'].map((item) => <Card icon="check" key={item} title={item} text="Praxisnah, verständlich und mit konkretem Nutzen für deinen Alltag." />)}</div></div></section>
      <section className="section section-muted" id="module"><div className="container"><SectionHead title="Schulungsmodule" /><div className="module-list">{modules.map(([title, text]) => <article className="module-item" key={title}><h3>{title}</h3><p>{text}</p><div className="suitable"><strong>Geeignet für</strong><br />Einsteiger, Teams, Vereine, Selbstständige und kleine Unternehmen.</div><ul><li>KI einfach erklärt</li><li>wichtige Tools im Überblick</li><li>Praxisbeispiele ausprobieren</li><li>nächste Schritte festlegen</li></ul></article>)}</div></div></section>
      <section className="section"><div className="container"><SectionHead title="Preise" /><div className="price-grid"><article className="price-card"><h3>KI-Ready Einzelperson</h3><strong>290 CHF</strong><p>Für Einsteigerinnen und Einsteiger.</p></article><article className="price-card"><h3>KI-Ready Gruppe</h3><strong>890 CHF</strong><p>Für Teams, Vereine oder kleine Gruppen.</p></article><article className="price-card"><h3>Individuelle Firmenschulung</h3><strong>Individuell</strong><p>Auf dein Unternehmen abgestimmt.</p></article></div><p style={{ textAlign: 'center', marginTop: 34 }}><Link className="btn btn-gradient" href="/analysegespraech">Analysegespräch zur Schulung sichern</Link></p></div></section>
      <section className="section section-muted"><div className="container"><SectionHead title="FAQ KI-Schulung" /><FAQ items={[[ 'Brauche ich technisches Vorwissen?', 'Nein. Die Schulung ist bewusst einfach aufgebaut.' ], [ 'Ist die Schulung Theorie oder Praxis?', 'Beides, aber mit klarem Praxisfokus.' ], [ 'Findet die Schulung online oder vor Ort statt?', 'Beides ist möglich: online, vor Ort oder hybrid.' ]]} /></div></section>
    </PageFrame>
  )
}
