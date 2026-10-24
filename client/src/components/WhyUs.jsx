import { useSection } from '../hooks/useSection.js'
import './WhyUs.css'

const reasons = [
  {
    num: '01',
    title: '7/24 WhatsApp ulaşım',
    text: 'Mesaj atın, en kısa sürede dönüş yapalım. Akşam da arayabilirsiniz.',
  },
  {
    num: '02',
    title: 'Ölçerle hassas yönlendirme',
    text: 'Sinyal ölçer cihazla derecelik ayar yaparız. Kötü havada bile donma sıfıra yakın.',
  },
  {
    num: '03',
    title: 'Temiz, garantili işçilik',
    text: 'Kablo kanalıyla döşeriz, silikonla su almaz sızdırmaz bitiririz. İşçiliğe garanti veririz.',
  },
  {
    num: '04',
    title: 'Uygun fiyat, nakit / kart',
    text: 'Peşin veya kartla ödeme. Fiyat sormak için mesaj atmanız yeterli.',
  },
]

export default function WhyUs() {
  const ref = useSection()
  return (
    <section id="neden-biz" ref={ref} className="section whyus" aria-labelledby="whyus-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Kat 03 <b>· Fark</b></p>
          <h2 id="whyus-title" className="h2">Neden <em>bizi</em> tercih etmelisiniz?</h2>
        </header>

        <ol className="reasons">
          {reasons.map((r, i) => (
            <li key={r.num} className="reason reveal" style={{ '--i': i }}>
              <span className="reason-num">{r.num}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
