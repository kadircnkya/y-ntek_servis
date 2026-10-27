import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { canLoadHeroVideo, prefersReducedMotion } from '../lib/device.js'
import { site, telLink, waLink } from '../config.js'
import { trackPhoneClick } from '../utils/analytics.js'
import { ArrowIcon, PhoneIcon } from './Icons.jsx'
import { PlanetExplosion } from './PlanetExplosion.jsx'
import './Hero.css'

const CUES = [0, 1, 2]

const POSTER_SIZES = '(orientation: portrait) 178vh, 100vw'
const LOCATION = 'İstanbul Anadolu'

const ANADOLU_DISTRICTS = [
  'Adalar', 'Ataşehir', 'Beykoz', 'Çekmeköy', 'Kadıköy',
  'Kartal', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sultanbeyli',
  'Şile', 'Tuzla', 'Ümraniye', 'Üsküdar'
]

export default function Hero() {
  const reduced = useRef(prefersReducedMotion()).current
  const [stage, setStage] = useState(0)
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

  // Modal açıkken arkadaki sayfanın kaymasını engelle
  useEffect(() => {
    if (!modalOpen) return
    const prevOverflow = document.body.style.overflow
    const prevTouchAction = document.body.style.touchAction
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
    const onKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.body.style.touchAction = prevTouchAction
      window.removeEventListener('keydown', onKey)
    }
  }, [modalOpen])

  const [animRun, setAnimRun] = useState(0)
  const [isTabHidden, setIsTabHidden] = useState(false)

  // Sekme arka plandayken animasyonu durdur / geri gelince devam et
  useEffect(() => {
    const onVisChange = () => setIsTabHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisChange)
    return () => document.removeEventListener('visibilitychange', onVisChange)
  }, [])

  // Tek doğruluk kaynağı: Çubuk dolum animasyonu bittiğinde sonraki slayta geç
  const handleBarAnimationEnd = (index) => {
    if (index === stage) {
      setStage((prev) => (prev + 1) % 3)
      setAnimRun((r) => r + 1)
    }
  }

  // Çubuğa tıklanınca doğrudan o slayta geç
  const handleBarClick = (index) => {
    setStage(index)
    setAnimRun((r) => r + 1)
  }

  // prefers-reduced-motion açıksa CSS animasyonu yerine basit zamanlayıcı
  useEffect(() => {
    if (!reduced || isTabHidden) return
    const timer = setTimeout(() => {
      setStage((prev) => (prev + 1) % 3)
      setAnimRun((r) => r + 1)
    }, 4000)
    return () => clearTimeout(timer)
  }, [stage, reduced, isTabHidden])

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

  // 4) Sekme gizli veya hero ekranda değilse videoyu durdur (decode maliyeti sıfır)
  useEffect(() => {
    if (!videoOn) return
    const v = videoRef.current
    const section = sectionRef.current
    if (!v || !section) return
    let inView = true
    const sync = () => {
      if (document.hidden || !inView) v.pause()
      else if (!v.ended) v.play().catch(() => { })
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
          <span className="hero-hud-value">
            {LOCATION}
          </span>
          <span className="hero-hud-hint">İlçeler ↗</span>
        </button>

        <div className="hero-content">
          {/* Üstteki mavi yazı: tüm slaytlarda sabit kalır */}
          <p className="hero-kicker">
            {site.city} · Uydu arıza, tamir ve sinyal ayarı servisi
          </p>

          {/* Sadece ortadaki yazılar değişir (CLS 0) */}
          <div className="hero-slides">
            {/* Slayt 0: İlk açılışta doğrudan Yöntek Teknik Servis */}
            <div className={`hero-slide ${stage === 0 ? 'is-active' : 'is-past'}`} aria-hidden={stage !== 0}>
              <h1 id="hero-title" className="hero-title hero-title--brand">
                {site.name}
                <span className="sr-only"> – Uydu çanak anten arıza ve tamir servisi, Kartal ve Anadolu Yakası</span>
              </h1>
              <p className="hero-sub">
                Sinyal uzaydan gelir, <span className="hl">çatınıza biz ulaştırırız.</span>
              </p>
            </div>

            {/* Slayt 1: Uzaydan başlayan sinyal */}
            <div className={`hero-slide ${stage === 1 ? 'is-active' : stage > 1 ? 'is-past' : ''}`} aria-hidden={stage !== 1}>
              <p className="hero-title">Uzaydan başlayan sinyal</p>
              <p className="hero-sub">Yayın kesildiğinde nedenini sinyal ölçerle bulur, görüntüyü geri getiririz.</p>
            </div>

            {/* Slayt 2: Dünyaya iniyoruz */}
            <div className={`hero-slide ${stage === 2 ? 'is-active' : ''}`} aria-hidden={stage !== 2}>
              <p className="hero-title">Dünyaya iniyoruz</p>
              <p className="hero-sub">Sinyal çatınızda kesildiyse aynı gün arıza tespiti, tamir ve profesyonel uydu ayarı.</p>
            </div>
          </div>

          {/* Butonlar: tüm slaytlarda sabit ve tıklanabilir kalır */}
          <div className="hero-actions">
            <a id="hero-cta-products" className="btn btn-primary" href="#hizmetler">
              Hizmetleri Gör <ArrowIcon />
            </a>
            <a id="hero-cta-call" className="btn btn-ghost" href={telLink} onClick={trackPhoneClick}>
              <PhoneIcon /> Arıza için hemen ara
            </a>
          </div>
        </div>

        <div className={`hero-foot ${isTabHidden ? 'is-tab-paused' : ''}`}>
          <div className="hero-progress" role="tablist" aria-label="Slayt göstergeleri">
            {[0, 1, 2].map((i) => {
              const isPast = i < stage
              const isActive = i === stage
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  className={`hero-bar-btn ${isPast ? 'is-done' : ''} ${isActive ? 'is-active' : ''}`}
                  aria-label={`Slayt ${i + 1} / 3`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBarClick(i)
                  }}
                >
                  <span className="hero-bar-track">
                    {isActive ? (
                      <span
                        key={`${i}-${stage}-${animRun}`}
                        className="hero-bar-fill"
                        onAnimationEnd={() => handleBarAnimationEnd(i)}
                      />
                    ) : isPast ? (
                      <span className="hero-bar-fill is-filled" />
                    ) : null}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {modalOpen && typeof document !== 'undefined' && createPortal(
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
              Anadolu Yakası'ndaki aşağıdaki ilçelere arıza servisi ve tamir hizmeti veriyoruz.
            </p>
            <ul className="districts-list">
              {ANADOLU_DISTRICTS.map((district) => (
                <li key={district}>{district}</li>
              ))}
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-block"
              onClick={() => setModalOpen(false)}
            >
              Servis Çağır
            </a>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}