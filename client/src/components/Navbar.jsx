import { useEffect, useRef, useState } from 'react'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'
import { site, telLink, waLink } from '../config.js'
import './Navbar.css'

const links = [
  ['Ürünler', '#urunler'],
  ['Hizmetler', '#hizmetler'],
  ['Neden Biz', '#neden-biz'],
  ['İletişim', '#iletisim'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const toggleRef = useRef(null)

  // Scroll: passive + rAF; state yalnızca eşik geçilince değişir
  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      const next = window.scrollY > 24
      setSolid((prev) => (prev === next ? prev : next))
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menü açıkken: arka plan kaymasın, Esc ile kapansın, masaüstüne geçince kapansın
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener?.('change', onMq)
    return () => {
      root.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener?.('change', onMq)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${solid || open ? 'is-solid' : ''}`}>
      <div className="nav-row">
        <a href="#top" className="nav-brand" aria-label={`${site.name}, ana sayfa`} onClick={close}>
          <img
            src="/yontek-rozet.svg"
            alt={`${site.name} Rozet Logo`}
            className="nav-rozet-logo"
            width="70"
            height="70"
          />
          <span className="nav-brand-text">
            <strong>{site.name}</strong>
            <small>{site.city && site.city !== 'Şehir' ? `${site.city} · Uydu & Çanak` : 'Uydu & Çanak Sistemleri'}</small>
          </span>
        </a>

        <div className="nav-actions">
          <nav className="nav-links" aria-label="Ana menü">
            {links.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="btn btn-primary btn-sm nav-call" href={telLink}>
            <PhoneIcon />
            <span>{site.phoneDisplay}</span>
          </a>

          <button
            ref={toggleRef}
            id="nav-toggle"
            type="button"
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`m-menu ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={open ? undefined : ''}>
        <nav aria-label="Mobil menü">
          <ol className="m-menu-list">
            {links.map(([label, href], i) => (
              <li key={href} style={{ '--i': i }}>
                <a href={href} onClick={close}>
                  <span className="m-menu-num">0{i + 1}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="m-menu-actions">
          <a className="btn btn-primary btn-block" href={telLink} onClick={close}>
            <PhoneIcon /> Hemen ara
          </a>
          <a className="btn btn-wa btn-block" href={waLink()} target="_blank" rel="noopener noreferrer" onClick={close}>
            <WhatsAppIcon /> WhatsApp'tan yaz
          </a>
        </div>
        <p className="m-menu-foot">Sinyal uzaydan gelir, çatınıza biz ulaştırırız.</p>
      </div>
    </header>
  )
}
