import React from 'react'
import { siteConfig, siteServices } from '../config.js'
import { ServiceIcon } from './ServiceIcon.jsx'
import { trackWhatsAppClick } from '../utils/analytics.js'

export default function ServicesDetailSection({ onOpenBooking }) {
  return (
    <div>
      <section className="page-header-banner">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Ekmek Kırıntısı">
            <span style={{ color: '#e0f2fe' }}>Ana Sayfa</span>
            <span aria-hidden="true">/</span>
            <span>Hizmetlerimiz</span>
          </nav>
          <h1 className="page-header-title">Teknik Servis Hizmetlerimiz</h1>
          <p className="page-header-sub">
            15 yılı aşkın tecrübe, dijital sinyal bulucu ekipmanlar ve orijinal yedek parçalarla İstanbul Anadolu Yakası'nda 1 Yıl Garantili servis hizmeti.
          </p>
        </div>
      </section>

      <section className="inner-page-section">
        <div className="container">
          {siteServices.map((srv) => (
            <article key={srv.id} className="service-detail-item" id={srv.id}>
              <div className={`service-detail-icon service-v2-icon-box ${srv.color}`}>
                <ServiceIcon icon={srv.icon} />
              </div>

              <div>
                <h2 className="service-detail-title">{srv.title}</h2>
                <p className="service-detail-desc">{srv.full_desc}</p>

                <ul className="service-detail-bullets">
                  {srv.bullets.map((bullet, idx) => (
                    <li key={idx} className="bullet-item">
                      <span className={`bullet-dot ${srv.color}`}></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-detail-cta">
                <button
                  type="button"
                  onClick={() => onOpenBooking(srv.title)}
                  className="btn-detail-appointment"
                  style={{ border: 'none', cursor: 'pointer' }}
                >
                  <span>Randevu Al</span>
                  <span aria-hidden="true">→</span>
                </button>
                <a
                  href={`https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(`Merhaba Yöntek Teknik Servis, ${srv.title} hakkında bilgi ve randevu almak istiyorum.`)}`}
                  onClick={trackWhatsAppClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-detail-whatsapp"
                >
                  <span>WhatsApp'tan Yaz</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

