import { site, telLink } from '../config.js'

const links = [
  ['Ürünler', '#urunler'],
  ['Hizmetler', '#hizmetler'],
  ['Neden Biz', '#neden-biz'],
  ['İletişim', '#iletisim'],
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${site.name} ana sayfa`}>
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
