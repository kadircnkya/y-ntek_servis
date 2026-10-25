import { useState, useRef } from 'react'
import { useSection } from '../hooks/useSection.js'
import { useTilt } from '../hooks/useTilt.js'
import { ProductHologram, WhatsAppIcon } from './Icons.jsx'
import { waLink } from '../config.js'
import products from '../data/products.json'
import './Products.css'

function ProductCard({ p, index }) {
  const tiltRef = useTilt(6)
  return (
    <li className="reveal" style={{ '--i': index % 3 }}>
      <article ref={tiltRef} className="p-card glass">
        <div className="p-visual" aria-hidden="true">
          <span className="p-code">P-0{index + 1}</span>
          <ProductHologram kind={p.kind} />
        </div>
        <div className="p-body">
          <h3>{p.name}</h3>
          <p>{p.summary}</p>
          <ul className="chips" aria-label={`${p.name} seçenekleri`}>
            {p.options.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <a
            id={`product-ask-${p.id}`}
            className="btn btn-ghost btn-sm p-ask"
            href={waLink(`Merhaba, ${p.name} için fiyat ve bilgi almak istiyorum.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Fiyat sor
          </a>
        </div>
      </article>
    </li>
  )
}

export default function Products() {
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
    setActiveIndex(Math.max(0, Math.min(products.length - 1, idx)))
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
    <section id="urunler" ref={ref} className="section products" data-alt="∞" data-alt-label="Derin uzay" aria-labelledby="products-title">
      {/* Motif: halkalı gezegen + küçük uydu-ay + nebula. Yalnızca bu bölümde. */}
      <div className="planet-motif" aria-hidden="true">
        <div className="planet-float" data-anim>
          <div className="planet-ring planet-ring--back" />
          <div className="planet-body" />
          <div className="planet-ring planet-ring--front" />
        </div>
        <div className="planet-moon" data-anim />
      </div>

      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">
            Kat 01 <b>· Derin uzay</b>
          </p>
          <h2 id="products-title" className="h2">
            Sinyali yakalayan <em>donanım</em>
          </h2>
          <p className="lede">
            Çanak montajından televizyon onarımına, kamera sistemlerinden TV duvar askısına kadar ihtiyacınız olan donanım ve teknik hizmetler. Fiyat ve detay için kartlardan tek dokunuşla ulaşın.
          </p>
        </header>

        <ul className="p-grid" ref={gridRef} onScroll={handleScroll}>
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </ul>

        <div className="p-dots" aria-hidden="true">
          {products.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`p-dot ${i === activeIndex ? 'active' : ''}`}
              aria-label={`Ürün ${i + 1}`}
              onClick={() => scrollToCard(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
