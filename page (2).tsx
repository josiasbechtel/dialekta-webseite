import type { Metadata } from 'next'
import { FaqList } from '@/components/faq-list'
import { PageShell } from '@/components/page-shell'
import { SectionHeading } from '@/components/section-heading'
import { faqs } from '@/lib/content'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Antworten auf häufige Fragen zu Dialekta, KI-Schulung, Telefonagent und digitalen Arbeitshelfern.',
}

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Häufige Fragen zu Dialekta."
      text="Kurz, verständlich und auf die wichtigsten Entscheidungen vor dem Analysegespräch fokussiert."
    >
      <section className="section" id="details">
        <div className="container">
          <SectionHeading center title="Antworten auf einen Blick" />
          <FaqList items={faqs} />
        </div>
      </section>
    </PageShell>
  )
}
