import faq from '../data/faq.json'

export default function Faq() {
  return (
    <section id="sss" className="section">
      <div className="wrap faq-grid">
        <h2 className="h2">Sık sorulanlar</h2>
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
