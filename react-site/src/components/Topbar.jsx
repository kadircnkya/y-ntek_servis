import React from 'react'
import { siteConfig } from '../config.js'
import { trackPhoneClick } from '../utils/analytics.js'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="topbar-left">
          <span className="topbar-title">
            <span className="pulse-dot"></span>
            İSTANBUL'UN EN HIZLI UYDU SERVİSİ
          </span>
          <span className="topbar-divider" aria-hidden="true">|</span>
          <span className="topbar-districts">Kartal, Maltepe, Pendik, Kadıköy, Ümraniye ve Tüm İlçeler</span>
        </div>
        <div className="topbar-right">
          <span className="badge-urgent">ACİL SERVİS</span>
          <a
            href={siteConfig.phoneTel}
            onClick={trackPhoneClick}
            className="topbar-phone-link"
            title="Hemen Telefonla Arayın"
          >
            HEMEN ARAYIN: {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}

