import Link from 'next/link'

const offers = [
  ['KI-Schulung', 'KI sicher verstehen und sinnvoll nutzen.', 'Live-Schulungen für Einsteiger, Teams, Vereine und Unternehmen - verständlich, sicher und ohne technisches Vorwissen.', '/schulung'],
  ['KI-Telefonagent', 'Anrufe professionell entgegennehmen lassen.', 'Der KI-Telefonagent nimmt Anrufe rund um die Uhr entgegen, versteht Schweizerdeutsch und fasst Informationen sauber zusammen.', '/ki-telefonagent'],
  ['Digitale Arbeitshelfer', 'Digitale Helfer für wiederkehrende Aufgaben.', 'Einfache digitale Lösungen für Aufgaben, die sonst in E-Mails, Excel-Listen oder manuellen Abläufen hängen bleiben.', '/automatisierung'],
]

const steps = ['Analysegespräch sichern', 'Passende Lösung wählen', 'Umsetzen und nutzen']

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <nav className="container nav" aria-label="Hauptnavigation">
          <Link className="brand" href="/">Dialekta</Link>
          <div className="nav-links">
            <Link href="/schulung">KI-Schulung</Link>
            <Link href="/ki-telefonagent">KI-Telefonagent</Link>
            <Link href="/automatisierung">Digitale Arbeitshelfer</Link>
            <Link href="/ueber-uns">Über uns</Link>
            <Link className="button small" href="/kontakt">Analysegespräch</Link>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">KI-Schulung, Telefonagent und digitale Arbeitshelfer</p>
            <h1>KI verstehen, gezielt einsetzen und den Alltag spürbar entlasten.</h1>
            <p className="lead">Dialekta unterstützt dich mit praxisnahen KI-Schulungen, KI-Telefonlösungen und digitalen Arbeitshelfern, die wiederkehrende Aufgaben einfacher machen.</p>
            <div className="actions">
              <Link className="button light" href="/kontakt">Kostenloses Analysegespräch sichern</Link>
              <Link className="button ghost" href="#angebote">Angebote ansehen</Link>
            </div>
          </div>
          <div className="hero-card">
            <strong>Verstehen. Struktur schaffen. Entlastung umsetzen.</strong>
            <span>24/7 Telefonagent · 30+ Sprachen · Live-Schulungen</span>
          </div>
        </div>
      </section>

      <section className="section" id="angebote">
        <div className="container center">
          <p className="eyebrow dark">Angebote</p>
          <h2>Womit möchtest du starten?</h2>
          <p className="section-lead">Wähle den Bereich, der dir aktuell am meisten hilft. Die Angebote lassen sich einzeln nutzen oder sinnvoll kombinieren.</p>
        </div>
        <div className="container card-grid">
          {offers.map(([label, title, text, href], index) => (
            <article className={`card ${index === 1 ? 'featured' : ''}`} key={label}>
              <span className="icon">{label[0]}</span>
              <p className="label">{label}</p>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link className="text-link" href={href}>Mehr erfahren</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section surface">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Über Dialekta</p>
            <h2>KI soll entlasten - nicht komplizierter machen.</h2>
            <p className="section-lead">Dialekta wurde von Josias Bechtel und Martin Wichmann gegründet. Unser Ziel ist es, KI verständlich, pragmatisch und mit klarem Nutzen einzusetzen.</p>
          </div>
          <div className="mini-grid">
            {['Verständlich', 'Pragmatisch', 'Persönlich', 'Nützlich'].map((item) => <div className="mini-card" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <p className="eyebrow dark">Ablauf</p>
          <h2>So einfach startest du.</h2>
        </div>
        <div className="container card-grid three">
          {steps.map((step, index) => <article className="card step" key={step}><span>{index + 1}</span><h3>{step}</h3><p>Wir klären den sinnvollsten nächsten Schritt und setzen ihn verständlich um.</p></article>)}
        </div>
      </section>

      <section className="cta">
        <div className="container center">
          <h2>Bereit für weniger Aufwand im Alltag?</h2>
          <p>Lass uns in einem kostenlosen Analysegespräch herausfinden, welche KI-Lösung für dich aktuell am meisten Sinn macht.</p>
          <Link className="button light" href="/kontakt">Kostenloses Analysegespräch sichern</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Dialekta GmbH | CHE-338.544.623</p>
          <div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><Link href="/agb">AGB</Link></div>
        </div>
      </footer>
    </main>
  )
}
