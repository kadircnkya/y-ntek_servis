<?php
/**
 * YÖNTEK TEKNİK SERVİS - ANA SAYFA (index.php)
 * Çok Sayfalı Mimaride Ana Sayfa
 */
$pageTitle = "Yöntek Uyducu | İstanbul Anadolu Yakası Uydu & Çanak Anten Servisi";
$pageDescription = "İstanbul Anadolu Yakası'nın en hızlı uydu servisi! Çanak anten montajı, sinyal ayarı, merkezi uydu ve TV kurulumunda 30 dakikada kapınızdayız. 7/24 Acil Usta: 0537 602 34 37";

require_once __DIR__ . '/includes/header.php';
?>

  <main>
    <!-- ====================================================================
         HERO SECTION (Açılış Bölümü - Sıfır Kayma, Kusursuz Grid)
         ==================================================================== -->
    <section class="hero-v2" id="anasayfa">
      <div class="container hero-v2-grid">
        
        <!-- Sol Kolon -->
        <div class="hero-v2-left">
          <div class="hero-pill-badge">
            <span class="pulse-dot"></span>
            İSTANBUL'UN HER YERİNE 30 DAKİKADA SERVİS
          </div>

          <h1 class="hero-v2-h1">
            YÖNTEK UYDUCU<br>
            <span class="gradient-text-blue">İSTANBUL UYDU SERVİSİ</span>
          </h1>

          <h2 class="hero-v2-subheading">Garantili Uydu Servisi</h2>

          <p class="hero-v2-desc">
            Çanak anten montajı, sinyal ayarı, merkezi uydu ve televizyon sistemlerinde <strong>kırmadan, dökmeden</strong>, profesyonel cihazlarla aynı gün garantili teknik servis.
          </p>

          <!-- 2x2 Güven Mini-Kartları -->
          <div class="hero-trust-grid">
            
            <div class="trust-mini-card">
              <div class="trust-icon-box blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div class="trust-card-text">
                <span class="trust-card-title">Hızlı Servis</span>
                <span class="trust-card-sub">30 Dk Adresinizdeyiz</span>
              </div>
            </div>

            <div class="trust-mini-card">
              <div class="trust-icon-box orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div class="trust-card-text">
                <span class="trust-card-title">Sinyal Garantisi</span>
                <span class="trust-card-sub">%100 Net Görüntü</span>
              </div>
            </div>

            <div class="trust-mini-card">
              <div class="trust-icon-box green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div class="trust-card-text">
                <span class="trust-card-title">Uygun Fiyat</span>
                <span class="trust-card-sub">İşlem Öncesi Net Fiyat</span>
              </div>
            </div>

            <div class="trust-mini-card">
              <div class="trust-icon-box purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div class="trust-card-text">
                <span class="trust-card-title">Uzman Ekip</span>
                <span class="trust-card-sub">15+ Yıllık Tecrübe</span>
              </div>
            </div>

          </div>

          <!-- Hero Butonları -->
          <div class="hero-v2-cta-row">
            <a href="<?php echo $sitePhoneTel; ?>" class="btn-hero-urgent" title="Hemen Arayın">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
              </svg>
              <span>HEMEN ARAYIN</span>
            </a>

            <a href="iletisim.php" class="btn-hero-secondary" title="Online Servis Randevusu Al">
              <span>Online Randevu Al</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <!-- Sağ Kolon (Kusursuz Hizalanmış Teknisyen Görseli) -->
        <div class="hero-v2-right">
          <div class="hero-v2-card">
            <picture>
              <source srcset="assets/images/hero-technician-2x.webp 2x, assets/images/hero-technician.webp 1x" type="image/webp">
              <source srcset="assets/images/hero-technician-2x.jpg 2x, assets/images/hero-technician.jpg 1x" type="image/jpeg">
              <img src="assets/images/hero-technician.jpg" alt="Yöntek Uyducu Teknisyeni Çanak Anten Sinyal Ayarı Yaparken" class="hero-v2-img" width="520" height="440" loading="eager">
            </picture>

            <!-- Yüzen 7/24 Kesintisiz Hizmet Rozeti (Kartın İçine Sabitlendi) -->
            <div class="hero-floating-badge" aria-hidden="true">
              <span class="big">7/24</span>
              <span>HIZLI</span>
              <span>SERVİS</span>
            </div>

            <div class="hero-img-overlay-bottom">
              <div class="hero-overlay-tag">
                <span class="pulse-dot"></span>
                PROFESYONEL ÖLÇÜM CİHAZLARI
              </div>
              <div class="hero-overlay-text">
                Dijital Sinyal Bulucu ile %100 Kesintisiz Net Görüntü
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ====================================================================
         ACİL ÇAĞRI BANNERI ("SİNYAL YOK" MU YAZIYOR?)
         ==================================================================== -->
    <div class="urgent-banner-section">
      <div class="container">
        <div class="urgent-banner-card">
          <div class="urgent-banner-left">
            <div class="warning-icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <h2 class="urgent-banner-heading">
                TV EKRANINIZDA <span class="highlight-amber">"SİNYAL YOK"</span> MU YAZIYOR?
              </h2>
              <p class="urgent-banner-sub">
                Maç, dizi ve haber keyfiniz yarım kalmasın! Kartal ve tüm İstanbul genelinde mobil teknik servis ekiplerimizle 30 dakikada adresinizdeyiz.
              </p>
            </div>
          </div>

          <a href="<?php echo $sitePhoneTel; ?>" class="btn-urgent-call-white" title="Acil Servis Çağır">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
            </svg>
            <span>HEMEN SERVİS ÇAĞIR</span>
          </a>
        </div>
      </div>
    </div>

    <!-- ====================================================================
         HİZMETLERİMİZ ÖZETİ (6 Hizmet Kartı)
         ==================================================================== -->
    <section class="services-v2" id="hizmetler">
      <div class="container">
        
        <div class="section-head-centered">
          <span class="section-pill-badge">PROFESYONEL ÇÖZÜMLER</span>
          <h2 class="section-h2-title">İSTANBUL UYDU HİZMETLERİ</h2>
          <p class="section-subtitle-lead">
            Garantili işçilik, orijinal parça ve en modern dijital sinyal ölçüm cihazlarıyla kesintisiz teknik destek.
          </p>
        </div>

        <div class="services-v2-grid">
          <?php foreach ($siteServices as $s): ?>
            <a href="hizmetlerimiz.php" class="service-v2-card">
              <!-- Köşe Dekoratif Aksanı -->
              <div class="card-corner-accent <?php echo $s['color']; ?>" aria-hidden="true"></div>

              <!-- İkon -->
              <div class="service-v2-icon-box <?php echo $s['color']; ?>">
                <?php if ($s['icon'] === 'dish'): ?>
                  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
                    <path d="M10 28C10 18.06 18.06 10 28 10L29.5 13C21.49 13 15 19.49 15 27.5L10 28Z" fill="currentColor"/>
                    <ellipse cx="20" cy="22" rx="7" ry="11" transform="rotate(-35 20 22)" fill="currentColor"/>
                    <line x1="19" y1="21" x2="31" y2="13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                    <circle cx="31" cy="13" r="3" fill="currentColor"/>
                    <line x1="12" y1="30" x2="6" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="3" y1="38" x2="15" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                  </svg>
                <?php elseif ($s['icon'] === 'signal'): ?>
                  <svg viewBox="0 0 44 44" fill="currentColor">
                    <rect x="6" y="28" width="6" height="12" rx="1.5"/>
                    <rect x="15" y="21" width="6" height="19" rx="1.5"/>
                    <rect x="24" y="13" width="6" height="27" rx="1.5"/>
                    <rect x="33" y="6" width="6" height="34" rx="1.5"/>
                  </svg>
                <?php elseif ($s['icon'] === 'building'): ?>
                  <svg viewBox="0 0 44 44" fill="currentColor">
                    <rect x="4" y="14" width="14" height="26" rx="1.5"/>
                    <rect x="18" y="8" width="18" height="32" rx="1.5"/>
                    <line x1="27" y1="8" x2="27" y2="3" stroke="currentColor" stroke-width="2"/>
                    <line x1="24" y1="5" x2="30" y2="5" stroke="currentColor" stroke-width="2"/>
                  </svg>
                <?php elseif ($s['icon'] === 'tv'): ?>
                  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
                    <rect x="4" y="8" width="36" height="24" rx="3" stroke-width="3"/>
                    <line x1="16" y1="36" x2="28" y2="36" stroke-width="3" stroke-linecap="round"/>
                    <line x1="22" y1="32" x2="22" y2="36" stroke-width="3"/>
                  </svg>
                <?php elseif ($s['icon'] === 'frequency'): ?>
                  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
                    <rect x="4" y="8" width="36" height="24" rx="3" stroke-width="3"/>
                    <path d="M16 23C16 18.5 19.5 15 24 15" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="26" cy="16" r="1.5" fill="currentColor"/>
                    <line x1="20" y1="21" x2="26" y2="16" stroke-width="1.8"/>
                    <line x1="16" y1="36" x2="28" y2="36" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                <?php elseif ($s['icon'] === 'cctv'): ?>
                  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
                    <path d="M7 16L32 10L35 22L10 28L7 16Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
                    <polygon points="32,10 40,7 39,23 35,22" fill="currentColor"/>
                    <path d="M13 27L13 36L20 36" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                <?php endif; ?>
              </div>

              <!-- Başlık & Kısa Açıklama -->
              <h3 class="service-v2-card-title"><?php echo htmlspecialchars($s['title']); ?></h3>
              <p class="service-v2-desc"><?php echo htmlspecialchars($s['short_desc']); ?></p>

              <!-- 3 Maddeli Noktalı Liste -->
              <ul class="service-v2-bullet-list">
                <?php foreach (array_slice($s['bullets'], 0, 3) as $b): ?>
                  <li class="bullet-item">
                    <span class="bullet-dot <?php echo $s['color']; ?>"></span>
                    <span><?php echo htmlspecialchars($b); ?></span>
                  </li>
                <?php endforeach; ?>
              </ul>
            </a>
          <?php endforeach; ?>
        </div>

        <div style="text-align:center; margin-top: 40px;">
          <a href="hizmetlerimiz.php" class="btn-hero-secondary">
            <span>Tüm Hizmetlerimizi & Fiyat Detaylarını İnceleyin</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>

    <!-- ====================================================================
         KURUMSAL & İSTATİSTİKLER (Koyu Zemin & 4 İstatistik Kartı)
         ==================================================================== -->
    <section class="stats-section-dark" id="kurumsal">
      <div class="container">
        <div class="stats-grid-2col">
          
          <div>
            <span class="stats-pill-badge">İSTANBUL'UN EN KÖKLÜ UYDU SERVİSİ</span>
            <h2 class="stats-h2">
              UYDU SİSTEMLERİNDE<br>
              <span class="gradient-text-cyan">TECRÜBE KONUŞUR.</span>
            </h2>
            <p class="stats-desc">
              15 yılı aşkın sektör deneyimimizle, sinyal kayıplarından bina santrallerine kadar her ölçekteki uydu arızasını en ileri teknolojiye sahip kalibre ölçüm cihazlarımızla kökünden çözüyoruz.
            </p>

            <div class="stats-cards-row">
              <div class="stat-frosted-card">
                <div class="stat-number blue">15+</div>
                <div class="stat-label">Yıllık Tecrübe</div>
              </div>
              <div class="stat-frosted-card">
                <div class="stat-number white">10K+</div>
                <div class="stat-label">Mutlu Müşteri</div>
              </div>
              <div class="stat-frosted-card">
                <div class="stat-number green">30dk</div>
                <div class="stat-label">Ort. Servis Süresi</div>
              </div>
              <div class="stat-frosted-card">
                <div class="stat-number orange">%100</div>
                <div class="stat-label">Sinyal Garantisi</div>
              </div>
            </div>

            <div style="margin-top: 28px;">
              <a href="hakkimizda.php" style="color:#38bdf8;font-weight:800;font-size:0.95rem;text-decoration:underline;">
                Kurumsal Profilimiz ve Kalite Standartlarımız Hakkında Bilgi Alın →
              </a>
            </div>
          </div>

          <div>
            <div class="stats-right-card">
              <img src="assets/images/hero-technician.jpg" alt="Yetkili Uydu Servisi Garantisi" class="stats-right-img">
              <div class="stats-img-badge">
                ✓ Yetkili Servis Kalitesi / 1 Yıl Orijinal Parça & İşçilik Garantisi
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ====================================================================
         HIZLI SERVİS TALEBİ FORMU ÖNİZLEMESİ
         ==================================================================== -->
    <section class="contact-section-v2" id="randevu">
      <div class="container">
        
        <div class="section-head-centered">
          <span class="section-pill-badge">HIZLI SERVİS TALEBİ</span>
          <h2 class="section-h2-title">SERVİS RANDEVUSU OLUŞTURUN</h2>
          <p class="section-subtitle-lead">
            Formu doldurun, talebiniz anında WhatsApp üzerinden ustamıza iletilsin ve dakikalar içinde yola çıkılsın.
          </p>
        </div>

        <div class="contact-v2-grid">
          
          <div class="contact-v2-cards">
            
            <div class="contact-side-card">
              <div class="contact-side-icon blue">
                <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/></svg>
              </div>
              <div class="contact-side-info">
                <span class="contact-side-title">7/24 Acil Usta Hattı</span>
                <span class="contact-side-value"><?php echo $sitePhoneDisplay; ?></span>
                <a href="<?php echo $sitePhoneTel; ?>" class="contact-side-action">Hemen Telefonla Arayın →</a>
              </div>
            </div>

            <div class="contact-side-card">
              <div class="contact-side-icon green">
                <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.14c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.32c-.84-1.34-1.28-2.9-1.28-4.51 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.21-8.22 8.21zm4.5-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/></svg>
              </div>
              <div class="contact-side-info">
                <span class="contact-side-title">WhatsApp Destek & Konum</span>
                <span class="contact-side-value"><?php echo $sitePhoneDisplay; ?></span>
                <a href="<?php echo $siteWhatsapp; ?>" target="_blank" rel="noopener noreferrer" class="contact-side-action">WhatsApp'tan Konum Gönderin →</a>
              </div>
            </div>

            <div class="contact-side-card">
              <div class="contact-side-icon orange">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="contact-side-info">
                <span class="contact-side-title">Merkez Servis Noktası</span>
                <span class="contact-side-value">Kartal / İstanbul</span>
                <span style="font-size:0.85rem;color:#64748b;">Anadolu Yakası geneline 30 dk mobil servis aracı</span>
              </div>
            </div>

          </div>

          <div class="form-v2-card">
            <div class="form-v2-header">
              <div class="form-v2-accent-bar" aria-hidden="true"></div>
              <h3 class="form-v2-title">Servis Talep Formu</h3>
            </div>

            <form id="bookingForm" method="POST" action="iletisim.php" class="form-v2-body" novalidate>
              <input type="hidden" name="submit_randevu" value="1">

              <div class="form-2col-row">
                <div class="form-field-group">
                  <label for="randevuAdSoyad" class="form-field-label">Adınız Soyadınız *</label>
                  <input type="text" id="randevuAdSoyad" name="ad_soyad" class="form-v2-input" placeholder="Örn: Ahmet Yılmaz" required autocomplete="name">
                </div>
                <div class="form-field-group">
                  <label for="randevuTelefon" class="form-field-label">Telefon Numaranız *</label>
                  <input type="tel" id="randevuTelefon" name="telefon" class="form-v2-input" placeholder="05XX XXX XX XX" required autocomplete="tel">
                </div>
              </div>

              <div class="form-2col-row">
                <div class="form-field-group">
                  <label for="randevuHizmet" class="form-field-label">Hizmet / Sorun Nedir? *</label>
                  <select id="randevuHizmet" name="hizmet" class="form-v2-input" required>
                    <option value="" disabled selected>Hizmet Seçin</option>
                    <?php foreach ($siteServices as $srv): ?>
                      <option value="<?php echo htmlspecialchars($srv['title']); ?>"><?php echo htmlspecialchars($srv['title']); ?></option>
                    <?php endforeach; ?>
                    <option value="Sinyal Yok Hatası">Sinyal Yok Hatası</option>
                    <option value="Diğer Genel Destek">Diğer Genel Destek</option>
                  </select>
                </div>
                <div class="form-field-group">
                  <label for="randevuIlce" class="form-field-label">İlçe / Bölgeniz *</label>
                  <select id="randevuIlce" name="ilce" class="form-v2-input" required>
                    <option value="" disabled selected>İlçe Seçin</option>
                    <?php foreach ($allDistricts as $d): ?>
                      <option value="<?php echo htmlspecialchars($d); ?>" <?php echo ($d === 'Kartal') ? 'selected' : ''; ?>>
                        <?php echo htmlspecialchars($d); ?>
                      </option>
                    <?php endforeach; ?>
                  </select>
                </div>
              </div>

              <div class="form-2col-row">
                <div class="form-field-group">
                  <label for="randevuTarih" class="form-field-label">Randevu Tarihi</label>
                  <input type="date" id="randevuTarih" name="tarih" class="form-v2-input">
                </div>
                <div class="form-field-group">
                  <label for="randevuSaat" class="form-field-label">Saat Dilimi</label>
                  <select id="randevuSaat" name="saat" class="form-v2-input">
                    <option value="" selected>Saat Dilimi (Fark Etmez)</option>
                    <option value="Sabah (09:00 - 12:00)">Sabah (09:00 - 12:00)</option>
                    <option value="Öğle (12:00 - 15:00)">Öğle (12:00 - 15:00)</option>
                    <option value="Öğleden Sonra (15:00 - 18:00)">Öğleden Sonra (15:00 - 18:00)</option>
                    <option value="Akşam (18:00 - 21:00)">Akşam (18:00 - 21:00)</option>
                  </select>
                </div>
              </div>

              <div class="form-field-group">
                <label for="randevuArizaNotu" class="form-field-label">Arıza / Adres Notunuz</label>
                <textarea id="randevuArizaNotu" name="ariza_notu" class="form-v2-input" placeholder="İlçe, mahalle veya sorunun detaylarını kısaca yazın (Örn: Çanak sinyali gitti, LNB kontrol edilsin)..."></textarea>
              </div>

              <button type="submit" class="btn-form-v2-whatsapp" id="btnSubmitWhatsapp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.14c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.32c-.84-1.34-1.28-2.9-1.28-4.51 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.21-8.22 8.21zm4.5-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
                </svg>
                <span>SERVİS OLUŞTUR (WHATSAPP)</span>
              </button>

              <p class="form-helper-note">Bilgileriniz direkt WhatsApp üzerinden nöbetçi ustamıza iletilir.</p>
            </form>
          </div>

        </div>
      </div>
    </section>

    <!-- ====================================================================
         HİZMET BÖLGELERİ ÖNİZLEMESİ
         ==================================================================== -->
    <section class="districts-section-v2" id="bolgeler">
      <div class="container">
        
        <div class="section-head-centered">
          <span class="section-pill-badge">GENİŞ SERVİS AĞI</span>
          <h2 class="section-h2-title">İSTANBUL HİZMET BÖLGELERİ</h2>
          <p class="section-subtitle-lead">
            Anadolu Yakası başta olmak üzere tüm İstanbul genelinde 30 dakikada adrese ulaşan mobil uydu teknik servis ağı.
          </p>
        </div>

        <div class="districts-v2-grid">
          <?php foreach (array_slice($allDistricts, 0, 15) as $ilceName): ?>
            <?php $isAnadolu = array_key_exists($ilceName, $anatolianDistricts); ?>
            <a href="hizmet-bolgeleri.php" class="district-v2-card <?php echo $isAnadolu ? 'featured' : ''; ?>">
              <svg class="district-pin-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span><?php echo htmlspecialchars($ilceName); ?> Uydu Servisi</span>
            </a>
          <?php endforeach; ?>
        </div>

        <div style="text-align:center; margin-bottom: 40px;">
          <a href="hizmet-bolgeleri.php" class="btn-hero-secondary">
            <span>Tüm 39 İlçeyi ve Servis Sürelerini Görüntüleyin</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <!-- Pre-Footer Banner -->
        <div class="pre-footer-banner">
          <div>
            <h3 class="pre-footer-heading">İSTANBUL'UN EN GÜÇLÜ TEKNİK SERVİS EKİBİ!</h3>
            <p style="color:#cbd5e1;margin-top:6px;">Uydunuzda sinyal mi gitti? Çanak anteniniz mi yerinden oynadı? Bize anında ulaşın.</p>
          </div>
          <div class="pre-footer-buttons">
            <a href="<?php echo $sitePhoneTel; ?>" class="btn-prefooter-call">
              <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/></svg>
              <span>Hemen Usta Çağır</span>
            </a>
            <a href="<?php echo $siteWhatsapp; ?>" target="_blank" rel="noopener noreferrer" class="btn-prefooter-whatsapp">
              <span>WhatsApp Konum At</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  </main>

<?php
require_once __DIR__ . '/includes/footer.php';
?>
