<?php
/**
 * YÖNTEK TEKNİK SERVİS - İLETİŞİM & RANDEVU (iletisim.php)
 * istanbuluydu.com.tr/iletisim Standartlarında
 */
$pageTitle = "İletişim & Servis Randevusu | 7/24 Acil Uydu Ustası";
$pageDescription = "Yöntek Uyducu iletişim ve servis talep formu: 0537 602 34 37 numaralı hattan hemen arayın veya WhatsApp ile adresinize randevu oluşturun.";

// URL Parametreleri (Örn: hizmetlerimiz.php'den gelen ?hizmet=... veya hizmet-bolgeleri.php'den gelen ?ilce=...)
$preselectedHizmet = isset($_GET['hizmet']) ? trim($_GET['hizmet']) : '';
$preselectedIlce = isset($_GET['ilce']) ? trim($_GET['ilce']) : 'Kartal';

// PHP Form Gönderimi (Yedek)
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["submit_randevu"])) {
    $adSoyad = trim($_POST["ad_soyad"] ?? "");
    $telefon = trim($_POST["telefon"] ?? "");
    $hizmet = trim($_POST["hizmet"] ?? "");
    $ilce = trim($_POST["ilce"] ?? "");
    $tarih = trim($_POST["tarih"] ?? "");
    $saat = trim($_POST["saat"] ?? "");
    $arizaNotu = trim($_POST["ariza_notu"] ?? "Belirtilmedi");

    $msg  = "*YÖNTEK UYDUCU - HIZLI SERVİS TALEBİ*\n\n";
    $msg .= "👤 *Ad Soyad:* " . $adSoyad . "\n";
    $msg .= "📞 *Telefon:* " . $telefon . "\n";
    $msg .= "🛠 *Hizmet / Sorun:* " . $hizmet . "\n";
    $msg .= "📍 *İlçe / Bölge:* " . $ilce . "\n";
    $msg .= "📅 *Randevu Tarihi:* " . $tarih . "\n";
    $msg .= "⏰ *Tercih Edilen Saat:* " . $saat . "\n";
    $msg .= "📝 *Arıza / Adres Notu:* " . $arizaNotu . "\n\n";
    $msg .= "_Web siteniz iletişim formu üzerinden iletildi._";

    header("Location: https://wa.me/905376023437?text=" . rawurlencode($msg));
    exit;
}

require_once __DIR__ . '/includes/header.php';
?>

  <main>
    <!-- Sayfa Başlık Bannerı -->
    <section class="page-header-banner">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Ekmek Kırıntısı">
          <a href="index.php">Ana Sayfa</a>
          <span aria-hidden="true">/</span>
          <span>İletişim & Randevu</span>
        </nav>
        <h1 class="page-header-title">İletişim & Servis Talebi</h1>
        <p class="page-header-sub">
          Acil uydu arızası veya çanak anten montajı için 7/24 bizi arayabilir ya da aşağıdaki formu doldurarak anında randevu oluşturabilirsiniz.
        </p>
      </div>
    </section>

    <!-- İletişim Kartları & Form (2 Sütunlu Grid) -->
    <section class="inner-page-section">
      <div class="container">
        
        <div class="contact-v2-grid">
          
          <!-- Sol İletişim Kartları -->
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
                <a href="<?php echo $siteWhatsapp; ?>" target="_blank" rel="noopener noreferrer" class="contact-side-action">WhatsApp'tan Mesaj Gönderin →</a>
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

            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:20px;padding:24px;box-shadow:var(--shadow-sm);">
              <h4 style="font-size:1.05rem;font-weight:900;color:#0f172a;margin-bottom:10px;">Çalışma Saatleri & Bilgi</h4>
              <p style="font-size:0.92rem;color:#64748b;line-height:1.6;margin-bottom:12px;">
                Ekiplerimiz haftanın 7 günü, bayram ve resmi tatiller dahil olmak üzere kesintisiz hizmet vermektedir.
              </p>
              <div style="display:flex;align-items:center;gap:10px;color:#16a34a;font-weight:800;font-size:0.92rem;">
                <span class="pulse-dot" style="background:#16a34a;"></span>
                <span>Şu An Nöbetçi Ustamız Aktif</span>
              </div>
            </div>

          </div>

          <!-- Sağ Form Kartı -->
          <div class="form-v2-card">
            <div class="form-v2-header">
              <div class="form-v2-accent-bar" aria-hidden="true"></div>
              <h2 class="form-v2-title">Servis Talep Formu</h2>
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
                    <option value="" disabled <?php echo empty($preselectedHizmet) ? 'selected' : ''; ?>>Hizmet Seçin</option>
                    <?php foreach ($siteServices as $srv): ?>
                      <option value="<?php echo htmlspecialchars($srv['title']); ?>" <?php echo ($preselectedHizmet === $srv['title']) ? 'selected' : ''; ?>>
                        <?php echo htmlspecialchars($srv['title']); ?>
                      </option>
                    <?php endforeach; ?>
                    <option value="Sinyal Yok Hatası">Sinyal Yok Hatası</option>
                    <option value="Diğer Genel Destek">Diğer Genel Destek</option>
                  </select>
                </div>
                <div class="form-field-group">
                  <label for="randevuIlce" class="form-field-label">İlçe / Bölgeniz *</label>
                  <select id="randevuIlce" name="ilce" class="form-v2-input" required>
                    <option value="" disabled>İlçe Seçin</option>
                    <?php foreach ($allDistricts as $d): ?>
                      <option value="<?php echo htmlspecialchars($d); ?>" <?php echo ($preselectedIlce === $d) ? 'selected' : ''; ?>>
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
  </main>

<?php
require_once __DIR__ . '/includes/footer.php';
?>
