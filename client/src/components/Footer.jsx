import { SHOP, telLink } from '../config.js'
import { trackPhoneClick } from '../utils/analytics.js'
import './Footer.css'

const year = new Date().getFullYear()

const navLinks = [
  { href: '#urunler', label: 'Ürünler' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#neden-biz', label: 'Neden Biz' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        {/* Logo + slogan */}
        <div className="footer-brand">
          <a href="#top" className="footer-logo" aria-label={`${SHOP.name} anasayfaya dön`}>
            <img
              src="/yontek-rozet.svg"
              alt={`${SHOP.name} Rozet Logo`}
              className="footer-rozet-logo"
              width="56"
              height="56"
            />
            <div className="footer-brand-text">
              <strong>{SHOP.name}</strong>
              <small>Teknik Servis · Uydu &amp; Çanak</small>
            </div>
          </a>
          <p className="footer-tagline">Sinyal uzaydan gelir, çatınıza biz ulaştırırız.</p>
        </div>

        {/* Hızlı linkler */}
        <nav className="footer-nav" aria-label="Alt menü">
          <h3>Hızlı bağlantılar</h3>
          <ul>
            {navLinks.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* İletişim özet */}
        <div className="footer-contact">
          <h3>İletişim</h3>
          <p>
            <a href={telLink} onClick={trackPhoneClick}>
              {SHOP.phonePretty}
            </a>
          </p>
          <p>{SHOP.address}</p>
          <p>{SHOP.city}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} {SHOP.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
