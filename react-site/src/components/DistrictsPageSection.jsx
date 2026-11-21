import React from 'react'
import { allDistricts, anatolianDistricts } from '../config.js'

export default function DistrictsPageSection({ onSelectDistrict }) {
  return (
    <div>
      <section className="page-header-banner">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Ekmek Kırıntısı">
            <span style={{ color: '#e0f2fe' }}>Ana Sayfa</span>
            <span aria-hidden="true">/</span>
            <span>Hizmet Bölgeleri</span>
          </nav>
          <h1 className="page-header-title">İstanbul Hizmet Bölgelerimiz</h1>
          <p className="page-header-sub">
            Kartal merkezli donanımlı mobil araçlarımızla İstanbul Anadolu Yakası'nın tüm ilçe ve mahallelerine 30 dakikada ulaşıyoruz.
          </p>
        </div>
      </section>

      <section className="inner-page-section">
        <div className="container">
          
          <div className="section-head-centered">
            <span className="section-pill-badge">MOBİL EKİPLERİMİZ</span>
            <h2 className="section-h2-title">ANADOLU YAKASI HIZLI SERVİS HATLARI</h2>
            <p className="section-subtitle-lead">
              Aşağıdaki ilçelerde her an hazır bekleyen gezici ustalarımızla en geç 30-45 dakikada adresinizdeyiz.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '60px' }}>
            {Object.entries(anatolianDistricts).map(([distName, timeDesc]) => (
              <div
                key={distName}
                onClick={() => onSelectDistrict(distName)}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #bfdbfe',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#0f172a', marginBottom: '4px' }}>
                    {distName} Uydu Servisi
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 700 }}>
                    ⚡ {timeDesc}
                  </span>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#eff6ff',
                    color: '#2563eb',
                    fontWeight: 900
                  }}
                >
                  →
                </span>
              </div>
            ))}
          </div>

          <div className="section-head-centered">
            <span className="section-pill-badge">GENİŞ HİZMET AĞI</span>
            <h2 className="section-h2-title">İSTANBUL GENELİ 39 İLÇE</h2>
            <p className="section-subtitle-lead">
              İstanbul'un hangi ilçesinde olursanız olun, profesyonel uydu teknik servisimiz bir telefon uzağınızda.
            </p>
          </div>

          <div className="districts-v2-grid">
            {allDistricts.map((ilceName) => {
              const isAnadolu = Boolean(anatolianDistricts[ilceName])
              return (
                <div
                  key={ilceName}
                  onClick={() => onSelectDistrict(ilceName)}
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

        </div>
      </section>
    </div>
  )
}

