import React from 'react'
import { siteConfig } from '../config.js'
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics.js'

export default function PreFooterBanner() {
  return (
    <div className="container" style={{ marginBottom: '40px' }}>
      <div className="pre-footer-banner">
        <div>
          <h3 className="pre-footer-heading">İSTANBUL'UN EN GÜÇLÜ TEKNİK SERVİS EKİBİ!</h3>
          <p style={{ color: '#cbd5e1', marginTop: '6px' }}>
            Uydunuzda sinyal mi gitti? Çanak anteniniz mi yerinden oynadı? Bize anında ulaşın.
          </p>
        </div>
        <div className="pre-footer-buttons">
          <a
            href={siteConfig.phoneTel}
            onClick={trackPhoneClick}
            className="btn-prefooter-call"
            title="Hemen Usta Çağır"
          >
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor' }}>
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
            </svg>
            <span>Hemen Usta Çağır</span>
          </a>
          <a
            href={siteConfig.whatsappUrl}
            onClick={trackWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-prefooter-whatsapp"
            title="WhatsApp Konum At"
          >
            <span>WhatsApp Konum At</span>
          </a>
        </div>
      </div>
    </div>
  )
}

