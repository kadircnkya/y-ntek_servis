import React from 'react'
import { siteConfig } from '../config.js'
import { trackPhoneClick } from '../utils/analytics.js'

export default function UrgentBanner() {
  return (
    <div className="urgent-banner-section">
      <div className="container">
        <div className="urgent-banner-card">
          <div className="urgent-banner-left">
            <div className="warning-icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <h2 className="urgent-banner-heading">
                TV EKRANINIZDA <span className="highlight-amber">"SİNYAL YOK"</span> MU YAZIYOR?
              </h2>
              <p className="urgent-banner-sub">
                Maç, dizi ve haber keyfiniz yarım kalmasın! Kartal ve tüm İstanbul genelinde mobil teknik servis ekiplerimizle 30 dakikada adresinizdeyiz.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.phoneTel}
            onClick={trackPhoneClick}
            className="btn-urgent-call-white"
            title="Acil Servis Çağır"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
            </svg>
            <span>HEMEN SERVİS ÇAĞIR</span>
          </a>
        </div>
      </div>
    </div>
  )
}

