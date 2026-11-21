import React from 'react'

export default function StatsSection({ onOpenAbout }) {
  return (
    <section className="stats-section-dark" id="kurumsal">
      <div className="container">
        <div className="stats-grid-2col">
          
          <div>
            <span className="stats-pill-badge">İSTANBUL'UN EN KÖKLÜ UYDU SERVİSİ</span>
            <h2 className="stats-h2">
              UYDU SİSTEMLERİNDE<br />
              <span className="gradient-text-cyan">TECRÜBE KONUŞUR.</span>
            </h2>
            <p className="stats-desc">
              15 yılı aşkın sektör deneyimimizle, sinyal kayıplarından bina santrallerine kadar her ölçekteki uydu arızasını en ileri teknolojiye sahip kalibre ölçüm cihazlarımızla kökünden çözüyoruz.
            </p>

            <div className="stats-cards-row">
              <div className="stat-frosted-card">
                <div className="stat-number blue">15+</div>
                <div className="stat-label">Yıllık Tecrübe</div>
              </div>
              <div className="stat-frosted-card">
                <div className="stat-number white">10K+</div>
                <div className="stat-label">Mutlu Müşteri</div>
              </div>
              <div className="stat-frosted-card">
                <div className="stat-number green">30dk</div>
                <div className="stat-label">Ort. Servis Süresi</div>
              </div>
              <div className="stat-frosted-card">
                <div className="stat-number orange">%100</div>
                <div className="stat-label">Sinyal Garantisi</div>
              </div>
            </div>

            <div style={{ marginTop: '28px' }}>
              <button
                type="button"
                onClick={onOpenAbout}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#38bdf8',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              >
                Kurumsal Profilimiz ve Kalite Standartlarımız Hakkında Bilgi Alın →
              </button>
            </div>
          </div>

          <div>
            <div className="stats-right-card">
              <img
                src="/assets/images/hero-technician.jpg"
                alt="Yetkili Uydu Servisi Garantisi"
                className="stats-right-img"
              />
              <div className="stats-img-badge">
                ✓ Yetkili Servis Kalitesi / 1 Yıl Orijinal Parça & İşçilik Garantisi
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

