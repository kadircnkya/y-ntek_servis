import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import './PlanetExplosion.css'

export const PlanetExplosion = forwardRef(function PlanetExplosion(_, ref) {
  const [blasts, setBlasts] = useState([])

  useImperativeHandle(ref, () => ({
    trigger(x, y) {
      addBlast(x, y)
    },
  }))

  const addBlast = (x, y) => {
    // Koordinat belirtilmemişse gezegenin atmosfer yayındaki optimal noktayı seç
    const posX =
      typeof x === 'number'
        ? x
        : typeof window !== 'undefined' && window.innerWidth < 768
          ? window.innerWidth * 0.68
          : (typeof window !== 'undefined' ? window.innerWidth : 1200) * 0.62

    const posY =
      typeof y === 'number'
        ? y
        : typeof window !== 'undefined' && window.innerWidth < 768
          ? window.innerHeight * 0.52
          : (typeof window !== 'undefined' ? window.innerHeight : 800) * 0.55

    // 12 adet ultra hafif GPU hızlandırmalı kıvılcım
    const sparks = Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2 + (Math.random() * 0.3 - 0.15)
      const dist = 50 + Math.random() * 80
      return {
        dx: Math.round(Math.cos(angle) * dist),
        dy: Math.round(Math.sin(angle) * dist),
        color: i % 3 === 0 ? '#ffffff' : i % 3 === 1 ? '#5fe4ff' : '#ffa24c',
        size: 2 + Math.round(Math.random() * 2),
      }
    })

    const id = Date.now() + Math.random()
    // Maksimum 2 eşzamanlı patlama tutarak hafıza ve GPU yükünü minimumda tutuyoruz
    setBlasts((prev) => [...prev.slice(-1), { id, x: posX, y: posY, sparks }])

    setTimeout(() => {
      setBlasts((prev) => prev.filter((b) => b.id !== id))
    }, 1050)
  }

  // Sayfa açıldığında 1 defa hafifçe tetiklenir
  useEffect(() => {
    const t = setTimeout(() => addBlast(), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="planet-explosion-overlay" aria-hidden="true">
      {blasts.map((b) => (
        <div key={b.id} className="cosmic-blast" style={{ left: `${b.x}px`, top: `${b.y}px` }}>
          <div className="blast-core" />
          <div className="blast-ring ring-1" />
          <div className="blast-ring ring-2" />
          <div className="blast-flare" />
          {b.sparks.map((s, i) => (
            <span
              key={i}
              className="blast-spark"
              style={{
                '--dx': `${s.dx}px`,
                '--dy': `${s.dy}px`,
                '--c': s.color,
                '--s': `${s.size}px`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
})
