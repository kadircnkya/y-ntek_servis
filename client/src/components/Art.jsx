// Tüm görseller elle çizilmiş SVG'lerdir. Renkler styles.css içindeki değişkenlerden gelir.

export function Satellite({ x = 0, y = 0, scale = 1, rotate = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      {/* güneş panelleri */}
      <g fill="var(--sky-panel)" stroke="var(--ink)" strokeWidth="1.5">
        <rect x="-74" y="-9" width="50" height="18" rx="1.5" />
        <rect x="24" y="-9" width="50" height="18" rx="1.5" />
      </g>
      <g stroke="var(--ink)" strokeWidth="1" opacity=".55">
        <path d="M-58 -9v18M-41 -9v18M42 -9v18M58 -9v18" />
      </g>
      <path d="M-24 0h-0M24 0h0" stroke="var(--ink)" strokeWidth="2" />
      {/* gövde */}
      <rect x="-24" y="-16" width="48" height="32" rx="4" fill="var(--brass)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M-24 -4h48M-24 6h48" stroke="var(--ink)" strokeWidth="1" opacity=".4" />
      {/* küçük anten */}
      <path d="M0 -16v-10" stroke="var(--ink)" strokeWidth="2" />
      <ellipse cx="0" cy="-30" rx="10" ry="4" fill="var(--zinc)" stroke="var(--ink)" strokeWidth="1.5" />
    </g>
  )
}

/* Ana sahnedeki çanak. turn: 0 (yana dönük) → 1 (uyduya hizalı) */
export function HeroDish({ turn = 0, locked = false }) {
  const sx = 0.38 + 0.62 * turn // dönerken yatayda daralır
  const tilt = -26 + 26 * turn
  const lnbX = (1 - sx) * 130 // yana dönünce LNB yan tarafa çıkar
  const lnbY = 20
  const armEnd = { x: lnbX, y: lnbY }
  // LNB ucunun (boynuz) sahnedeki konumu: çanak grubunun döndürmesi uygulanır
  const rad = (tilt * Math.PI) / 180
  const hx = lnbX
  const hy = lnbY - 18
  const beamEnd = {
    x: 330 + hx * Math.cos(rad) - hy * Math.sin(rad),
    y: 300 + hx * Math.sin(rad) + hy * Math.cos(rad),
  }
  return (
    <svg viewBox="0 0 640 640" className="hero-dish" role="img" aria-label="Uyduya doğru dönen çanak anten çizimi">
      {/* yörünge çizgileri */}
      <g fill="none" stroke="var(--ink)" strokeWidth="1" opacity=".16">
        <circle cx="330" cy="300" r="250" />
        <circle cx="330" cy="300" r="320" />
        <circle cx="330" cy="300" r="390" />
      </g>

      {/* uydu ve sinyal huzmesi */}
      <Satellite x={520} y={86} scale={0.9} rotate={-14} />

      {/* direk ve plaka */}
      <g>
        <rect x="316" y="330" width="28" height="258" rx="3" fill="var(--zinc-dark)" />
        <rect x="316" y="330" width="9" height="258" rx="3" fill="var(--zinc)" />
        <rect x="262" y="584" width="136" height="14" rx="3" fill="var(--ink)" />
        <circle cx="278" cy="591" r="3.5" fill="var(--zinc)" />
        <circle cx="382" cy="591" r="3.5" fill="var(--zinc)" />
        {/* döner bilezik */}
        <rect x="310" y="372" width="40" height="12" rx="3" fill="var(--brass)" />
        <rect x="310" y="446" width="40" height="12" rx="3" fill="var(--brass)" />
      </g>

      {/* çanak */}
      <g transform={`translate(330 300) rotate(${tilt})`}>
        <g transform={`scale(${sx} 1)`}>
          {/* arka kabuk */}
          <ellipse cx="14" cy="8" rx="205" ry="205" fill="var(--zinc-dark)" />
          {/* ön yüz */}
          <ellipse cx="0" cy="0" rx="205" ry="205" fill="var(--zinc)" stroke="var(--zinc-dark)" strokeWidth="7" />
          <ellipse cx="-10" cy="-8" rx="176" ry="176" fill="var(--zinc-light)" />
          {/* parabol halkaları */}
          <g fill="none" stroke="var(--zinc-dark)" strokeWidth="1.6" opacity=".55">
            <ellipse cx="-14" cy="-10" rx="132" ry="132" />
            <ellipse cx="-18" cy="-12" rx="88" ry="88" />
            <ellipse cx="-22" cy="-14" rx="44" ry="44" />
          </g>
          {/* kaburga çizgileri */}
          <g stroke="var(--zinc-dark)" strokeWidth="1.2" opacity=".4">
            <path d="M-22 -14L-190 -92M-22 -14L-92 -190M-22 -14L80 -168M-22 -14L168 -50M-22 -14L172 74M-22 -14L72 168M-22 -14L-100 172M-22 -14L-186 80" />
          </g>
        </g>
        {/* LNB kolu: dönmeyen kısım */}
        <path
          d={`M${lnbX * 0.1} 196 L${armEnd.x} ${armEnd.y + 16}`}
          stroke="var(--zinc-dark)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={`M${lnbX * 0.1} 196 L${armEnd.x} ${armEnd.y + 16}`}
          stroke="var(--zinc-light)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <g transform={`translate(${armEnd.x} ${armEnd.y})`}>
          <rect x="-13" y="-4" width="26" height="30" rx="5" fill="var(--brass)" stroke="var(--ink)" strokeWidth="2" />
          <rect x="-8" y="-16" width="16" height="14" rx="3" fill="var(--zinc)" stroke="var(--ink)" strokeWidth="2" />
          <circle cx="0" cy="-9" r="3" fill="var(--ink)" />
          <path d="M-13 12h26" stroke="var(--ink)" strokeWidth="1.5" opacity=".5" />
          {/* sinyal halkaları */}
          {locked && (
            <g fill="none" stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round" className="lock-rings">
              <path d="M-26 -22a34 34 0 0 1 52 0" />
              <path d="M-40 -34a56 56 0 0 1 80 0" />
            </g>
          )}
        </g>
      </g>

      {/* sinyal huzmesi: uydudan LNB'ye */}
      <line
        x1="498"
        y1="112"
        x2={beamEnd.x}
        y2={beamEnd.y}
        className={`beam ${locked ? 'beam-locked' : ''}`}
        stroke={locked ? 'var(--signal)' : 'var(--ink)'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 12"
        opacity={0.3 + 0.7 * turn}
      />
    </svg>
  )
}

/* Küçük logo çanağı */
export function Mark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="var(--ink)" />
      <ellipse cx="18" cy="21" rx="12" ry="12" transform="rotate(-28 18 21)" fill="var(--zinc)" />
      <ellipse cx="16" cy="19" rx="8" ry="8" transform="rotate(-28 16 19)" fill="var(--zinc-light)" />
      <path d="M27 14l5-6" stroke="var(--brass)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="33" cy="7" r="3.2" fill="var(--signal)" />
    </svg>
  )
}

/* Ürün illüstrasyonları (teknik çizim tarzı) */
export function ProductArt({ kind }) {
  const common = { viewBox: '0 0 280 200', className: 'product-art', 'aria-hidden': true }
  switch (kind) {
    case 'dish':
      return (
        <svg {...common}>
          <ellipse cx="150" cy="104" rx="76" ry="76" fill="var(--zinc-dark)" />
          <ellipse cx="140" cy="96" rx="76" ry="76" fill="var(--zinc)" stroke="var(--zinc-dark)" strokeWidth="4" />
          <ellipse cx="134" cy="92" rx="60" ry="60" fill="var(--zinc-light)" />
          <g fill="none" stroke="var(--zinc-dark)" opacity=".5">
            <ellipse cx="130" cy="88" rx="40" ry="40" />
            <ellipse cx="127" cy="85" rx="20" ry="20" />
          </g>
          <path d="M140 168L120 104" stroke="var(--zinc-dark)" strokeWidth="6" strokeLinecap="round" />
          <rect x="112" y="92" width="16" height="20" rx="4" fill="var(--brass)" stroke="var(--ink)" strokeWidth="1.5" />
          <rect x="132" y="168" width="16" height="22" fill="var(--zinc-dark)" />
          <rect x="116" y="188" width="48" height="6" rx="2" fill="var(--ink)" />
          <path d="M26 40h34M26 40v12M60 40v12" stroke="var(--ink)" strokeWidth="1" opacity=".5" fill="none" />
          <text x="43" y="34" textAnchor="middle" fontSize="10" fill="var(--ink)" opacity=".7">çap</text>
        </svg>
      )
    case 'lnb':
      return (
        <svg {...common}>
          <g transform="translate(140 100)">
            <rect x="-26" y="-6" width="52" height="64" rx="10" fill="var(--brass)" stroke="var(--ink)" strokeWidth="2" />
            <rect x="-17" y="-40" width="34" height="36" rx="7" fill="var(--zinc)" stroke="var(--ink)" strokeWidth="2" />
            <circle cx="0" cy="-22" r="8" fill="var(--ink)" />
            <circle cx="0" cy="-22" r="3.5" fill="var(--zinc)" />
            <path d="M-26 20h52M-26 38h52" stroke="var(--ink)" strokeWidth="1.2" opacity=".35" />
            <g fill="var(--zinc-dark)" stroke="var(--ink)" strokeWidth="1.5">
              <rect x="-18" y="58" width="10" height="22" rx="2" />
              <rect x="8" y="58" width="10" height="22" rx="2" />
            </g>
            <g fill="var(--zinc-light)" stroke="var(--ink)" strokeWidth="1">
              <rect x="-17" y="76" width="8" height="6" />
              <rect x="9" y="76" width="8" height="6" />
            </g>
          </g>
        </svg>
      )
    case 'receiver':
      return (
        <svg {...common}>
          <rect x="30" y="76" width="220" height="62" rx="8" fill="var(--ink)" />
          <rect x="30" y="76" width="220" height="12" rx="8" fill="var(--ink-soft)" />
          <rect x="46" y="100" width="72" height="22" rx="3" fill="var(--sky-panel)" />
          <text x="82" y="116" textAnchor="middle" fontSize="13" fill="var(--ink)" fontWeight="700">12:30</text>
          <circle cx="206" cy="108" r="6" fill="var(--signal)" />
          <circle cx="226" cy="108" r="4" fill="var(--zinc-dark)" />
          <g fill="var(--ink)">
            <rect x="48" y="138" width="14" height="8" rx="1" />
            <rect x="218" y="138" width="14" height="8" rx="1" />
          </g>
          <g stroke="var(--zinc-dark)" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M140 76V54M126 54h28" />
          </g>
        </svg>
      )
    case 'cable':
      return (
        <svg {...common}>
          <g fill="none" stroke="var(--ink)" strokeWidth="9" strokeLinecap="round">
            <ellipse cx="130" cy="104" rx="70" ry="52" />
            <ellipse cx="130" cy="104" rx="52" ry="36" />
            <ellipse cx="130" cy="104" rx="34" ry="20" />
          </g>
          <g fill="none" stroke="var(--zinc)" strokeWidth="2.5" strokeLinecap="round" opacity=".7">
            <ellipse cx="130" cy="104" rx="70" ry="52" />
            <ellipse cx="130" cy="104" rx="52" ry="36" />
            <ellipse cx="130" cy="104" rx="34" ry="20" />
          </g>
          <path d="M200 104H252" stroke="var(--ink)" strokeWidth="9" strokeLinecap="round" />
          <rect x="246" y="94" width="22" height="20" rx="3" fill="var(--brass)" stroke="var(--ink)" strokeWidth="1.5" />
          <path d="M252 94v20M258 94v20" stroke="var(--ink)" strokeWidth="1" opacity=".5" />
        </svg>
      )
    case 'multiswitch':
      return (
        <svg {...common}>
          <rect x="40" y="52" width="200" height="104" rx="8" fill="var(--zinc)" stroke="var(--zinc-dark)" strokeWidth="3" />
          <rect x="40" y="52" width="200" height="14" rx="8" fill="var(--zinc-dark)" />
          <g fill="var(--ink)">
            {[0, 1, 2, 3].map((i) => (
              <rect key={`t${i}`} x={64 + i * 44} y="40" width="14" height="14" rx="2" />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect key={`b${i}`} x={54 + i * 31} y="154" width="12" height="14" rx="2" />
            ))}
          </g>
          <g fill="var(--brass)">
            {[0, 1, 2, 3].map((i) => (
              <circle key={`c${i}`} cx={71 + i * 44} cy="47" r="3" />
            ))}
          </g>
          <rect x="62" y="86" width="156" height="42" rx="3" fill="var(--zinc-light)" stroke="var(--zinc-dark)" />
          <path d="M72 100h60M72 114h92" stroke="var(--ink)" strokeWidth="1.2" opacity=".4" />
          <circle cx="198" cy="107" r="5" fill="var(--signal)" />
        </svg>
      )
    case 'bracket':
      return (
        <svg {...common}>
          <rect x="48" y="30" width="22" height="142" rx="3" fill="var(--zinc-dark)" />
          <g fill="var(--zinc-light)" stroke="var(--ink)" strokeWidth="1.5">
            <circle cx="59" cy="50" r="5" />
            <circle cx="59" cy="152" r="5" />
          </g>
          <path d="M70 62H200M70 140L190 74" stroke="var(--zinc)" strokeWidth="14" strokeLinecap="round" fill="none" />
          <path d="M70 62H200M70 140L190 74" stroke="var(--zinc-dark)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <rect x="188" y="40" width="18" height="52" rx="4" fill="var(--brass)" stroke="var(--ink)" strokeWidth="1.5" />
          <circle cx="197" cy="52" r="3" fill="var(--ink)" />
          <circle cx="197" cy="80" r="3" fill="var(--ink)" />
        </svg>
      )
    default:
      return null
  }
}

/* Hizmet ikonları */
export function ServiceIcon({ name }) {
  const p = {
    viewBox: '0 0 64 64',
    width: 56,
    height: 56,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  switch (name) {
    case 'mount':
      return (
        <svg {...p}>
          <path d="M8 56h48M14 56V28l18-12 18 12v28" />
          <ellipse cx="30" cy="30" rx="10" ry="10" transform="rotate(-30 30 30)" />
          <path d="M36 24l6-8" />
          <circle cx="43" cy="14" r="2.5" />
        </svg>
      )
    case 'aim':
      return (
        <svg {...p}>
          <circle cx="32" cy="32" r="22" />
          <circle cx="32" cy="32" r="12" />
          <circle cx="32" cy="32" r="2.5" />
          <path d="M32 6v10M32 48v10M6 32h10M48 32h10" />
        </svg>
      )
    case 'repair':
      return (
        <svg {...p}>
          <path d="M44 10a12 12 0 0 0-14 16L10 46a5 5 0 0 0 8 8l20-20a12 12 0 0 0 16-14l-8 8-7-2-2-7z" />
        </svg>
      )
    case 'central':
      return (
        <svg {...p}>
          <rect x="10" y="30" width="44" height="26" rx="2" />
          <path d="M10 42h44M24 30v26M40 30v26" />
          <ellipse cx="32" cy="16" rx="9" ry="9" transform="rotate(-30 32 16)" />
          <path d="M32 24v6" />
        </svg>
      )
    default:
      return null
  }
}

export function WhatsAppIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 3C9.4 3 4 8.38 4 15c0 2.12.56 4.19 1.62 6.01L4 29l8.2-1.58A12.04 12.04 0 0 0 16.04 27C22.68 27 28 21.62 28 15S22.68 3 16.04 3zm0 21.9c-1.8 0-3.56-.48-5.1-1.4l-.37-.22-4.87.94.98-4.74-.24-.38A9.84 9.84 0 0 1 6.2 15c0-5.42 4.43-9.82 9.84-9.82S25.8 9.58 25.8 15s-4.36 9.9-9.76 9.9zm5.4-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.4.24-.7.24-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
      />
    </svg>
  )
}
