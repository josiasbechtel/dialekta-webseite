import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Datenschutz',
}

export default function DatenschutzPage() {
  return (
    <PageShell eyebrow="Rechtliches" title="Datenschutz" text="Hinweise zum Umgang mit personenbezogenen Daten.">
      <section className="section" id="details">
        <div className="container legal-content card">
          <h2>Datenschutzerklärung</h2>
          <p>
            Dialekta behandelt personenbezogene Daten vertraulich und entsprechend den geltenden
            Datenschutzbestimmungen. Daten aus Kontaktanfragen werden zur Bearbeitung der Anfrage
            verwendet.
          </p>
          <h3>Kontaktaufnahme</h3>
          <p>
            Wenn du uns per Formular, E-Mail oder Telefon kontaktierst, verwenden wir deine Angaben
            zur Beantwortung deiner Anfrage und zur Vorbereitung des Analysegesprächs.
          </p>
          <h3>Analyse und Verbesserung</h3>
          <p>
            Die Website ist bewusst schlank aufgebaut. Falls Analyse- oder Tracking-Werkzeuge
            eingesetzt werden, sollten sie datenschutzkonform dokumentiert und hier ergänzt werden.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
