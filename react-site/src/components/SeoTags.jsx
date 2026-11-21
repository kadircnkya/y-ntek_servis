import React from 'react'

export default function SeoTags({ onSelectTag }) {
  const tags = [
    '#kartal-uydu-servisi',
    '#istanbul-uyducu',
    '#canak-anten-montaji',
    '#sinyal-yok-tamiri',
    '#pendik-uyducu',
    '#maltepe-canak-ayari',
    '#merkezi-uydu-sistemleri',
    '#tuzla-uydu-servisi',
    '#kadikoy-uydu-tamiri',
    '#tv-duvara-aski-montaji',
    '#lnb-degisimi',
    '#turksat-4a-frekans-ayari',
    '#7-24-acil-uyducu'
  ]

  return (
    <section className="seo-tags-section">
      <div className="container">
        <h4 className="seo-tags-title">Popüler Aramalar ve Hizmet Etiketleri</h4>
        <div className="seo-tags-cloud">
          {tags.map((tag) => (
            <span
              key={tag}
              onClick={() => onSelectTag && onSelectTag(tag)}
              className="seo-tag-pill"
              style={{ cursor: 'pointer' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="seo-summary-text">
          Yöntek Teknik Servis; Kartal, Maltepe, Pendik, Tuzla, Kadıköy, Ataşehir, Ümraniye ve tüm İstanbul genelinde uzman ustaları, son model sinyal bulucu cihazları ve 1 yıl garantili yedek parçalarıyla profesyonel uydu çanak anten servisi sunar.
        </p>
      </div>
    </section>
  )
}

