'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@/components/icons'
import { navItems, phoneHref, phoneNumber } from '@/lib/site'

function LogoMark() {
  return (
    <svg aria-hidden="true" className="logo-svg" viewBox="0 0 172 48">
      <circle cx="25" cy="24" r="20" fill="#003E5A" />
      <path d="M9 24h6m3-7v14m5-19v24m5-29v34m5-25v16m5-11h6" stroke="#00D6D4" strokeWidth="3.2" strokeLinecap="round" />
      <text x="48" y="33" fill="white" fontFamily="Poppins, Arial, sans-serif" fontSize="31" fontWeight="800">Dialekta</text>
    </svg>
  )
}

function SocialIcon({ name }: { name: 'linkedin' | 'instagram' | 'facebook' | 'tiktok' }) {
  const label = { linkedin: 'LinkedIn', instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok' }[name]
  const letter = { linkedin: 'in', instagram: '◎', facebook: 'f', tiktok: '♪' }[name]
  return <a aria-label={label} className="social-icon" href="#"><span>{letter}</span></a>
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link aria-label="Dialekta Startseite" className="brand brand-logo" href="/"><LogoMark /></Link>
        <button aria-controls="navigation" aria-expanded={open} className="nav-toggle" onClick={() => setOpen((value) => !value)} type="button">Menü</button>
        <nav aria-label="Hauptnavigation" className={`nav-links ${open ? 'is-open' : ''}`} id="navigation">
          {navItems.map((item) => <Link className={pathname === item.href ? 'is-active' : ''} href={item.href} key={item.href}>{item.label}</Link>)}
          <Link className={`nav-cta ${pathname === '/analysegespraech' ? 'is-active' : ''}`} href="/analysegespraech">Kostenloses Analysegespräch</Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© 2026 Dialekta GmbH | CHE-338.544.623</div>
        <div aria-label="Social Links" className="social-links"><SocialIcon name="linkedin" /><SocialIcon name="instagram" /><SocialIcon name="facebook" /><SocialIcon name="tiktok" /></div>
        <div className="footer-links"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><Link href="/agb">AGB</Link></div>
      </div>
    </footer>
  )
}

export function PhoneFab() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(window.scrollY > 80), 1800)
    const onScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.clearTimeout(timer); window.removeEventListener('scroll', onScroll) }
  }, [])
  return <a aria-label={`Agent anrufen unter ${phoneNumber}`} className={`phone-fab ${visible ? 'is-visible' : ''}`} href={phoneHref}><span className="phone-fab-icon"><Icon name="phone" /></span><span className="phone-fab-label">{phoneNumber}</span></a>
}

export function PageFrame({ children, pageClass }: { children: ReactNode; pageClass: string }) {
  useEffect(() => {
    document.body.className = `page ${pageClass}`
    return () => { document.body.className = '' }
  }, [pageClass])
  return <><a className="skip-link" href="#content">Zum Inhalt springen</a><SiteHeader /><main id="content">{children}</main><SiteFooter /><PhoneFab /></>
}
