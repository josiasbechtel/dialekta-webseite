'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@/components/icons'
import { navItems, phoneHref, phoneNumber } from '@/lib/site'

const dialektaLogoSrc = 'data:image/webp;base64,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'

function LogoMark() {
  return <img alt="Dialekta" className="logo-img" src={dialektaLogoSrc} />
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
