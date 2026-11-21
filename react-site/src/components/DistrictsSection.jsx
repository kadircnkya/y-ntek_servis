import React from 'react'
import { allDistricts, anatolianDistricts } from '../config.js'

export default function DistrictsSection({ onSelectDistrict, onViewAllDistricts }) {
  const previewDistricts = allDistricts.slice(0, 15)

  return (
    <section className="districts-section-v2" id="bolgeler">
      <div className="container">
        
        <div className="section-head-centered">
          <span className="section-pill-badge">GENİŞ SERVİS AĞI</span>
          <h2 className="section-h2-title">İSTANBUL HİZMET BÖLGELERİ</h2>
          <p className="section-subtitle-lead">
            Anadolu Yakası başta olmak üzere tüm İstanbul genelinde 30 dakikada adrese ulaşan mobil uydu teknik servis ağı.
          </p>
        </div>

        <div className="districts-v2-grid">
          {previewDistricts.map((ilceName) => {
            const isAnadolu = Boolean(anatolianDistricts[ilceName])
            return (
              <div
                key={ilceName}
                onClick={() => onSelectDistrict && onSelectDistrict(ilceName)}
                className={`district-v2-card ${isAnadolu ? 'featured' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <svg className="district-pin-icon" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>{ilceName} Uydu Servisi</span>
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button
            type="button"
            onClick={onViewAllDistricts}
            className="btn-hero-secondary"
            style={{ cursor: 'pointer' }}
          >
            <span>Tüm 39 İlçeyi ve Servis Sürelerini Görüntüleyin</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </section>
  )
}

