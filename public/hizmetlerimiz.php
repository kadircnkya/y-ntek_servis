<?php
/**
 * YÖNTEK TEKNİK SERVİS - HİZMETLERİMİZ (hizmetlerimiz.php)
 */
$pageTitle = "Teknik Servis Hizmetlerimiz | Çanak Anten, Sinyal Ayarı & TV Montaj";
$pageDescription = "Yöntek Uyducu hizmetleri: Çanak anten montajı, sinyal yok arıza tespiti, apartman merkezi uydu santralleri, TV duvara montaj ve frekans ayarı. 1 Yıl Garantili.";

require_once __DIR__ . '/includes/header.php';
?>

  <main>
    <!-- Sayfa Başlık Bannerı -->
    <section class="page-header-banner">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Ekmek Kırıntısı">
          <a href="index.php">Ana Sayfa</a>
          <span aria-hidden="true">/</span>
          <span>Hizmetlerimiz</span>
        </nav>
        <h1 class="page-header-title">Teknik Servis Hizmetlerimiz</h1>
        <p class="page-header-sub">
          15 yılı aşkın tecrübe, dijital sinyal bulucu ekipmanlar ve orijinal yedek parçalarla İstanbul Anadolu Yakası'nda 1 Yıl Garantili servis hizmeti.
        </p>
      </div>
    </section>

    <!-- Hizmetler Detay Listesi -->
    <section class="inner-page-section">
      <div class="container">
        
        <?php foreach ($siteServices as $srv): ?>
          <article class="service-detail-item" id="<?php echo $srv['id']; ?>">
            
            <!-- İkon -->
            <div class="service-detail-icon service-v2-icon-box <?php echo $srv['color']; ?>">
              <?php if ($srv['icon'] === 'dish'): ?>
                <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
                  <path d="M10 28C10 18.06 18.06 10 28 10L29.5 13C21.49 13 15 19.49 15 27.5L10 28Z" fill="currentColor"/>
                  <ellipse cx="20" cy="22" rx="7" ry="11" transform="rotate(-35 20 22)" fill="currentColor"/>
                  <line x1="19" y1="21" x2="31" y2="13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                  <circle cx="31" cy="13" r="3" fill="currentColor"/>
                  <line x1="12" y1="30" x2="6" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              <?php elseif ($srv['icon'] === 'signal'): ?>
                <svg viewBox="0 0 44 44" fill="currentColor">
                  <rect x="6" y="28" width="6" height="12" rx="1.5"/>
                  <rect x="15" y="21" width="6" height="19" rx="1.5"/>
                  <rect x="24" y="13" width="6" height="27" rx="1.5"/>
                  <rect x="33" y="6" width="6" height="34" rx="1.5"/>
                </svg>
              <?php elseif ($srv['icon'] === 'building'): ?>
                <svg viewBox="0 0 44 44" fill="currentColor">
                  <rect x="4" y="14" width="14" height="26" rx="1.5"/>
                  <rect x="18" y="8" width="18" height="32" rx="1.5"/>
                  <line x1="27" y1="8" x2="27" y2="3" stroke="currentColor" stroke-width="2"/>
                </svg>
              <?php elseif ($srv['icon'] === 'tv'): ?>
                <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
                  <rect x="4" y="8" width="36" height="24" rx="3" stroke-width="3"/>
                  <line x1="16" y1="36" x2="28" y2="36" stroke-width="3" stroke-linecap="round"/>
                  <line x1="22" y1="32" x2="22" y2="36" stroke-width="3"/>
                </svg>
              <?php elseif ($srv['icon'] === 'frequency'): ?>
                <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
                  <rect x="4" y="8" width="36" height="24" rx="3" stroke-width="3"/>
                  <path d="M16 23C16 18.5 19.5 15 24 15" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="26" cy="16" r="1.5" fill="currentColor"/>
                  <line x1="20" y1="21" x2="26" y2="16" stroke-width="1.8"/>
                </svg>
              <?php elseif ($srv['icon'] === 'cctv'): ?>
                <svg viewBox="0 0 44 44" fill="none" stroke="currentColor">
                  <path d="M7 16L32 10L35 22L10 28L7 16Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
                  <polygon points="32,10 40,7 39,23 35,22" fill="currentColor"/>
                  <path d="M13 27L13 36L20 36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
              <?php endif; ?>
            </div>

            <!-- İçerik -->
            <div>
              <h2 class="service-detail-title"><?php echo htmlspecialchars($srv['title']); ?></h2>
              <p class="service-detail-desc"><?php echo htmlspecialchars($srv['full_desc']); ?></p>

              <ul class="service-detail-bullets">
                <?php foreach ($srv['bullets'] as $bullet): ?>
                  <li class="bullet-item">
                    <span class="bullet-dot <?php echo $srv['color']; ?>"></span>
                    <span><?php echo htmlspecialchars($bullet); ?></span>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>

            <!-- Aksiyon Butonları -->
            <div class="service-detail-cta">
              <a href="iletisim.php?hizmet=<?php echo urlencode($srv['title']); ?>" class="btn-detail-appointment">
                <span>Randevu Al</span>
                <span aria-hidden="true">→</span>
              </a>
              <a href="https://wa.me/<?php echo $siteWhatsappRaw; ?>?text=<?php echo rawurlencode("Merhaba Yöntek Teknik Servis, " . $srv['title'] . " hakkında bilgi ve randevu almak istiyorum."); ?>" target="_blank" rel="noopener noreferrer" class="btn-detail-whatsapp">
                <span>WhatsApp'tan Yaz</span>
              </a>
            </div>

          </article>
        <?php endforeach; ?>

      </div>
    </section>

    <!-- Acil Çağrı Bannerı -->
    <div class="urgent-banner-section">
      <div class="container">
        <div class="urgent-banner-card">
          <div class="urgent-banner-left">
            <div class="warning-icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div>
              <h3 class="urgent-banner-heading">Özel Proje veya Bina Santrali İçin Teklif Mi Lazım?</h3>
              <p class="urgent-banner-sub">Toplu konut, site ve rezidans merkezi uydu sistemlerinde ücretsiz keşif imkanımızdan faydalanın.</p>
            </div>
          </div>
          <a href="<?php echo $sitePhoneTel; ?>" class="btn-urgent-call-white">
            <span>0 537 602 34 37</span>
          </a>
        </div>
      </div>
    </div>
  </main>

<?php
require_once __DIR__ . '/includes/footer.php';
?>
