'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@/components/icons'
import { navItems, phoneHref, phoneNumber } from '@/lib/site'

const logoSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAAsCAYAAAB/sLoGAAAbQElEQVR4nO1dd3xVRb7/ztyamx5SSCMk9NBR2iqIKCgCAiqgYlkRfbqK+vbxXFefuKur63NXn2VxcRWwAYIroAIK0muQDlKTAOkh/abePu+P0+a0m4C6z7frfD6He2d+bc7M9/x+M78zNxDGGKRSVl3PPt64Ex9t3IX80kr4A0Eo1J+LqhDTyg+su4M2TMkkbFVFCGeCGBDNxoAANosVOWlJmHnNUMwePwpZKYkyA5FAt3rHfvbCh6txpKAYPBB/LlzRjfsPCLZ/ONBI+ybCAi2MDY1cr4xUzJ81GVNHDoHLaSeEMYa1uw+xXy/4GAVlF3/2bNryTwU0kfBjAE2nV6kTQpCZlICX77sVd4wZTujFOjd7/sPVPwOOL4S7jBt+JN0m+k3JGkI4PiJdZv0iasCpdBnZIAZ6+TZFDwNQUlOPF1esR2FFFbOuzzuCA2fO/2sC7qfmxToq93/uxQx0afUQ9XcG4ERJOVbtOQzrB1/v+Ndaw/3UgBaWTAy/6nj+UeFSy9MO0Iz68MnO/bAeLSgO0+N/kvLPCLT29HQUbIbACdNmyk9MgcZ/P11eBWuzxxOm5//Pyk8NXB2V+1G8WDg7Rnq1oNF8IapGc/AZgY3jbfX7YdX3+idQCAH65gA56cJiIL8YOH3BhLfdhksqlBDYrBZZTSAYQjAU6rj+y/BidqsVLqcdRFyce/x+tHl9JipMDIT1YmLlhwqXHfRqsjxRy1wW6KJdTricDnMGxuAPBNHm9cMXCGgmrQMlJx2YPQVwOYV6fSPw5nKgolbhCfdEf4/SPycTv5p2vVz/YvchrMs7Gl7oe4bLYX26YfaE0Yhw2AEA6/cdxfIteQgEg5zspYZLsXJZHs2kbgo0nk6MZTivd8mgc9ptePy2G3Hn9VeF5WMshGCIwev340xxBf725RbsOnYGoY5sWobmKoADgPgY4BeDgFWbOaYfJ3RmdU7Cg5PGyi2lVXXMFHTfN3SKH107J+LWUVcixhVBAKC8pp6t3P4tAtqH1exBMwAaJVRuZ4B+s2gEGq0+3Q7VzAOaANIk1F4y6CghSImPRZ+stA7P+pW9cjBr3FWob2phzy76FCu25KHG3WTMTAA0tanbGAPczfjeQLucdRkJx9K+F2t3XWYkLOW5TNdRZnqFtqTYaJxd9BLiIl0EAA4VFLHRT76CFq9XragjIZKvaz0ar8N0Laf3fFTb7R+zxEdHkr888UuyfP6juHH4QDWRn9w9R4FT5wF/APD5ge8Kge0HL9+wDjjEqFEhdUgZUVeNeDqSjDXlkXTwNoxkDNoIAeVAQKhI5/uksq+9ODo1+SQwaAvHT4XvlP4wG4l3Pt/Edhw7o2qzWigiHA6kdorDhOEDMaxPN3kUrr+yH+mTlcaeW/IZFq3fxg2yWBqagA/WAr2ygBADCoqBQBCXVAyBcKkyJoRwHjOcmXZ3m5p2o9AFkzaV9zGxowV4OO/E962dcKnmJ8ZyXNv3Bl2rx8f2nijAsk17DOkWSvHqynUY0jObfTJ/LjonxBIASE9KIC89MJO1eLz4ZEueXtDdDHx7ouMdCQeES5a7BB6z3aQZXedxTewRqpFtB2i8LV2fJI+D8MAxAqRB2sMUaFrdJrRLBl2IMdS6m3CuvIoBgMfnR1ObmOuzWYHoSKClVQiLAIIshKZWL7YfOY3hD83HB08/xMYM6kMAIDk+hjw89Xp28Ox55JdeVDplsWBw9y5y3R8I4kghl8Q2ePI7J8QiMykBA7tnYWBOJiiluHCxGnmnClFaVYeS6loEgiFkJicgrVO8LHe2tBL1TS1hdYfzYpQQZCQJOgd0y0C/rpmwWSkqahtwsKAIheVVuFjfiPrmVmMb2neeEgM/UeLkUUrQt0s6XE673B5iDMVVdbjY0AS7zYqB2RnoFBMFC1VWTpFOO4b2zEabzycbL6isQW1Ts2JL7AshBEmxUUiNi8HgnEz075IOl8OG4pp67C8sRuHFWpTU1SMQZEiMiUJ2cidQKiioaGhESV2D+ErV+B4uy9N5/X68vWaT4NnEm66qdwvErFTg1uuAL7YDp89DO0vFVbX4zTvL8d5/zmH9c7oQABg9oDeZNmooe2X5WpkvPtqFb995QRYuqqxhXe94QtMTgRztcmLGNcNx9w1XYUiPbES7nDponC2pYIu/3oEVW/Pwb5PG4qk7J8s80+a/wdbs5taLlxACe3dJw/RrhuK2UUPRPT0FLoddx1njbmKbj5zCe19tx7ZjZxAIhtr3rhLONV5mxuiheOPB25EcFyNr2HfmHJv7t09Q1diMlPgYfPPCE4gVNxBS6ZmWQrb+4dcqE7P+ZwlbtnO/ykaMKwKTruiHe8cMx8ie2YiO0I/lydJKtnLvYSzZ8S3G5HbHG/fcgrhIYdf98peb2fzPvoZfvkct8ITPjoGuU6yQOzt8BiwQRFVDI6oaGjVPLACHTeB12GE2sgfPXMCiddvw+tx75LZ7xl8NHnRaUbvNakhIiI7Eb2fdjPtvugbx0ZGmU9kzM5U8e/dUNrRXjjDpXJGeUtNispO7un8PvHjfbRjdv1dYBYmx0WTmNcMwvHcOe2XlV/jruq3qe9GGJaVnAFH6elXf7nhtzgwV4BpbPey3H67BoXMlYAAIJbBZOzallIoLe7EfdpsVT04dhzljRyKFs6EtuRmdye+mT8DQHlnsZFmlkEgXi4VSgFIhR2MYbgUQdqyH3TKBO24ACkqERT4/+ZFO4Jaxwk7zWH67qoKhEJZv3ovf3zedxUYJT0jf7AySnZbEzldUSz00kFS32awWzJk0BvNm3mQ4QGU19cxCCTonxBGhmw5y6+ihaG7zqBNWhuFNa1rtcdITE/Dqg3dgWO8clWBzm4edKCpHKBRCTmoyUuKVyeuakkjenns3KhvcbPXew1CDzsAet0vMSIzHn2dPR6p4L1KZ8se3se3EWaFCKUIgaPX6ADDmcjhUvC1er+q+A2ACQETjj028Fs/ccoPhQJTXuxkApMXHyvSJg3LJxEG5akZKAAuXEJHGTXqwSXvhlQDIzQa8fvUi8r4pAvDyjgPJ8UCtG4iJEkAnFacdmHc3UFMPvL9Wp7rK3YRvDhzDbWOGy22PTBmHeQuXm3ZH7pNYftGvB56ZdbOKfPDsebbwy61Yl3cYtY3NIIQgPTGB3TZ6GO678Wr07pJGogxChqLfAAFyk9L+6M3XqQB3rqKavb56I1ZsWIPYA=='

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
        <Link aria-label="Dialekta Startseite" className="brand brand-logo" href="/"><img alt="Dialekta" src={logoSrc} /></Link>
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
