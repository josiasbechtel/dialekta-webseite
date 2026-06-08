'use client'

import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { useState } from 'react'
import { Icon } from '@/components/icons'

type HeroVisual = 'home' | 'school' | 'phone' | 'helpers' | 'analysis' | 'about' | 'faq'
type Point = [number, number]

type NetworkStyle = CSSProperties & {
  '--mx'?: number
  '--my'?: number
  '--dx'?: string
  '--dy'?: string
  '--delay'?: string
}

const visualPoints: Record<HeroVisual, Point[]> = {
  home: [[14,28],[23,18],[35,22],[47,14],[59,21],[72,16],[84,28],[18,46],[31,39],[43,45],[55,38],[68,45],[80,40],[24,65],[38,58],[51,66],[63,58],[76,67],[33,82],[49,78],[66,83]],
  school: [[28,22],[43,13],[59,18],[72,31],[21,39],[39,36],[56,41],[76,48],[28,58],[46,54],[62,61],[72,73],[38,82],[55,78]],
  phone: [[38,10],[62,10],[74,20],[79,38],[78,60],[70,78],[56,88],[40,88],[28,78],[20,60],[19,38],[26,20],[38,28],[62,28],[64,70],[36,70],[50,43],[50,57],[43,78],[57,78]],
  helpers: [[17,22],[31,17],[45,22],[59,17],[73,23],[25,38],[39,34],[53,39],[67,35],[81,43],[18,57],[33,53],[47,59],[61,54],[76,61],[26,76],[43,72],[59,78],[72,73]],
  analysis: [[50,10],[65,19],[78,35],[82,52],[70,70],[52,84],[33,75],[20,55],[24,36],[35,20],[48,35],[62,42],[56,60],[40,58],[45,48],[68,55],[31,45]],
  about: [[27,25],[42,16],[58,16],[73,25],[22,49],[38,43],[50,35],[62,43],[78,49],[31,70],[50,78],[69,70],[50,54]],
  faq: [[27,27],[43,16],[62,20],[75,36],[72,56],[58,70],[45,82],[31,68],[22,50],[50,42],[60,52],[43,57]],
}

const visualLines: Record<HeroVisual, [number, number][]> = {
  home: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,7],[7,8],[8,9],[9,10],[10,11],[11,12],[2,8],[4,10],[6,12],[7,13],[13,14],[14,15],[15,16],[16,17],[8,14],[10,15],[11,16],[13,18],[18,19],[19,20],[17,20],[15,19]],
  school: [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[6,7],[1,5],[2,6],[4,8],[8,9],[9,10],[10,11],[5,9],[6,10],[8,12],[12,13],[10,13],[11,13]],
  phone: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,0],[12,13],[13,16],[16,17],[17,15],[15,12],[14,15],[3,14],[4,14],[18,19],[15,18],[14,19]],
  helpers: [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[8,9],[5,10],[10,11],[11,12],[12,13],[13,14],[10,15],[15,16],[16,17],[17,18],[1,6],[2,7],[3,8],[6,11],[7,12],[8,13],[11,16],[12,17],[13,18]],
  analysis: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],[10,11],[11,15],[15,12],[12,13],[13,16],[16,14],[14,10],[1,10],[2,11],[4,12],[6,13],[8,16]],
  about: [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[6,7],[7,8],[8,3],[4,9],[9,10],[10,11],[11,8],[6,12],[12,10],[5,12],[7,12]],
  faq: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[1,9],[9,10],[10,5],[9,11],[11,7],[2,10],[4,10]],
}

function HeroDetailVisual({ visual }: { visual: HeroVisual }) {
  const labels = visual === 'phone'
    ? ['24/7', 'Gespräch', 'Weiterleitung', 'CRM']
    : visual === 'school'
      ? ['Lernen', 'Praxis', 'Team', 'Transfer']
      : ['Anfrage', 'Prüfen', 'Automatisieren', 'Erledigt']

  return (
    <div className="visual-stage">
      <div className="visual-grid" />
      <div className="visual-device">
        <span className="device-speaker" />
        <span className="device-call" />
        <span className="device-wave" />
        <span className="device-dot device-dot-a" />
        <span className="device-dot device-dot-b" />
      </div>
      <div className="visual-panel visual-panel-a"><span>{labels[0]}</span><strong>{labels[1]}</strong><i /></div>
      <div className="visual-panel visual-panel-b"><span>{labels[2]}</span><strong>{labels[3]}</strong><i /></div>
      <div className="visual-chip visual-chip-a">KI</div>
      <div className="visual-chip visual-chip-b">✓</div>
      <div className="visual-circuit visual-circuit-a" />
      <div className="visual-circuit visual-circuit-b" />
      <div className="visual-circuit visual-circuit-c" />
    </div>
  )
}

function HeroNetwork({ visual }: { visual: HeroVisual }) {
  const [pos, setPos] = useState({ x: 64, y: 48 })
  const points = visualPoints[visual]
  return (
    <div
      aria-hidden="true"
      className={`hero-visual hero-visual-${visual}`}
      onMouseLeave={() => setPos({ x: 64, y: 48 })}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setPos({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 })
      }}
      style={{ '--mx': pos.x, '--my': pos.y } as NetworkStyle}
    >
      <HeroDetailVisual visual={visual} />
      <svg viewBox="0 0 100 100">
        {visualLines[visual].map(([from, to]) => <line key={`${from}-${to}`} x1={points[from][0]} y1={points[from][1]} x2={points[to][0]} y2={points[to][1]} />)}
        {points.map(([x, y], index) => {
          const distance = Math.hypot(pos.x - x, pos.y - y)
          const influence = Math.max(0, 1 - distance / 18)
          const dx = `${(pos.x - x) * influence * 0.12}px`
          const dy = `${(pos.y - y) * influence * 0.12}px`
          return <circle className={`network-node ${influence > 0.2 ? 'is-near' : ''}`} cx={x} cy={y} key={`${x}-${y}`} r={index % 4 === 0 ? 2.25 : 1.65} style={{ '--dx': dx, '--dy': dy, '--delay': `${index * 70}ms` } as NetworkStyle} />
        })}
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

export function FlipCard({ label, title, text, icon, points, href }: { label: string; title: string; text: string; icon: string; points: string[]; href: string; cta: string }) {
  return (
    <article className="card flip-card"><div className="flip-inner"><div className="card-face card-front"><Icon name={icon} /><span className="mini-label">{label}</span><h3>{title}</h3><p>{text}</p><div className="card-cta"><Link className="btn btn-gradient" href={href}>Zum Angebot</Link></div></div><div className="card-face card-back"><div className="back-title">Kurz & konkret</div><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul><div className="card-cta"><Link className="btn btn-gradient" href={href}>Zum Angebot</Link></div></div></div></article>
  )
}

export function FAQ({ items }: { items: [string, string][] }) {
  const [openIndex, setOpenIndex] = useState(0)
  return <div className="faq">{items.map(([question, answer], index) => <div className={`faq-item ${openIndex === index ? 'is-open' : ''}`} key={question}><button aria-expanded={openIndex === index} className="faq-button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} type="button"><span className="faq-question">{question}</span><span className="faq-indicator"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-panel"><p>{answer}</p></div></div>)}</div>
}
