import React from 'react'
import { siteConfig } from '../config.js'

export default function AboutSection({ onOpenBooking }) {
  return (
    <div>
      <section className="page-header-banner">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Ekmek Kırıntısı">
            <span style={{ color: '#e0f2fe' }}>Ana Sayfa</span>
            <span aria-hidden="true">/</span>
            <span>Kurumsal</span>
          </nav>
          <h1 className="page-header-title">Kurumsal & Hakkımızda</h1>
          <p className="page-header-sub">
            15 yılı aşkın tecrübemizle İstanbul Anadolu Yakası'nda uydu, çanak anten ve televizyon teknolojilerinde güvenin adresi.
          </p>
        </div>
      </section>

      <section className="inner-page-section">
        <div className="container">
          
          <div className="stats-grid-2col" style={{ marginBottom: '60px' }}>
            <div>
              <span className="section-pill-badge">HAKKIMIZDA</span>
              <h2 className="section-h2-title" style={{ textAlign: 'left' }}>
                Kaliteli Hizmet,<br />
                <span className="gradient-text-blue">Kesintisiz Yayın Güvencesi</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
                <strong>Yöntek Teknik Servis</strong>, 2010 yılından bu yana Kartal merkezli olarak tüm İstanbul Anadolu Yakası genelinde bireysel ve kurumsal uydu sistemleri çözümleri sunmaktadır.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>
                Sektördeki en büyük problem olan "deneme-yanılma yoluyla yapılan sinyal ayarı" ve "kötü işçilik" anlayışını reddederek, tüm arızalara en ileri teknolojiye sahip kalibre dijital spektrum analizörleriyle müdahale ediyoruz. Bu sayede yağmurda, rüzgarda veya bulutlu havalarda dahi yayınınız asla kesintiye uğramaz.
              </p>
              <ul className="service-v2-bullet-list" style={{ border: 'none', padding: 0 }}>
                <li className="bullet-item"><span className="bullet-dot blue"></span> 15 yılı aşkın teknik servis ve saha uzmanlığı</li>
                <li className="bullet-item"><span className="bullet-dot orange"></span> Tüm işçilik ve parçalarda 1 Yıl Koşulsuz Garanti</li>
                <li className="bullet-item"><span className="bullet-dot green"></span> Kırmadan, dökmeden, estetik ve gizli kablolama</li>
                <li className="bullet-item"><span className="bullet-dot purple"></span> Gezici donanımlı mobil araçlarla 30 dakikada kapınızda</li>
              </ul>
            </div>

            <div>
              <div className="hero-v2-card" style={{ boxShadow: 'var(--shadow-xl)' }}>
                <img
                  src="/assets/images/hero-technician.jpg"
                  alt="Yöntek Uyducu Kurumsal Ekip"
                  className="hero-v2-img"
                  style={{ height: '420px' }}
                />
                <div className="hero-img-overlay-bottom">
                  <div className="hero-overlay-tag">YÖNTEK TEKNİK SERVİS</div>
                  <div className="hero-overlay-text">Garantili ve Belgeli Teknik Servis Standartları</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-features-3col">
            
            <div className="about-feature-box">
              <div className="about-feature-icon service-v2-icon-box blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m4.93 4.93 4.24 4.24"/>
                  <path d="m14.83 9.17 4.24-4.24"/>
                  <path d="m14.83 14.83 4.24 4.24"/>
                  <path d="m9.17 14.83-4.24 4.24"/>
                </svg>
              </div>
              <h3 className="about-feature-title">Dijital Ölçüm Teknolojisi</h3>
              <p className="about-feature-desc">
                Göz kararı değil, dijital dB mikrovoltaj ölçüm cihazlarıyla sinyal seviyesini %100 kapasiteye ayarlıyoruz.
              </p>
            </div>

            <div className="about-feature-box">
              <div className="about-feature-icon service-v2-icon-box orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="about-feature-title">1 Yıl Resmi Garanti</h3>
              <p className="about-feature-desc">
                Kullanılan tüm çanaklar, santraller, LNB'ler ve kablolar 1 yıl birebir parça ve servis garantisi altındadır.
              </p>
            </div>

            <div className="about-feature-box">
              <div className="about-feature-icon service-v2-icon-box green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="about-feature-title">Hızlı Mobil Servis (30 Dk)</h3>
              <p className="about-feature-desc">
                Kartal, Pendik, Maltepe ve çevre ilçelerde hazır bekleyen servis aracımızla çağrınızdan 30 dk sonra kapınızdayız.
              </p>
            </div>

          </div>

          <div className="stats-cards-row" style={{ background: '#0f172a', padding: '32px 24px', borderRadius: '24px' }}>
            <div className="stat-frosted-card">
              <div className="stat-number blue">15+</div>
              <div className="stat-label">Yıllık Tecrübe</div>
            </div>
            <div className="stat-frosted-card">
              <div className="stat-number white">10.000+</div>
              <div className="stat-label">Mutlu Müşteri</div>
            </div>
            <div className="stat-frosted-card">
              <div className="stat-number green">30 Dk</div>
              <div className="stat-label">Ortalama Servis Süresi</div>
            </div>
            <div className="stat-frosted-card">
              <div className="stat-number orange">%100</div>
              <div className="stat-label">Sinyal Garantisi</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

