import { site, waLink } from '../config.js'

export default function Areas() {
  return (
    <section id="bolgeler" className="section section-tint">
      <div className="wrap">
        <h2 className="h2">Nerelere geliyoruz?</h2>
        <ul className="areas">
          {site.areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p className="lede">
          Listede yerinizi göremediyseniz de{' '}
          <a href={waLink('Merhaba, bulunduğum bölgeye hizmet veriyor musunuz?')} target="_blank" rel="noopener noreferrer">
            yazın
          </a>
          , bakalım.
        </p>
      </div>
    </section>
  )
}
