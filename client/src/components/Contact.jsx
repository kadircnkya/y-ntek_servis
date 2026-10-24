import { useSection } from '../hooks/useSection.js'
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from './Icons.jsx'
import { SHOP, waLink } from '../config.js'
import './Contact.css'

export default function Contact() {
  const ref = useSection()
  return (
    <section id="iletisim" ref={ref} className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Kat 05 <b>· Bağlantı</b></p>
          <h2 id="contact-title" className="h2">Bize <em>ulaşın</em></h2>
          <p className="lede">Mesaj atın, sizi arayalım — ya da doğrudan dükkanımıza gelin. Yalnızca İstanbul Anadolu Yakası'na hizmet veriyoruz.</p>
        </header>

        <div className="contact-grid">
          {/* Kart: WhatsApp */}
          <a
            id="contact-wa"
            href={waLink('Merhaba, web sitenizden yazıyorum.')}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-card glass reveal"
            style={{ '--i': 0 }}
          >
            <span className="cta-icon cta-icon--wa"><WhatsAppIcon /></span>
            <span className="cta-label">WhatsApp ile yazın</span>
            <span className="cta-value">{SHOP.phonePretty}</span>
          </a>

          {/* Kart: Telefon */}
          <a
            id="contact-tel"
            href={`tel:${SHOP.phone}`}
            className="cta-card glass reveal"
            style={{ '--i': 1 }}
          >
            <span className="cta-icon cta-icon--phone"><PhoneIcon /></span>
            <span className="cta-label">Bizi arayın</span>
            <span className="cta-value">{SHOP.phonePretty}</span>
          </a>

          {/* Kart: Adres */}
          <a
            id="contact-map"
            href={SHOP.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-card glass reveal"
            style={{ '--i': 2 }}
          >
            <span className="cta-icon cta-icon--map"><MapPinIcon /></span>
            <span className="cta-label">Dükkanımız</span>
            <span className="cta-value">{SHOP.address}</span>
          </a>
        </div>

        {/* Google Maps embed — lazy loading */}
        <div className="map-wrap reveal" style={{ '--i': 3 }}>
          <iframe
            id="contact-map-iframe"
            title="Dükkan konumu"
            src={SHOP.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className="map-link"
            href={SHOP.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konumu Google Haritalar'da aç"
          >
            <span>Konuma git →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
