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
  return <><SiteHeader /><main id="content">{children}</main><SiteFooter /><PhoneFab /></>
}
