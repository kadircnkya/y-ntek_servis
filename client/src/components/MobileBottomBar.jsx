import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'
import { telLink, waLink } from '../config.js'
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics.js'
import './MobileBottomBar.css'

export default function MobileBottomBar() {
  return (
    <div className="m-bottom-bar" role="complementary" aria-label="Hızlı iletişim">
      <a
        id="bottom-cta-call"
        className="m-bottom-btn m-bottom-call"
        href={telLink}
        onClick={trackPhoneClick}
      >
        <PhoneIcon />
        <span>Hemen Ara</span>
      </a>
      <a
        id="bottom-cta-whatsapp"
        className="m-bottom-btn m-bottom-wa"
        href={waLink('Merhaba, web sitenizden yazıyorum.')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

