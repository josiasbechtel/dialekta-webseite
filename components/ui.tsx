'use client'

import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { useState } from 'react'
import { Icon } from '@/components/icons'

type HeroVisual = 'home' | 'school' | 'phone' | 'helpers' | 'analysis' | 'about' | 'faq'

export function Hero({ title, lead, image, actions, home }: { title: ReactNode; lead: string; image: string; actions: { href: string; label: string; outline?: boolean }[]; points?: string[]; home?: boolean; visual?: HeroVisual }) {
  return (
    <section className={`hero ${home ? 'home-hero' : ''}`} style={{ '--hero-bg-image': `url(${image})`, '--hero-real-image': `url(${image})` } as CSSProperties}>
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1>{title}</h1>
          <div aria-hidden="true" className="accent-line" />
          <p className="lead">{lead}</p>
          <div className="hero-actions">
            {actions.map((action, index) => (
              <Link className={`btn ${action.outline ? 'btn-outline-light' : 'btn-primary'}`} href={action.href} key={action.href + index}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHead({ title, text }: { title: string; text?: string }) {
  return <div className="section-head"><h2>{title}</h2>{text ? <p>{text}</p> : null}<div aria-hidden="true" className="accent-line" /></div>
}

export function Card({ title, text, icon = 'check' }: { title: string; text: string; icon?: string }) {
  return <article className="card hover-card"><Icon name={icon} /><h3>{title}</h3><p>{text}</p></article>
}

export function FlipCard({ label, title, text, icon, points, href }: { label: string; title: string; text: string; icon: string; points: string[]; href: string; cta: string }) {
  return (
    <article className="card flip-card"><div className="flip-inner"><div className="card-face card-front"><Icon name={icon} /><span className="mini-label">{label}</span><h3>{title}</h3><p>{text}</p><div className="card-cta"><Link className="btn btn-gradient" href={href}>Zum Angebot</Link></div></div><div className="card-face card-back"><Icon name={icon} /><span className="mini-label">{label}</span><h3>{title}</h3><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul><div className="card-cta"><Link className="btn btn-gradient" href={href}>Zum Angebot</Link></div></div></div></article>
  )
}

export function FAQ({ items }: { items: [string, string][] }) {
  const [openIndex, setOpenIndex] = useState(0)
  return <div className="faq">{items.map(([question, answer], index) => <div className={`faq-item ${openIndex === index ? 'is-open' : ''}`} key={question}><button aria-expanded={openIndex === index} className="faq-button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} type="button"><span className="faq-question">{question}</span><span className="faq-indicator"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-panel"><p>{answer}</p></div></div>)}</div>
}
