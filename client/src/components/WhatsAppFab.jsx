import { WhatsAppIcon } from './Icons.jsx'
import { waLink } from '../config.js'
import { trackWhatsAppClick } from '../utils/analytics.js'
import './WhatsAppFab.css'

export default function WhatsAppFab() {
  return (
    <a
      id="whatsapp-fab"
      className="wa-fab"
      href={waLink('Merhaba, web sitenizden yazıyorum.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      onClick={trackWhatsAppClick}
    >
      <WhatsAppIcon />
      <span className="wa-fab-pulse" aria-hidden="true" />
    </a>
  )
}
