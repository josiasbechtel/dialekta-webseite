import Link from 'next/link'

const faqs = [['Brauche ich technisches Vorwissen?', 'Nein. Dialekta startet bewusst verständlich und praktisch.'], ['Muss ich etwas installieren?', 'Der Telefonagent funktioniert über Rufumleitung mit der bestehenden Nummer.'], ['Kann eine Lösung klein starten?', 'Ja. Digitale Helfer können mit einer klar abgegrenzten Aufgabe starten.']]

export default function FaqPage() {
  return <main className="page"><section className="hero compact"><div className="container"><p className="eyebrow">FAQ</p><h1>Häufige Fragen zu Dialekta.</h1><p className="lead">Kurz, verständlich und auf die wichtigsten Entscheidungen fokussiert.</p><Link className="button light" href="/kontakt">Analysegespräch sichern</Link></div></section><section className="section"><div className="container card-grid">{faqs.map(([q,a]) => <article className="card" key={q}><h3>{q}</h3><p>{a}</p></article>)}</div></section></main>
}
