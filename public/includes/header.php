<?php
/**
 * YÖNTEK TEKNİK SERVİS - ORTAK HEADER BİLEŞENİ
 */
require_once __DIR__ . '/config.php';

$currentPage = basename($_SERVER['PHP_SELF']);
$pageMetaTitle = isset($pageTitle) ? $pageTitle . " | " . $siteName : $siteName . " | İstanbul Uydu Servisi";
$pageMetaDesc = isset($pageDescription) ? $pageDescription : "İstanbul Anadolu Yakası genelinde uydu, çanak anten montajı, sinyal ayarı ve TV servisi. 30 dakikada kapınızda!";
?>
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title><?php echo htmlspecialchars($pageMetaTitle); ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($pageMetaDesc); ?>">
  <meta name="keywords" content="istanbul uyducu, kartal uydu servisi, anadolu yakası uydu montajı, çanak anten ayarı, sinyal yok hatası, merkezi uydu sistemi, yöntek teknik servis">
  <meta name="theme-color" content="#1e3a8a">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?php echo htmlspecialchars($pageMetaTitle); ?>">
  <meta property="og:description" content="<?php echo htmlspecialchars($pageMetaDesc); ?>">
  <meta property="og:image" content="assets/images/og-image.jpg">
  <meta property="og:locale" content="tr_TR">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">

  <!-- Google Font: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Stil Dosyası -->
  <link rel="stylesheet" href="assets/css/style.css?v=<?php echo filemtime(__DIR__ . '/../assets/css/style.css'); ?>">
</head>
<body>

  <!-- ======================================================================
       1. ÜST ACİL BİLGİ ÇUBUĞU (Topbar)
       ====================================================================== -->
  <div class="topbar">
    <div class="container topbar-content">
      <div class="topbar-left">
        <span class="topbar-title">
          <span class="pulse-dot"></span>
          İSTANBUL'UN EN HIZLI UYDU SERVİSİ
        </span>
        <span class="topbar-divider" aria-hidden="true">|</span>
        <span class="topbar-districts">Kartal, Maltepe, Pendik, Kadıköy, Ümraniye ve Tüm İlçeler</span>
      </div>
      <div class="topbar-right">
        <span class="badge-urgent">ACİL SERVİS</span>
        <a href="<?php echo $sitePhoneTel; ?>" class="topbar-phone-link" title="Hemen Telefonla Arayın">
          HEMEN ARAYIN: <?php echo $sitePhoneDisplay; ?>
        </a>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       2. STICKY NAVBAR (Buzlu Cam & Aktif Menü & Hızlı Aksiyonlar)
       ====================================================================== -->
  <header class="main-navbar" id="siteHeader">
    <div class="container navbar-container">
      
      <!-- Marka Logo -->
      <a href="index.php" class="brand-box" title="<?php echo htmlspecialchars($siteFullName); ?> Ana Sayfa">
        <div class="brand-icon-wrapper">
          <svg viewBox="0 0 36 36" fill="currentColor" aria-hidden="true">
            <path d="M7 23C7 14.7157 13.7157 8 22 8L23.5 11C16.8726 11 11.5 16.3726 11.5 23L7 23Z"/>
            <ellipse cx="16" cy="18" rx="6.5" ry="10" transform="rotate(-35 16 18)"/>
            <circle cx="26" cy="11" r="2.5"/>
            <line x1="15" y1="17" x2="26" y2="11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M8 24L3 31M3 31H12M3 31L1 34" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M28 6C30.5 8.5 32 12 32 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
            <path d="M31 3C34.5 6.5 36.5 11 36.5 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div class="brand-text-col">
          <span class="brand-main-title">YÖNTEK <span>UYDUCU</span></span>
          <span class="brand-sub-badge">7/24 İSTANBUL UYDU SERVİSİ</span>
        </div>
      </a>

      <!-- Masaüstü Navigasyon (Çok Sayfalı Yapı) -->
      <nav class="nav-links-desktop" aria-label="Ana Menü">
        <?php foreach ($navItems as $item): ?>
          <a href="<?php echo $item['url']; ?>" class="nav-item-link <?php echo isPageActive($currentPage, $item['url']); ?>">
            <?php echo htmlspecialchars($item['title']); ?>
          </a>
        <?php endforeach; ?>
      </nav>

      <!-- Masaüstü Sağ Butonlar -->
      <div class="nav-actions-desktop">
        <a href="<?php echo $siteWhatsapp; ?>" target="_blank" rel="noopener noreferrer" class="btn-nav-whatsapp" title="WhatsApp Canlı Destek">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.14c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.32c-.84-1.34-1.28-2.9-1.28-4.51 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.21-8.22 8.21zm4.5-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        <a href="<?php echo $sitePhoneTel; ?>" class="btn-nav-call" title="Hemen Ara">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
          </svg>
          <span>HEMEN ARA</span>
        </a>
      </div>

      <!-- Mobil Menü Aç/Kapat Butonu -->
      <button type="button" class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

    </div>

    <!-- Mobil Çekmece Menü -->
    <div class="mobile-nav-drawer" id="mobileNavDrawer">
      <?php foreach ($navItems as $item): ?>
        <a href="<?php echo $item['url']; ?>" class="mobile-nav-pill <?php echo isPageActive($currentPage, $item['url']); ?>">
          <?php echo htmlspecialchars($item['title']); ?>
        </a>
      <?php endforeach; ?>
      <a href="<?php echo $sitePhoneTel; ?>" class="btn-nav-call" style="width:100%; justify-content:center; margin-top:6px;">
        <svg viewBox="0 0 24 24" aria-hidden="true" style="width:18px;height:18px;fill:currentColor;">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
        </svg>
        <span>HEMEN SERVİS ÇAĞIR</span>
      </a>
    </div>
  </header>
