<?php
/**
 * YÖNTEK TEKNİK SERVİS - HİZMET BÖLGELERİ (hizmet-bolgeleri.php)
 */
$pageTitle = "Hizmet Bölgelerimiz | İstanbul Anadolu Yakası Uydu Servisi";
$pageDescription = "Yöntek Uyducu hizmet bölgeleri: Kartal, Maltepe, Pendik, Tuzla, Kadıköy, Ataşehir, Ümraniye ve İstanbul geneli 39 ilçede 30 dakikada mobil uydu teknik servisi.";

require_once __DIR__ . '/includes/header.php';
?>

  <main>
    <!-- Sayfa Başlık Bannerı -->
    <section class="page-header-banner">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Ekmek Kırıntısı">
          <a href="index.php">Ana Sayfa</a>
          <span aria-hidden="true">/</span>
          <span>Hizmet Bölgeleri</span>
        </nav>
        <h1 class="page-header-title">İstanbul Hizmet Bölgelerimiz</h1>
        <p class="page-header-sub">
          Kartal merkezli donanımlı mobil araçlarımızla İstanbul Anadolu Yakası'nın tüm ilçe ve mahallelerine 30 dakikada ulaşıyoruz.
        </p>
      </div>
    </section>

    <!-- Anadolu Yakası Öncelikli İlçeler -->
    <section class="inner-page-section">
      <div class="container">
        
        <div class="section-head-centered">
          <span class="section-pill-badge">MOBİL EKİPLERİMİZ</span>
          <h2 class="section-h2-title">ANADOLU YAKASI HIZLI SERVİS HATLARI</h2>
          <p class="section-subtitle-lead">
            Aşağıdaki ilçelerde her an hazır bekleyen gezici ustalarımızla en geç 30-45 dakikada adresinizdeyiz.
          </p>
        </div>

        <!-- Anadolu Yakası Özel Grid -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:16px;margin-bottom:60px;">
          <?php foreach ($anatolianDistricts as $distName => $timeDesc): ?>
            <div style="background:#ffffff;border:1.5px solid #bfdbfe;border-radius:16px;padding:20px;box-shadow:var(--shadow-sm);display:flex;align-items:center;justify-content:space-between;">
              <div>
                <h3 style="font-size:1.15rem;font-weight:900;color:#0f172a;margin-bottom:4px;"><?php echo htmlspecialchars($distName); ?> Uydu Servisi</h3>
                <span style="font-size:0.85rem;color:#2563eb;font-weight:700;">⚡ <?php echo htmlspecialchars($timeDesc); ?></span>
              </div>
              <a href="iletisim.php?ilce=<?php echo urlencode($distName); ?>" style="display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;background:#eff6ff;color:#2563eb;" title="<?php echo htmlspecialchars($distName); ?> Randevu Al">
                →
              </a>
            </div>
          <?php endforeach; ?>
        </div>

        <!-- Tüm 39 İlçe Grid -->
        <div class="section-head-centered">
          <span class="section-pill-badge">GENİŞ HİZMET AĞI</span>
          <h2 class="section-h2-title">İSTANBUL GENELİ 39 İLÇE</h2>
          <p class="section-subtitle-lead">
            İstanbul'un hangi ilçesinde olursanız olun, profesyonel uydu teknik servisimiz bir telefon uzağınızda.
          </p>
        </div>

        <div class="districts-v2-grid">
          <?php foreach ($allDistricts as $ilceName): ?>
            <?php $isAnadolu = array_key_exists($ilceName, $anatolianDistricts); ?>
            <a href="iletisim.php?ilce=<?php echo urlencode($ilceName); ?>" class="district-v2-card <?php echo $isAnadolu ? 'featured' : ''; ?>">
              <svg class="district-pin-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span><?php echo htmlspecialchars($ilceName); ?> Uydu Servisi</span>
            </a>
          <?php endforeach; ?>
        </div>

      </div>
    </section>

    <!-- Acil Çağrı Bannerı -->
    <div class="container" style="margin-bottom: 60px;">
      <div class="pre-footer-banner">
        <div>
          <h3 class="pre-footer-heading">BÖLGENİZDE ACİL UYDU USTASI MI ARIYORSUNUZ?</h3>
          <p style="color:#cbd5e1;margin-top:6px;">Konumunuzu WhatsApp üzerinden gönderin, en yakın mobil ekibimizi kapınıza yönlendirelim.</p>
        </div>
        <div class="pre-footer-buttons">
          <a href="<?php echo $sitePhoneTel; ?>" class="btn-prefooter-call">
            <span>Hemen Ara: <?php echo $sitePhoneDisplay; ?></span>
          </a>
          <a href="<?php echo $siteWhatsapp; ?>" target="_blank" rel="noopener noreferrer" class="btn-prefooter-whatsapp">
            <span>WhatsApp'tan Konum At</span>
          </a>
        </div>
      </div>
    </div>
  </main>

<?php
require_once __DIR__ . '/includes/footer.php';
?>
