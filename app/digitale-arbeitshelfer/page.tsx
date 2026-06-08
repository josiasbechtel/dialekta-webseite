import Link from 'next/link'
import { PageFrame } from '@/components/site-chrome'
import { Card, FAQ, Hero, SectionHead } from '@/components/ui'

export default function DigitaleArbeitshelferPage() {
  return (
    <PageFrame pageClass="page-digitale-arbeitshelfer">
      <Hero image="/assets/img/hero-digitale-arbeitshelfer-v2.png" title={<>Digitale Helfer.<br />Mehr Übersicht.</>} lead="Für Betriebe, Teams und Vereine, die mit Anfragen, Listen, Kursen, Freigaben oder Übersichten weniger Aufwand haben möchten." actions={[{ href: '/analysegespraech', label: 'Digitale Lösung besprechen' }, { href: '#beispiele', label: 'Beispiele ansehen', outline: true }]} />
      <section className="section"><div className="container"><SectionHead title="Wenn Abläufe zu viel Handarbeit brauchen." text="Digitale Arbeitshelfer schaffen kleine, nützliche Lösungen für wiederkehrende Aufgaben." /><div className="grid grid-3"><Card icon="grid" title="Formulare und Übersichten" text="Anfragen, Kursdaten oder Rückmeldungen sauber sammeln und weiterverarbeiten." /><Card icon="clock" title="Automatisierte Erinnerung" text="Weniger manuelles Nachfassen bei Terminen, Aufgaben oder offenen Angaben." /><Card icon="briefcase" title="Interne Mini-Tools" text="Kleine Arbeitsflächen für genau die Aufgabe, die heute Zeit kostet." /></div></div></section>
      <section className="section section-muted" id="beispiele"><div className="container"><SectionHead title="Typische Beispiele" /><div className="module-list">{['Anmelde- und Kursorganisation', 'Anfragen triagieren', 'Listen aus E-Mails oder Formularen', 'Freigaben und interne Aufgaben', 'Wissens- oder Dokumentenhelfer'].map((item) => <article className="module-item" key={item}><h3>{item}</h3><p>Wir bauen eine erste nutzbare Version und prüfen danach, was sinnvoll erweitert werden soll.</p></article>)}</div></div></section>
      <section className="section"><div className="container"><FAQ items={[[ 'Muss es direkt ein grosses Projekt sein?', 'Nein. Wir starten bewusst klein und mit einem klaren Nutzen.' ], [ 'Kann eine Lösung später wachsen?', 'Ja. Eine gute erste Version kann Schritt für Schritt erweitert werden.' ], [ 'Brauchen wir spezielle Systeme?', 'Oft nicht. Viele Entlastungen entstehen bereits mit einfachen, passenden Abläufen.' ]]} /></div></section>
      <section className="section section-dark"><div className="container"><div className="cta-band"><div><h2>Klein starten, sinnvoll erweitern.</h2><p>Eine digitale Starter-Lösung beginnt ab 1'500 CHF und kann bei Bedarf wachsen.</p></div><Link className="btn btn-primary" href="/analysegespraech">Digitale Lösung besprechen</Link></div></div></section>
    </PageFrame>
  )
}
