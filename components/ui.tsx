'use client'

import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { useState } from 'react'
import { Icon } from '@/components/icons'

type HeroVisual = 'home' | 'school' | 'phone' | 'helpers' | 'analysis' | 'about' | 'faq'
type Point = [number, number]

const visualPoints: Record<HeroVisual, Point[]> = {
  home: [[20,22],[34,18],[50,24],[65,16],[78,28],[28,48],[45,44],[60,52],[74,46],[36,72],[54,74],[70,68]],
  school: [[30,28],[48,18],[66,28],[24,44],[48,44],[72,44],[30,64],[48,76],[66,64]],
  phone: [[36,16],[64,16],[72,30],[72,70],[64,84],[36,84],[28,70],[28,30],[50,28],[50,72],[40,76],[60,76]],
  helpers: [[24,24],[44,24],[64,24],[76,36],[24,48],[44,48],[64,48],[76,60],[24,72],[44,72],[64,72]],
  analysis: [[50,12],[66,24],[76,42],[70,64],[50,80],[30,64],[24,42],[34,24],[50,42],[50,58]],
  about: [[32,25],[50,18],[68,25],[28,52],[50,44],[72,52],[38,75],[62,75]],
  faq: [[28,26],[46,16],[64,26],[72,48],[58,66],[48,80],[38,66],[54,48]],
}

const visualLines: Record<HeroVisual, [number, number][]> = {
  home: [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[2,6],[3,7],[5,9],[9,10],[10,11],[8,11]],
  school: [[0,1],[1,2],[3,4],[4,5],[6,7],[7,8],[0,3],[3,6],[1,4],[4,7],[2,5],[5,8]],
  phone: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[8,9],[10,11]],
  helpers: [[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[8,9],[9,10],[0,4],[4,8],[1,5],[5,9],[2,6],[6,10],[3,7]],
  analysis: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[8,9],[1,8],[3,9],[5,9],[7,8]],
  about: [[0,1],[1,2],[0,3],[3,4],[4,5],[5,2],[3,6],[6,7],[7,5],[1,4]],
  faq: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[2,7],[7,4]],
}

function HeroNetwork({ visual }: { visual: HeroVisual }) {
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const points = visualPoints[visual]
  return (
    <div
      aria-hidden="true"
      className={`hero-visual hero-visual-${visual}`}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setPos({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 })
      }}
      style={{ '--mx': pos.x, '--my': pos.y } as CSSProperties}
    >
      <svg viewBox="0 0 100 100">
        {visualLines[visual].map(([from, to]) => <line key={`${from}-${to}`} x1={points[from][0]} y1={points[from][1]} x2={points[to][0]} y2={points[to][1]} />)}
        {points.map(([x, y], index) => <circle className="network-node" cx={x} cy={y} key={`${x}-${y}`} r={index % 3 === 0 ? 2.4 : 1.9} style={{ '--pull': 0.045 + (index % 5) * 0.018, '--delay': `${index * 90}ms` } as CSSProperties} />)}
      </svg>
    </div>
  )
}

export function Hero({ title, lead, image, actions, points = [], home, visual = 'home' }: { title: ReactNode; lead: string; image: string; actions: { href: string; label: string; outline?: boolean }[]; points?: string[]; home?: boolean; visual?: HeroVisual }) {
  return (
    <section className={`hero ${home ? 'home-hero' : ''}`} style={{ '--hero-bg-image': `url(${image})`, '--hero-real-image': `url(${image})` } as CSSProperties}>
      <div className="container hero-layout">
        <div className="hero-copy"><h1>{title}</h1><div aria-hidden="true" className="accent-line" /><p className="lead">{lead}</p><div className="hero-actions">{actions.map((action, index) => <Link className={`btn ${action.outline ? 'btn-outline-light' : 'btn-primary'}`} href={action.href} key={action.href + index}>{action.label}</Link>)}</div>{points.length ? <div className="hero-points">{points.map((point) => <span className="pill" key={point}>{point}</span>)}</div> : null}</div>
        <HeroNetwork visual={visual} />
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

export function FlipCard({ label, title, text, icon, points, href, cta }: { label: string; title: string; text: string; icon: string; points: string[]; href: string; cta: string }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <article className={`card flip-card ${flipped ? 'is-flipped' : ''}`}><div className="flip-inner"><div className="card-face card-front"><Icon name={icon} /><span className="mini-label">{label}</span><h3>{title}</h3><p>{text}</p><button aria-label="Weitere Punkte anzeigen" className="flip-toggle" onClick={() => setFlipped(true)} type="button"><span>Mehr</span><strong>+</strong></button></div><div className="card-face card-back"><div className="back-title">Kurz & konkret</div><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul><div className="card-cta"><Link className="btn btn-primary" href={href}>{cta}</Link></div><button aria-label="Zurück zur Vorderseite" className="flip-close" onClick={() => setFlipped(false)} type="button">Schliessen</button></div></div></article>
  )
}

export function FAQ({ items }: { items: [string, string][] }) {
  const [openIndex, setOpenIndex] = useState(0)
  return <div className="faq">{items.map(([question, answer], index) => <div className={`faq-item ${openIndex === index ? 'is-open' : ''}`} key={question}><button aria-expanded={openIndex === index} className="faq-button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} type="button"><span className="faq-question">{question}</span><span className="faq-indicator"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-panel"><p>{answer}</p></div></div>)}</div>
}
