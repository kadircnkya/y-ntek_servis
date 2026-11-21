import React from 'react'
import { siteConfig } from '../config.js'
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics.js'

export default function MobileBottomBar() {
  return (
    <aside className="mobile-fixed-action-bar" aria-label="Mobil Hızlı Aksiyon">
      <div className="mobile-action-split">
        <a
          href={siteConfig.phoneTel}
          onClick={trackPhoneClick}
          className="btn-mobile-split-call"
          title="Hemen Ara"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
          </svg>
          <span>HEMEN ARA</span>
        </a>

        <a
          href={siteConfig.whatsappUrl}
          onClick={trackWhatsAppClick}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mobile-split-whatsapp"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.14c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.32c-.84-1.34-1.28-2.9-1.28-4.51 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.21-8.22 8.21zm4.5-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
          </svg>
          <span>WHATSAPP</span>
        </a>
      </div>
    </aside>
  )
}
