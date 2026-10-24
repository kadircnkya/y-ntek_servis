import { useCallback, useEffect, useRef, useState } from 'react'
import { canLoadHeroVideo, prefersReducedMotion } from '../lib/device.js'
import { site, telLink } from '../config.js'
import { ArrowIcon, PhoneIcon } from './Icons.jsx'
import { PlanetExplosion } from './PlanetExplosion.jsx'
import './Hero.css'

// Videonun zaman çizelgesi (saniye). Videoyu değiştirirseniz sadece burayı güncelleyin.
const CUES = [0, 4, 8]
const stageAt = (t) => (t >= CUES[2] ? 2 : t >= CUES[1] ? 1 : 0)

const POSTER_SIZES = '(orientation: portrait) 178vh, 100vw'
const LOCATIONS = ['Derin uzay', 'Atmosfere giriş', 'İstanbul Anadolu']

const ANADOLU_DISTRICTS = [
  'Adalar', 'Ataşehir', 'Beykoz', 'Çekmeköy', 'Kadıköy',
  'Kartal', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sultanbeyli',
  'Şile', 'Tuzla', 'Ümraniye', 'Üsküdar'
]

export default function Hero() {
  const reduced = useRef(prefersReducedMotion()).current
  const [stage, setStage] = useState(reduced ? 2 : 0)
  const [videoOn, setVideoOn] = useState(false) // <video> DOM'a eklendi mi
  const [videoReady, setVideoReady] = useState(false) // ilk kare oynadı mı
  const [timerOn, setTimerOn] = useState(false) // video yoksa metinleri zamanlayıcı sürer
  const [buffering, setBuffering] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const explosionRef = useRef(null)

  const handleHeroClick = (e) => {
    if (e.target.closest('a, button, input, .hero-skip, .hero-hud-btn, .districts-modal')) return
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    explosionRef.current?.trigger(x, y)
  }

  // Aşama sadece ileri gider (atla butonu / geç gelen timeupdate geri sardırmasın)
  const advance = useCallback((n) => setStage((s) => (n > s ? n : s)), [])

  // 1) Video kararı: poster (LCP) yüklendikten SONRA, tarayıcı boştayken.
  useEffect(() => {
    if (reduced) return
    if (!canLoadHeroVideo()) {
      setTimerOn(true)
      return
    }
    let cancelled = false
    let idle = 0
    const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 300))
    const cic = window.cancelIdleCallback || clearTimeout
    const go = () => {
      idle = ric(() => !cancelled && setVideoOn(true), { timeout: 1500 })
    }
    if (document.readyState === 'complete') go()
    else window.addEventListener('load', go, { once: true })
    return () => {
      cancelled = true
      cic(idle)
      window.removeEventListener('load', go)
    }
  }, [reduced])

  // 2) Video eklendi: sessiz başlat. Autoplay engellenirse / dosya yoksa zamanlayıcıya düş.
  useEffect(() => {
    if (!videoOn) return
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '') // iOS Safari autoplay için öznitelik şart
    const fail = () => {
      setVideoOn(false)
      setTimerOn(true)
    }
    const p = v.play()
    if (p && p.catch) p.catch(fail)
    const watchdog = setTimeout(() => {
      if (v.readyState < 2) fail()
    }, 4000)
    return () => clearTimeout(watchdog)
  }, [videoOn])

  // 3) Zamanlayıcı yedeği (Save-Data, yavaş hat, autoplay engeli)
  useEffect(() => {
    if (!timerOn) return
    const a = setTimeout(() => advance(1), CUES[1] * 1000)
    const b = setTimeout(() => advance(2), CUES[2] * 1000)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [timerOn, advance])

  // 4) Sekme gizli veya hero ekranda değilse videoyu durdur (decode maliyeti sıfır)
  useEffect(() => {
    if (!videoOn) return
    const v = videoRef.current
    const section = sectionRef.current
    if (!v || !section) return
    let inView = true
    const sync = () => {
      if (document.hidden || !inView) v.pause()
      else if (!v.ended) v.play().catch(() => {})
    }
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting
      sync()
    })
    io.observe(section)
    document.addEventListener('visibilitychange', sync)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', sync)
    }
  }, [videoOn])

  const onTimeUpdate = (e) => advance(stageAt(e.currentTarget.currentTime))
  const skip = () => advance(2)
  const isFinal = stage === 2

  return (
    <section
      id="top"
      ref={sectionRef}
      className={`hero stage-${stage}`}
      aria-labelledby="hero-title"
      onClick={handleHeroClick}
    >
      {/* Poster: LCP elemanı. AVIF > WebP > JPG, ekran boyutuna göre doğru genişlik. */}
      <picture>
        <source type="image/avif" srcSet="/hero-poster-828.avif 828w, /hero-poster-1920.avif 1920w" sizes={POSTER_SIZES} />
        <source type="image/webp" srcSet="/hero-poster-828.webp 828w, /hero-poster-1920.webp 1920w" sizes={POSTER_SIZES} />
        <img
          className="hero-media hero-poster"
          src="/hero-poster-1920.jpg"
          srcSet="/hero-poster-828.jpg 828w, /hero-poster-1920.jpg 1920w"
          sizes={POSTER_SIZES}
          width="1920"
          height="1080"
          alt="Uzaydan görülen gece Dünya'sı, şehir ışıkları ve yörüngedeki haberleşme uydusu"
          fetchpriority="high"
        />
      </picture>

      {videoOn && (
        <video
          ref={videoRef}
          className={`hero-media hero-video ${videoReady ? 'is-ready' : ''}`}
          playsInline
          muted
          preload="auto"
          poster="/hero-poster.jpg"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => {
            setVideoReady(true)
            setBuffering(false)
          }}
          onWaiting={() => setBuffering(true)}
          onTimeUpdate={onTimeUpdate}
          onEnded={() => advance(2)} // loop yok: son karede kalır
        >
          {/* Mobil: 720p ayrı kaynak. media desteklemeyen eski tarayıcı ilk kaynağı (hafif olanı) seçer. */}
          <source src="/hero-720.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div className="hero-shade" aria-hidden="true" />
      <PlanetExplosion ref={explosionRef} />

      <div className="container hero-inner">
        <button
          type="button"
          className="hero-hud hero-hud-btn"
          onClick={(e) => {
            e.stopPropagation()
            setModalOpen(true)
          }}
          title="Hizmet verilen ilçeleri gör"
        >
          <span className="hero-hud-dot" />
          <span className="hero-hud-label">Konum:</span>
          <span className="hero-hud-value" key={stage}>
            {LOCATIONS[stage]}
          </span>
          <span className="hero-hud-hint">İlçeler ↗</span>
        </button>

        <div className="hero-slides">
          <div className={`hero-slide ${stage === 0 ? 'is-active' : 'is-past'}`} aria-hidden="true">
            <p className="hero-kicker">İletim 01 / 03</p>
            <p className="hero-title">Uzaydan başlayan sinyal</p>
            <p className="hero-sub">Her yayın bir yerden gelir.</p>
          </div>

          <div className={`hero-slide ${stage === 1 ? 'is-active' : stage > 1 ? 'is-past' : ''}`} aria-hidden="true">
            <p className="hero-kicker">İletim 02 / 03</p>
            <p className="hero-title">Dünyaya iniyoruz</p>
            <p className="hero-sub">Sinyal sizin çatınıza ulaşır.</p>
          </div>

          {/* Son aşama ekran okuyucuya hep açık: h1 en baştan DOM'da */}
          <div className={`hero-slide hero-slide--final ${isFinal ? 'is-active' : ''}`}>
            <p className="hero-kicker">
              {site.city} · Çanak anten satış, montaj ve uydu ayarı
            </p>
            <h1 id="hero-title" className="hero-title hero-title--brand">
              {site.name}
            </h1>
            <p className="hero-sub">
              Sinyal uzaydan gelir, <span className="hl">çatınıza biz ulaştırırız.</span>
            </p>
            <div className="hero-actions">
              <a id="hero-cta-products" className="btn btn-primary" href="#urunler" tabIndex={isFinal ? 0 : -1}>
                Ürünleri Gör <ArrowIcon />
              </a>
              <a id="hero-cta-call" className="btn btn-ghost" href={telLink} tabIndex={isFinal ? 0 : -1}>
                <PhoneIcon /> Hemen ara
              </a>
            </div>
          </div>
        </div>

        <div className={`hero-foot ${buffering ? 'is-buffering' : ''}`}>
          <ol className="hero-progress" aria-hidden="true">
            {CUES.map((_, i) => (
              <li key={i} className={i < stage ? 'done' : i === stage ? 'active' : ''}>
                <i />
              </li>
            ))}
          </ol>
          {!isFinal && (
            <button id="hero-skip" type="button" className="hero-skip" onClick={skip}>
              Girişi geç
            </button>
          )}
        </div>
      </div>

      {modalOpen && (
        <div
          className="districts-modal-backdrop"
          onClick={(e) => {
            e.stopPropagation()
            setModalOpen(false)
          }}
        >
          <div
            className="districts-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="districts-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="districts-close-btn"
              onClick={() => setModalOpen(false)}
              aria-label="Kapat"
            >
              ✕
            </button>
            <h3 id="districts-modal-title" className="districts-title">
              📍 İstanbul Anadolu Yakası
            </h3>
            <p className="districts-desc">
              Anadolu yakasındaki aşağıdaki ilçelere aynı gün servis ve montaj yapıyoruz.
            </p>
            <ul className="districts-list">
              {ANADOLU_DISTRICTS.map((district) => (
                <li key={district}>{district}</li>
              ))}
            </ul>
            <a
              href="#hizmetler"
              className="btn btn-wa btn-block"
              onClick={() => setModalOpen(false)}
            >
              Randevu Al
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
