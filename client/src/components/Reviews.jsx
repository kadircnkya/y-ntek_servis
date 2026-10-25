import { useState, useRef } from 'react'
import { useSection } from '../hooks/useSection.js'
import './Reviews.css'

const works = [
  {
    img: '/servis-canak.jpg',
    title: 'Çanak Anten Montajı',
    text: 'Uzman ekibimiz çanak anteni çatıya sağlam ve güvenli şekilde monte eder, kablo ve bağlantıları düzgünce tamamlar.',
  },
  {
    img: '/servis-sinyal.jpg',
    title: 'Uydu Sinyal Ayarı',
    text: 'Sinyal ölçer cihazıyla hassas yönlendirme yapılır; yağmurda ve kötü havada bile kesintisiz yayın sağlanır.',
  },
  {
    img: '/servis-tv.jpg',
    title: 'Plazma & Akıllı TV Kurulumu',
    text: 'Plazma ve LED televizyonlar duvara askı aparatıyla monte edilir, kanal ayarları ve bağlantılar eksiksiz yapılır.',
  },
  {
    img: '/servis-kamera.jpg',
    title: 'Akıllı Kamera Sistemleri',
    text: 'Ev ve iş yeriniz için güvenlik kameraları kurulur; telefondan canlı izleme ve kayıt ayarları yapılır.',
  },
]

export default function Reviews() {
  const ref = useSection()
  const gridRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    const el = gridRef.current
    if (!el) return
    const card = el.firstElementChild
    if (!card) return
    const itemWidth = card.getBoundingClientRect().width + 12
    const idx = Math.round(el.scrollLeft / itemWidth)
    setActiveIndex(Math.max(0, Math.min(works.length - 1, idx)))
  }

  const scrollToCard = (i) => {
    const el = gridRef.current
    if (!el) return
    const card = el.firstElementChild
    if (!card) return
    const itemWidth = card.getBoundingClientRect().width + 12
    el.scrollTo({ left: i * itemWidth, behavior: 'smooth' })
    setActiveIndex(i)
  }

  return (
    <section id="hizmetler" ref={ref} className="section reviews" aria-labelledby="reviews-title">
      <span id="yorumlar" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Kat 04 <b>· Servis</b></p>
          <h2 id="reviews-title" className="h2">Teknik servisimiz <em>iş başında</em></h2>
        </header>

        <ul className="rev-grid" ref={gridRef} onScroll={handleScroll}>
          {works.map((w, i) => (
            <li key={i} className="reveal" style={{ '--i': i }}>
              <article className="rev-card glass">
                <img className="rev-img" src={w.img} alt={w.title} loading="lazy" width="600" height="450" />
                <div className="rev-body">
                  <h3 className="rev-title">{w.title}</h3>
                  <p className="rev-text">{w.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="rev-dots" aria-hidden="true">
          {works.map((w, i) => (
            <button
              key={i}
              type="button"
              className={`rev-dot ${i === activeIndex ? 'active' : ''}`}
              aria-label={`Servis ${i + 1}`}
              onClick={() => scrollToCard(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
