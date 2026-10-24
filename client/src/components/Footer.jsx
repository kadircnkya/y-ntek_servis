import { LogoIcon } from './Icons.jsx'
import { SHOP } from '../config.js'
import './Footer.css'

const year = new Date().getFullYear()

const navLinks = [
  { href: '#urunler', label: 'Ürünler' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#neden-biz', label: 'Neden biz' },
  { href: '#yorumlar', label: 'Yorumlar' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        {/* Logo + slogan */}
        <div className="footer-brand">
          <a href="#" className="footer-logo" aria-label="Anasayfaya dön">
            <LogoIcon />
            <span>{SHOP.name}</span>
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
          <p>{SHOP.phonePretty}</p>
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
