// Hafif, elle çizilmiş SVG ikonlar. Görsel dosyası indirmez, renkler currentColor / CSS'ten gelir.

export function LogoMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <radialGradient id="lm-planet" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#9af2ff" />
          <stop offset="0.45" stopColor="#22b5ff" />
          <stop offset="1" stopColor="#0b2a6b" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="9" fill="url(#lm-planet)" />
      <ellipse cx="20" cy="20" rx="17" ry="6.2" fill="none" stroke="#5fe4ff" strokeWidth="1.4" transform="rotate(-24 20 20)" opacity=".9" />
      <circle cx="34.2" cy="13.6" r="2.6" fill="#ffa24c" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43a9.38 9.38 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.04.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.95 1.52 5.67L.58 23.7l6.1-1.6a11.3 11.3 0 0 0 5.36 1.37h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  )
}

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

/* Küçük uydu: yörünge motifi için */
export function SatelliteGlyph(props) {
  return (
    <svg viewBox="0 0 64 32" aria-hidden="true" {...props}>
      <g stroke="#5fe4ff" strokeWidth="1">
        <rect x="1" y="10" width="20" height="12" rx="1" fill="rgba(34,181,255,.35)" />
        <rect x="43" y="10" width="20" height="12" rx="1" fill="rgba(34,181,255,.35)" />
        <path d="M8 10v12M14 10v12M50 10v12M56 10v12" opacity=".6" />
        <path d="M21 16h4M39 16h4" />
      </g>
      <rect x="25" y="8" width="14" height="16" rx="2.5" fill="#ffcf8a" stroke="#ffa24c" />
      <path d="M32 8V3" stroke="#eaf2ff" strokeWidth="1.2" />
      <circle cx="32" cy="2.5" r="1.8" fill="#eaf2ff" />
    </svg>
  )
}

/* ─── Ürün hologramları: tel kafes çizim + yarı saydam dolgu ─── */
const holo = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }
const fillSoft = 'rgba(95,228,255,.10)'

const productArt = {
  dish: (
    <g {...holo}>
      <ellipse cx="54" cy="52" rx="30" ry="34" transform="rotate(-28 54 52)" fill={fillSoft} />
      <ellipse cx="54" cy="52" rx="20" ry="23" transform="rotate(-28 54 52)" opacity=".45" />
      <ellipse cx="54" cy="52" rx="10" ry="11.5" transform="rotate(-28 54 52)" opacity=".3" />
      <path d="M56 54l30 16" />
      <rect x="84" y="64" width="12" height="9" rx="2" transform="rotate(28 90 68)" fill={fillSoft} />
      <path d="M54 86v22M42 108h24" />
      <path d="M92 30q8 6 6 16M98 22q12 10 9 26" opacity=".6" />
    </g>
  ),
  lnb: (
    <g {...holo}>
      <path d="M30 46h40l14-10v48l-14-10H30z" fill={fillSoft} />
      <path d="M30 46v28M70 46v28" opacity=".5" />
      <rect x="18" y="50" width="12" height="20" rx="2" />
      <path d="M50 74v18M42 92h16M58 74v12h10" opacity=".7" />
      <path d="M90 44q8 16 0 32M98 38q12 22 0 44" opacity=".55" />
    </g>
  ),
  receiver: (
    <g {...holo}>
      <rect x="14" y="44" width="92" height="34" rx="5" fill={fillSoft} />
      <path d="M14 70h92" opacity=".4" />
      <rect x="22" y="52" width="26" height="10" rx="2" />
      <text x="26" y="60" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">4K</text>
      <circle cx="90" cy="57" r="5" />
      <circle cx="74" cy="57" r="2" fill="currentColor" />
      <path d="M24 78v6M96 78v6" />
      <path d="M48 36l12-10 12 10" opacity=".5" />
    </g>
  ),
  cable: (
    <g {...holo}>
      <path d="M16 84c18 0 18-46 40-46s18 40 36 40" fill="none" />
      <path d="M16 90c22 0 22-46 40-46s18 40 36 40" opacity=".35" />
      <rect x="88" y="70" width="18" height="12" rx="2" fill={fillSoft} />
      <path d="M106 73h6M106 79h6" />
      <rect x="6" y="80" width="12" height="14" rx="2" fill={fillSoft} />
      <circle cx="56" cy="40" r="3" fill="currentColor" opacity=".8" />
    </g>
  ),
  multiswitch: (
    <g {...holo}>
      <rect x="24" y="34" width="72" height="52" rx="6" fill={fillSoft} />
      {[38, 52, 66, 80].map((x) => (
        <circle key={x} cx={x} cy="28" r="3" />
      ))}
      {[34, 46, 58, 70, 82].map((x) => (
        <path key={x} d={`M${x} 86v10`} />
      ))}
      <path d="M36 50h48M36 60h48M36 70h30" opacity=".45" />
      <circle cx="84" cy="70" r="2.5" fill="currentColor" />
    </g>
  ),
  bracket: (
    <g {...holo}>
      <path d="M26 20v84" />
      <rect x="18" y="26" width="16" height="22" rx="2" fill={fillSoft} />
      <rect x="18" y="76" width="16" height="22" rx="2" fill={fillSoft} />
      <path d="M34 37h40l16 14M34 87h40l16-14" />
      <path d="M90 51v22" />
      <circle cx="90" cy="62" r="7" fill={fillSoft} />
      <path d="M26 37h0M26 87h0" strokeWidth="4" />
    </g>
  ),
  tv: (
    <g {...holo}>
      <rect x="14" y="26" width="92" height="54" rx="4" fill={fillSoft} />
      <path d="M22 34l20 0M22 72l76 0" />
      <path d="M50 80l-6 14h32l-6-14M38 94h44" />
      <path d="M30 60l16-14 14 10 16-16 10 10" />
    </g>
  ),
  led: (
    <g {...holo}>
      <rect x="14" y="26" width="92" height="54" rx="4" />
      <path d="M14 26l92 54M106 26L14 80" />
      <circle cx="60" cy="53" r="12" fill={fillSoft} />
      <path d="M44 94h32M60 80v14" />
    </g>
  ),
  camera: (
    <g {...holo}>
      <path d="M18 24h20v14H18z" fill={fillSoft} />
      <path d="M38 31h14" />
      <path d="M52 40l36-10 12 26-36 10z" fill={fillSoft} />
      <circle cx="82" cy="56" r="8" />
      <path d="M62 70v18M52 94h20" />
    </g>
  ),
}

export function ProductHologram({ kind }) {
  return (
    <svg viewBox="0 0 120 120" className="holo-svg" aria-hidden="true">
      {productArt[kind] || productArt.dish}
    </svg>
  )
}

/* ─── Hizmet ikonları ─── */
const serviceIcons = {
  mount: <path d="M4 20h16M7 20V10l5-5 5 5v10M10 20v-5h4v5M18 4l2-2M16 6a3 3 0 0 0 4 0" />,
  aim: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  repair: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />,
  central: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M12 3V1" />
    </>
  ),
}

export function ServiceIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {serviceIcons[name] || serviceIcons.aim}
    </svg>
  )
}

/* ─── Aliases ─── */
export { PinIcon as MapPinIcon }
export { LogoMark as LogoIcon }
