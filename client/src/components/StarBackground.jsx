import { useEffect, useRef } from 'react'
import { getProfile } from '../lib/device.js'
import './StarBackground.css'

const rand = (a, b) => a + Math.random() * (b - a)
const COLORS = { white: '#f3f7ff', cyan: '#bfefff', warm: '#ffe2c2' }

// Parlak yıldızlar için bir kez çizilen ışıma sprite'ı (her karede gradient hesaplamamak için)
function makeGlowSprite() {
  const c = document.createElement('canvas')
  c.width = c.height = 32
  const g = c.getContext('2d')
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16)
  grad.addColorStop(0, 'rgba(200,240,255,0.9)')
  grad.addColorStop(0.25, 'rgba(140,215,255,0.35)')
  grad.addColorStop(1, 'rgba(140,215,255,0)')
  g.fillStyle = grad
  g.fillRect(0, 0, 32, 32)
  return c
}

// Ekran genişliği + çekirdek sayısı + bellek → yıldız sayısı (masaüstü ≤150, mobil ≤60)
function starCount(width, p) {
  let n = width < 768 ? 60 : width < 1024 ? 100 : 150
  if (p.cores <= 2) n *= 0.5
  else if (p.cores <= 4) n *= 0.75
  if (p.mem <= 2) n *= 0.7
  return Math.max(24, Math.round(n))
}

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const p = getProfile()
    const animate = !p.reduced
    const parallax = animate && !p.mobile // mobilde parallax kapalı
    const minFrame = p.lowEnd ? 1000 / 30 : 0 // zayıf cihazda 30 fps yeterli
    const sprite = makeGlowSprite()

    let W = 0
    let H = 0
    let stars = []
    let raf = 0
    let last = 0
    let scrollY = window.scrollY
    let shoot = null
    let nextShoot = performance.now() + rand(4000, 8000)

    function build() {
      const n = starCount(W, p)
      stars = Array.from({ length: n }, () => {
        const layer = Math.random()
        const depth = layer < 0.6 ? 0.1 : layer < 0.9 ? 0.25 : 0.5 // 3 derinlik katmanı
        const r = depth === 0.5 ? rand(1.2, 2) : depth === 0.25 ? rand(0.8, 1.3) : rand(0.5, 0.9)
        const hueRoll = Math.random()
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          r,
          depth,
          base: rand(0.35, 0.95),
          tw: Math.random() < 0.28 ? rand(0.6, 1.8) : 0, // ~%28'i yanıp söner
          ph: Math.random() * Math.PI * 2,
          color: hueRoll < 0.1 ? 'warm' : hueRoll < 0.35 ? 'cyan' : 'white',
          glow: r > 1.25,
        }
      })
      // Renge göre sırala → her karede fillStyle değişimi en aza iner
      stars.sort((a, b) => (a.color > b.color ? 1 : -1))
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, p.mobile ? 1.5 : 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      const widthChanged = w !== W
      W = w
      H = h
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (widthChanged || !stars.length) build()
      draw(performance.now())
    }

    function drawShootingStar(t) {
      if (!shoot) {
        if (t < nextShoot) return
        shoot = {
          x: rand(W * 0.35, W * 1.05),
          y: rand(-20, H * 0.35),
          len: rand(90, 170),
          speed: rand(0.7, 1.05), // px / ms
          start: t,
          life: rand(750, 1000),
        }
      }
      const k = (t - shoot.start) / shoot.life
      if (k >= 1) {
        shoot = null
        nextShoot = t + (p.mobile ? rand(10000, 18000) : rand(7000, 14000))
        return
      }
      const dist = (t - shoot.start) * shoot.speed
      const dx = -0.86
      const dy = 0.5
      const hx = shoot.x + dx * dist
      const hy = shoot.y + dy * dist
      const tx = hx - dx * shoot.len
      const ty = hy - dy * shoot.len
      const g = ctx.createLinearGradient(hx, hy, tx, ty)
      const a = Math.sin(k * Math.PI)
      g.addColorStop(0, `rgba(220,248,255,${0.95 * a})`)
      g.addColorStop(1, 'rgba(120,210,255,0)')
      ctx.globalAlpha = 1
      ctx.strokeStyle = g
      ctx.lineWidth = 1.4
      ctx.beginPath()
      ctx.moveTo(hx, hy)
      ctx.lineTo(tx, ty)
      ctx.stroke()
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H)
      const time = t * 0.001
      let currentColor = ''
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        let y = s.y
        if (parallax) {
          y = (s.y - scrollY * s.depth) % H
          if (y < 0) y += H
        }
        let a = s.base
        if (animate && s.tw) a *= 0.5 + 0.5 * Math.sin(time * s.tw + s.ph)
        if (s.glow) {
          ctx.globalAlpha = a * 0.8
          ctx.drawImage(sprite, s.x - 7, y - 7, 14, 14)
        }
        if (currentColor !== s.color) {
          currentColor = s.color
          ctx.fillStyle = COLORS[s.color]
        }
        ctx.globalAlpha = a
        ctx.fillRect(s.x - s.r / 2, y - s.r / 2, s.r, s.r)
      }
      if (animate) drawShootingStar(t)
      ctx.globalAlpha = 1
    }

    function frame(t) {
      raf = requestAnimationFrame(frame)
      if (minFrame && t - last < minFrame) return
      last = t
      draw(t)
    }
    const start = () => {
      if (animate && !raf) raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    // Scroll: passive listener yalnızca değeri okur; çizim zaten rAF döngüsünde
    const onScroll = () => {
      scrollY = window.scrollY
    }
    const onVisibility = () => (document.hidden ? stop() : start())

    let resizeTimer = 0
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(resize, 150)
    }

    resize()
    start()
    if (parallax) window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      clearTimeout(resizeTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="space-bg" aria-hidden="true">
      <div className="space-nebula" />
      <canvas ref={canvasRef} className="space-stars" />
    </div>
  )
}
