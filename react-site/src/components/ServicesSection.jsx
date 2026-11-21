import React from 'react'
import { siteServices } from '../config.js'
import { ServiceIcon } from './ServiceIcon.jsx'

export default function ServicesSection({ onSelectService, onViewAllServices }) {
  return (
    <section className="services-v2" id="hizmetler">
      <div className="container">
        
        <div className="section-head-centered">
          <span className="section-pill-badge">PROFESYONEL ÇÖZÜMLER</span>
          <h2 className="section-h2-title">İSTANBUL UYDU HİZMETLERİ</h2>
          <p className="section-subtitle-lead">
            Garantili işçilik, orijinal parça ve en modern dijital sinyal ölçüm cihazlarıyla kesintisiz teknik destek.
          </p>
        </div>

        <div className="services-v2-grid">
          {siteServices.map((s) => (
            <div
              key={s.id}
              onClick={() => onSelectService && onSelectService(s.title)}
              className="service-v2-card"
              style={{ cursor: 'pointer' }}
            >
              <div className={`card-corner-accent ${s.color}`} aria-hidden="true"></div>

              <div className={`service-v2-icon-box ${s.color}`}>
                <ServiceIcon icon={s.icon} />
              </div>

              <h3 className="service-v2-card-title">{s.title}</h3>
              <p className="service-v2-desc">{s.short_desc}</p>

              <ul className="service-v2-bullet-list">
                {s.bullets.slice(0, 3).map((b, idx) => (
                  <li key={idx} className="bullet-item">
                    <span className={`bullet-dot ${s.color}`}></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            type="button"
            onClick={onViewAllServices}
            className="btn-hero-secondary"
            style={{ cursor: 'pointer' }}
          >
            <span>Tüm Hizmetlerimizi & Fiyat Detaylarını İnceleyin</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </section>
  )
}

