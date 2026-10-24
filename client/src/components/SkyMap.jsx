import { useState } from 'react'
import { Satellite } from './Art.jsx'

// Güneye bakınca doğu solda, batı sağda kalır; bu yüzden 42°D en solda durur.
const sats = [
  { id: 'turksat', name: 'Türksat', pos: '42°D', t: 0.2, text: 'Yerli kanalların büyük bölümü bu uyduda. Türkiye\'de en çok bakılan uydu.' },
  { id: 'astra', name: 'Astra', pos: '19.2°D', t: 0.62, text: 'Avrupa kanalları ve özellikle Almanya yayınları için tercih edilir.' },
  { id: 'hotbird', name: 'Hotbird', pos: '13°D', t: 0.78, text: 'Avrupa\'nın dört bir yanından çok sayıda kanal bu uyduda toplanır.' },
]

const A = { x: 60, y: 330 }
const C = { x: 400, y: -40 }
const B = { x: 740, y: 330 }
const onArc = (t) => ({
  x: (1 - t) ** 2 * A.x + 2 * (1 - t) * t * C.x + t ** 2 * B.x,
  y: (1 - t) ** 2 * A.y + 2 * (1 - t) * t * C.y + t ** 2 * B.y,
})
const DISH = { x: 400, y: 392 }

export default function SkyMap() {
  const [i, setI] = useState(0)
  const cur = sats[i]
  const target = onArc(cur.t)
  const dx = target.x - DISH.x
  const dy = target.y - DISH.y
  const angle = (Math.atan2(dx, -dy) * 180) / Math.PI
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const beamStart = { x: DISH.x + ux * 92, y: DISH.y + uy * 92 }
  const beamEnd = { x: target.x - ux * 34, y: target.y - uy * 34 }

  return (
    <section id="uydular" className="section section-dark">
      <div className="wrap sky-grid">
        <div className="sky-copy">
          <h2 className="h2">Hangi uyduya bakıyoruz?</h2>
          <p className="lede">
            Uydular gökyüzünde sabit bir yayda durur. Çanağı bu yaydaki doğru noktaya milimetrik çevirmek, montajın asıl
            işi. Bir uydu seçin, çanağın nasıl döndüğüne bakın.
          </p>
          <div className="sat-tabs" role="tablist" aria-label="Uydu seçimi">
            {sats.map((s, idx) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={idx === i}
                className={`sat-tab ${idx === i ? 'on' : ''}`}
                onClick={() => setI(idx)}
              >
                <strong>{s.name}</strong>
                <span>{s.pos}</span>
              </button>
            ))}
          </div>
          <p className="sat-text" key={cur.id}>
            {cur.text}
          </p>
          <p className="fine">
            Hangi kanalın hangi uyduda yayınlandığı zamanla değişebilir. Kurulumda güncel listeyi birlikte kuruyoruz.
          </p>
        </div>

        <div className="sky-fig">
          <svg viewBox="0 0 800 480" role="img" aria-label="Güney gökyüzünde uydu yayı ve çanağın seçilen uyduya dönmesi">
            <path d={`M${A.x} ${A.y} Q ${C.x} ${C.y} ${B.x} ${B.y}`} fill="none" stroke="var(--zinc)" strokeWidth="1.5" strokeDasharray="3 8" opacity=".6" />
            <text className="sky-edge" x="52" y="372" fill="var(--zinc)" fontSize="18" opacity=".85">Doğu</text>
            <text className="sky-edge" x="690" y="372" fill="var(--zinc)" fontSize="18" opacity=".85">Batı</text>

            {/* ufuk */}
            <line x1="0" y1="446" x2="800" y2="446" stroke="var(--zinc)" strokeWidth="1" opacity=".35" />

            {sats.map((s, idx) => {
              const p = onArc(s.t)
              return (
                <g key={s.id} onClick={() => setI(idx)} style={{ cursor: 'pointer' }}>
                  <Satellite x={p.x} y={p.y} scale={idx === i ? 0.85 : 0.64} rotate={-8} />
                  <text
                    className={`sky-label ${idx === i ? 'on' : ''}`}
                    x={p.x}
                    y={p.y - 44}
                    textAnchor="middle"
                    fill={idx === i ? 'var(--paper)' : 'var(--zinc)'}
                    fontSize={idx === i ? 20 : 17}
                    fontWeight={idx === i ? 700 : 400}
                  >
                    {s.name} {s.pos}
                  </text>
                </g>
              )
            })}

            <line
              x1={beamStart.x}
              y1={beamStart.y}
              x2={beamEnd.x}
              y2={beamEnd.y}
              stroke="var(--signal)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="2 10"
              className="beam beam-locked"
              style={{ transition: 'all .8s cubic-bezier(.3,.7,.2,1)' }}
            />

            {/* çanak: seçilen uyduya dönük */}
            <g
              style={{ transform: `translate(${DISH.x}px, ${DISH.y}px) rotate(${angle}deg)`, transition: 'transform .8s cubic-bezier(.3,.7,.2,1)' }}
            >
              <g transform="scale(1.9)">
                <ellipse cx="0" cy="-4" rx="40" ry="11" fill="var(--zinc-dark)" />
                <ellipse cx="0" cy="-8" rx="40" ry="11" fill="var(--zinc)" stroke="var(--zinc-light)" strokeWidth="2" />
                <path d="M0 -8V-34" stroke="var(--zinc-dark)" strokeWidth="3" strokeLinecap="round" />
                <rect x="-6" y="-46" width="12" height="14" rx="3" fill="var(--brass)" />
              </g>
            </g>
            <rect x="392" y="396" width="16" height="50" fill="var(--zinc-dark)" />
          </svg>
        </div>
      </div>
    </section>
  )
}
