'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@/components/icons'
import { navItems, phoneHref, phoneNumber } from '@/lib/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link aria-label="Dialekta Startseite" className="brand" href="/"><span className="brand-text">Dialekta</span></Link>
        <button aria-controls="navigation" aria-expanded={open} className="nav-toggle" onClick={() => setOpen((value) => !value)} type="button">Menü</button>
        <nav aria-label="Hauptnavigation" className={`nav-links ${open ? 'is-open' : ''}`} id="navigation">
          {navItems.map((item) => item.children ? (
            <div className="nav-item has-submenu" key={item.label}>
              <Link className={item.children.some((child) => child.href === pathname) ? 'is-active' : ''} href={item.href}>{item.label}</Link>
              <div className="submenu" aria-label={`${item.label} Untermenü`}>
                {item.children.map((child) => <Link className={pathname === child.href ? 'is-active' : ''} href={child.href} key={child.href}>{child.label}</Link>)}
              </div>
            </div>
          ) : <Link className={pathname === item.href ? 'is-active' : ''} href={item.href} key={item.href}>{item.label}</Link>)}
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
        <div aria-label="Social Links" className="social-links"><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">TikTok</a></div>
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
