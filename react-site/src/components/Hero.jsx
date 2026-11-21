import React from 'react'
import { siteConfig } from '../config.js'
import { trackPhoneClick } from '../utils/analytics.js'

export default function Hero({ onOpenBooking }) {
  return (
    <section className="hero-v2" id="anasayfa">
      <div className="container hero-v2-grid">
        
        {/* Sol Kolon */}
        <div className="hero-v2-left">
          <div className="hero-pill-badge">
            <span className="pulse-dot"></span>
            İSTANBUL'UN HER YERİNE 30 DAKİKADA SERVİS
          </div>

          <h1 className="hero-v2-h1">
            YÖNTEK UYDUCU<br />
            <span className="gradient-text-blue">İSTANBUL UYDU SERVİSİ</span>
          </h1>

          <h2 className="hero-v2-subheading">Garantili Uydu Servisi</h2>

          <p className="hero-v2-desc">
            Çanak anten montajı, sinyal ayarı, merkezi uydu ve televizyon sistemlerinde <strong>kırmadan, dökmeden</strong>, profesyonel cihazlarla aynı gün garantili teknik servis.
          </p>

          {/* 2x2 Güven Mini-Kartları */}
          <div className="hero-trust-grid">
            
            <div className="trust-mini-card">
              <div className="trust-icon-box blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="trust-card-text">
                <span className="trust-card-title">Hızlı Servis</span>
                <span className="trust-card-sub">30 Dk Adresinizdeyiz</span>
              </div>
            </div>

            <div className="trust-mini-card">
              <div className="trust-icon-box orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="trust-card-text">
                <span className="trust-card-title">Sinyal Garantisi</span>
                <span className="trust-card-sub">%100 Net Görüntü</span>
              </div>
            </div>

            <div className="trust-mini-card">
              <div className="trust-icon-box green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="trust-card-text">
                <span className="trust-card-title">Uygun Fiyat</span>
                <span className="trust-card-sub">İşlem Öncesi Net Fiyat</span>
              </div>
            </div>

            <div className="trust-mini-card">
              <div className="trust-icon-box purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div className="trust-card-text">
                <span className="trust-card-title">Uzman Ekip</span>
                <span className="trust-card-sub">15+ Yıllık Tecrübe</span>
              </div>
            </div>

          </div>

          {/* Hero Butonları */}
          <div className="hero-v2-cta-row">
            <a
              href={siteConfig.phoneTel}
              onClick={trackPhoneClick}
              className="btn-hero-urgent"
              title="Hemen Arayın"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
              </svg>
              <span>HEMEN ARAYIN</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="btn-hero-secondary"
              title="Online Servis Randevusu Al"
            >
              <span>Online Randevu Al</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Sağ Kolon - Teknisyen Görseli */}
        <div className="hero-v2-right">
          <div className="hero-v2-card">
            <picture>
              <source srcSet="/assets/images/hero-technician-2x.webp 2x, /assets/images/hero-technician.webp 1x" type="image/webp" />
              <source srcSet="/assets/images/hero-technician-2x.jpg 2x, /assets/images/hero-technician.jpg 1x" type="image/jpeg" />
              <img
                src="/assets/images/hero-technician.jpg"
                alt="Yöntek Uyducu Teknisyeni Çanak Anten Sinyal Ayarı Yaparken"
                className="hero-v2-img"
                width="520"
                height="440"
                loading="eager"
              />
            </picture>

            <div className="hero-floating-badge" aria-hidden="true">
              <span className="big">7/24</span>
              <span>HIZLI</span>
              <span>SERVİS</span>
            </div>

            <div className="hero-img-overlay-bottom">
              <div className="hero-overlay-tag">
                <span className="pulse-dot"></span>
                PROFESYONEL ÖLÇÜM CİHAZLARI
              </div>
              <div className="hero-overlay-text">
                Dijital Sinyal Bulucu ile %100 Kesintisiz Net Görüntü
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
