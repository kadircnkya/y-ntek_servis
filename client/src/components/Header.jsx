import { Mark } from './Art.jsx'
import { site, telLink } from '../config.js'

const links = [
  ['Hizmetler', '#hizmetler'],
  ['Ürünler', '#urunler'],
  ['Uydular', '#uydular'],
  ['Süreç', '#surec'],
  ['Sorular', '#sss'],
  ['İletişim', '#iletisim'],
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${site.name} ana sayfa`}>
          <Mark />
          <span className="brand-text">
            <strong>{site.name}</strong>
            <small>{site.nameSub}</small>
          </span>
        </a>
        <nav className="nav" aria-label="Ana menü">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn-signal btn-sm" href={telLink}>
          <span className="only-wide">{site.phoneDisplay}</span>
          <span className="only-narrow">Ara</span>
        </a>
      </div>
    </header>
  )
}
