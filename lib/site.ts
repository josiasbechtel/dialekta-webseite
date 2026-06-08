export const phoneNumber = '+41 61 539 19 29'
export const phoneHref = 'tel:+41615391929'

export const navItems = [
  { href: '/', label: 'Startseite' },
  {
    href: '/ki-schulung',
    label: 'Angebote',
    children: [
      { href: '/ki-schulung', label: 'KI-Schulung' },
      { href: '/ki-telefonagent', label: 'KI-Telefonagent' },
      { href: '/digitale-arbeitshelfer', label: 'Digitale Arbeitshelfer' },
    ],
  },
  { href: '/ueber-uns', label: 'Über uns' },
]

export const offers = [
  {
    label: '1. KI-Schulung',
    href: '/ki-schulung',
    title: 'KI sicher verstehen und sinnvoll nutzen.',
    text: 'Live-Schulungen für Menschen, Teams, Vereine und Unternehmen, die KI praktisch anwenden möchten - verständlich, sicher und ohne technisches Vorwissen.',
    points: ['Einstieg ohne Vorwissen', 'Alltag, Büro und Organisation', 'Datenschutz, Faktencheck und sichere Nutzung', 'Live online, vor Ort oder hybrid'],
    cta: 'KI-Schulung ansehen',
    icon: 'bulb',
  },
  {
    label: '2. KI-Telefonagent',
    href: '/ki-telefonagent',
    title: 'Anrufe professionell entgegennehmen lassen.',
    text: 'Der KI-Telefonagent nimmt Anrufe rund um die Uhr entgegen, erkennt Anliegen und fasst die wichtigsten Informationen sauber per Mail zusammen.',
    points: ['24/7 erreichbar', 'versteht Schweizerdeutsch', 'spricht über 30 Sprachen', 'keine zusätzliche Hardware nötig'],
    cta: 'KI-Telefonagent ansehen',
    icon: 'phone',
  },
  {
    label: '3. Digitale Arbeitshelfer',
    href: '/digitale-arbeitshelfer',
    title: 'Digitale Helfer für wiederkehrende Aufgaben.',
    text: 'Einfache digitale Lösungen für Aufgaben, die sonst in E-Mails, Excel-Listen oder manuellen Abläufen hängen bleiben.',
    points: ['mehr Übersicht im Alltag', 'weniger manuelle Arbeit', 'passend zu deiner Aufgabe', 'schnell als erste Version testbar'],
    cta: 'Digitale Lösung besprechen',
    icon: 'grid',
  },
]

export const values = [
  ['Verständlich', 'Wir erklären KI so, dass sie nachvollziehbar und direkt nutzbar wird.', 'bulb'],
  ['Pragmatisch', 'Wir starten mit klaren Aufgaben statt mit unnötig grossen Projekten.', 'target'],
  ['Persönlich', 'Du hast persönliche Ansprechpartner und keine anonyme Plattform.', 'person'],
  ['Nützlich', 'Im Zentrum steht immer die Frage, wo KI konkret Zeit, Aufwand oder Stress reduziert.', 'star'],
]

export const steps = [
  ['Analysegespräch sichern', 'Wir klären gemeinsam, wo aktuell am meisten Entlastung möglich ist.'],
  ['Passende Lösung wählen', 'Du entscheidest dich für Schulung, Telefonagent, digitalen Arbeitshelfer oder eine sinnvolle Kombination.'],
  ['Umsetzen und nutzen', 'Die Lösung wird verständlich eingerichtet, erklärt und Schritt für Schritt nutzbar gemacht.'],
]
