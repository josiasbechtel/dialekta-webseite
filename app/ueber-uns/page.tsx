import Link from 'next/link'

export default function UeberUnsPage() {
  return <main className="page"><section className="hero compact"><div className="container"><p className="eyebrow">Über Dialekta</p><h1>KI soll entlasten - nicht komplizierter machen.</h1><p className="lead">Dialekta wurde von Josias Bechtel und Martin Wichmann gegründet. Wir setzen KI so ein, dass sie Menschen im Alltag wirklich unterstützt.</p><div className="actions"><Link className="button light" href="/kontakt">Analysegespräch sichern</Link><Link className="button ghost" href="/">Zur Startseite</Link></div></div></section></main>
}
