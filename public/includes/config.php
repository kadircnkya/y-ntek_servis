<?php
/**
 * YÖNTEK TEKNİK SERVİS - GENEL YAPILANDIRMA DOSYASI
 * Tüm Sayfalar (index, hizmetlerimiz, hakkimizda, hizmet-bolgeleri, iletisim)
 */

if (!defined('SITE_URL')) {
    define('SITE_URL', '');
}

$siteName = "Yöntek Uyducu";
$siteFullName = "Yöntek Teknik Servis";
$sitePhoneDisplay = "0 537 602 34 37";
$sitePhoneTel = "tel:+905376023437";
$siteWhatsapp = "https://wa.me/905376023437";
$siteWhatsappRaw = "905376023437";
$siteAddress = "Kartal / İstanbul (Tüm Anadolu Yakası Gezici Mobil Servis)";
$siteWorkingHours = "7/24 Kesintisiz Nöbetçi Servis";

// Navigasyon Menüsü
$navItems = [
    [
        'title' => 'Ana Sayfa',
        'url' => 'index.php',
        'id' => 'anasayfa'
    ],
    [
        'title' => 'Hizmetlerimiz',
        'url' => 'hizmetlerimiz.php',
        'id' => 'hizmetler'
    ],
    [
        'title' => 'Kurumsal',
        'url' => 'hakkimizda.php',
        'id' => 'kurumsal'
    ],
    [
        'title' => 'Hizmet Bölgeleri',
        'url' => 'hizmet-bolgeleri.php',
        'id' => 'bolgeler'
    ],
    [
        'title' => 'İletişim & Randevu',
        'url' => 'iletisim.php',
        'id' => 'iletisim'
    ]
];

// Hizmetler Listesi
$siteServices = [
    [
        'id' => 'canak-anten-montaji',
        'title' => 'Çanak Anten Montajı',
        'short_desc' => 'Balkon, çatı veya teras için rüzgara dayanıklı garantili çanak anten montajı ve hassas yön ayarı.',
        'full_desc' => 'Yöntek Teknik Servis olarak, tüm marka ve model çanak antenlerin montajını sağlam duvar ve zemin aparatlarıyla gerçekleştiriyoruz. Paslanmaz çelik vidalama ve rüzgar mukavemetli ayaklar ile çanağınızın yönü fırtınalarda dahi bozulmaz. Dijital spektrum cihazımızla Türksat 4A, Hotbird, Astra ve Eutelsat uydularına en yüksek sinyal seviyesiyle kilitlenir.',
        'color' => 'blue',
        'icon' => 'dish',
        'bullets' => [
            'Sıfır Çanak Kurulumu & Eski Çanak Değişimi',
            'LNB Montajı, Yön & Polarizasyon Ayarı',
            'Kaliteli RG6 U6 Çift Ekranlı Bakır Kablo',
            'Balkon, Teras veya Çatıya Sağlam Montaj',
            '1 Yıl Resmi İşçilik ve Parça Garantisi'
        ]
    ],
    [
        'id' => 'uydu-ariza-sinyal-ayari',
        'title' => 'Uydu Arıza ve Sinyal Ayarı',
        'short_desc' => 'TV ekranınızdaki "Sinyal Yok" hatasını profesyonel dijital spektrum cihazlarımızla dakikalar içinde çözüyoruz.',
        'full_desc' => 'Televizyonunuzda bazı kanallar çekmiyor, görüntüde donma veya pikselleşme oluyorsa ya da komple "Sinyal Yok" uyarısı alıyorsanız gezici servisimiz 30 dakikada adresinizde. Kalibre edilmiş profesyonel sinyal bulucumuz ile çanak milimetrik olarak ayarlanır, LNB zayıflığı veya kablo kırılmaları noktasal olarak bulunur.',
        'color' => 'orange',
        'icon' => 'signal',
        'bullets' => [
            '"Sinyal Yok" Hatasının 5 Dakikada Tespiti',
            'HD / 4K Yayınlar İçin Maksimum dB Sinyal Seviyesi',
            'Kırık, Ezik veya Su Almış Kabloların Yenilenmesi',
            'LNB Arıza Tespiti ve Orijinal Parça Değişimi',
            'Hava Koşullarından Etkilenmeyen Hassas İnce Ayar'
        ]
    ],
    [
        'id' => 'merkezi-uydu-sistemleri',
        'title' => 'Merkezi Uydu Sistemleri',
        'short_desc' => 'Apartman ve siteler için tek çanaktan tüm dairelere kesintisiz yayın aktarımı sağlayan multiswitch çözümleri.',
        'full_desc' => 'Binalardaki çanak kirliliğini ortadan kaldıran merkezi uydu santralleri (Multiswitch), daire sayısı ne olursa olsun her eve bağımsız ve kristal netliğinde sinyal ulaştırır. Sıfırdan santral kurulumu, arızalı multiswitch değişimi, kaskat sistem güçlendirme ve daire hatlarındaki sinyal düşüklüğü onarımı uzmanlık alanımızdır.',
        'color' => 'indigo',
        'icon' => 'building',
        'bullets' => [
            '10 Daireden 100+ Daireye Kadar Merkezi Santral',
            'Multiswitch Değişimi ve Güç Kaynağı Onarımı',
            'Kaskatlı Sistem ve Headend Çözümleri',
            'Daire İçi Zayıf Kalan Hatların Güçlendirilmesi',
            'Apartman Yönetimlerine Faturalı & Garantili Hizmet'
        ]
    ],
    [
        'id' => 'tv-kurulum-onarım',
        'title' => 'TV Kurulum ve Duvar Montajı',
        'short_desc' => 'Her marka LCD, LED, OLED TV için sağlam duvara askı aparatı montajı ve profesyonel kanal sıralama.',
        'full_desc' => 'Samsung, LG, Philips, Vestel, Sony, TCL ve tüm marka televizyonlarınız için sabit, eğilebilir veya hareketli duvara askı aparatı montajı yapıyoruz. Su terazisi ile kusursuz teraziye alınan TV, deprem ve darbelere karşı emniyetli şekilde sabitlenir. TKGS kanal sıralaması yapılarak Türk kanalları favori sıranıza göre dizilir.',
        'color' => 'green',
        'icon' => 'tv',
        'bullets' => [
            'Sabit, Eğilebilir ve Çift Kollu Hareketli Askı Montajı',
            'Gizli Kablo Kanalı ile Estetik Görünüm',
            'TKGS Otomatik Kanal Sıralama ve Tasnif',
            'Smart TV Kurulumu ve Wi-Fi / İnternet Ayarları',
            'Düşmeye ve Sarsıntıya Karşı Özel Çelik Dübel'
        ]
    ],
    [
        'id' => 'tv-frekans-guncelleme',
        'title' => 'TV Frekans Güncelleme',
        'short_desc' => 'Türksat 4A şebeke arama, eksik veya kayıp kanalların güncel frekanslarını tarayıp listenizi düzenliyoruz.',
        'full_desc' => 'Yayıncı kuruluşların frekans değişiklikleri sebebiyle kaybolan veya sesi gelip görüntüsü olmayan kanalları güncel Türksat 4A frekans listesine göre yeniden yüklüyoruz. Ulusal kanallar, spor, belgesel, çocuk ve haber kanallarını standart Türk yayın düzenine göre (1-TRT, 2-ATV, 3-Show vb.) listeleyip teslim ediyoruz.',
        'color' => 'cyan',
        'icon' => 'frequency',
        'bullets' => [
            'Türksat 4A Otomatik Şebeke Arama (Network Scan)',
            'Kayıp, Silinmiş veya Donan Kanalların Kurtarılması',
            'HD / 4K Kanal Sıralaması ve Favori Listesi',
            'Yabancı Uydularda (Hotbird, Astra) Kanal Taraması',
            'TV & Alıcı Yazılım Güncellemesi'
        ]
    ],
    [
        'id' => 'guvenlik-kamerasi-kurulumu',
        'title' => 'Güvenlik Kamerası Kurulumu',
        'short_desc' => 'Ev, ofis ve bina ortak alanları için yüksek çözünürlüklü AHD ve IP güvenlik kamera sistemi montajı.',
        'full_desc' => 'Apartman girişleri, otoparklar, iş yerleri ve müstakil yapılar için gece görüşlü, hareket algılamalı 1080p ve 4K güvenlik kamera sistemleri kuruyoruz. Kayıt cihazı (DVR/NVR) ve sabit disk yapılandırması tamamlanarak cep telefonunuzdan 7/24 dünyanın her yerinden canlı izleme imkanı sunuyoruz.',
        'color' => 'purple',
        'icon' => 'cctv',
        'bullets' => [
            'Full HD ve 4K Gece Görüşlü Güvenlik Kameraları',
            'DVR / NVR Kayıt Cihazı ve Kesintisiz Güç Kaynağı',
            'Mobil Uygulama ile Cepten 7/24 Canlı İzleme',
            'Apartman, Otopark ve İş Yeri Kablolama Altyapısı',
            '2 Yıl Birebir Değişim ve Parça Garantisi'
        ]
    ]
];

// İstanbul İlçeleri Listesi (Anadolu Yakası + Avrupa Yakası)
$anatolianDistricts = [
    "Kartal" => "Merkez Servis - 15-20 Dk",
    "Maltepe" => "Mobil Servis - 20-30 Dk",
    "Pendik" => "Mobil Servis - 20-30 Dk",
    "Tuzla" => "Mobil Servis - 25-35 Dk",
    "Kadıköy" => "Mobil Servis - 25-35 Dk",
    "Ataşehir" => "Mobil Servis - 25-35 Dk",
    "Ümraniye" => "Mobil Servis - 25-35 Dk",
    "Üsküdar" => "Mobil Servis - 30-40 Dk",
    "Sancaktepe" => "Mobil Servis - 25-35 Dk",
    "Sultanbeyli" => "Mobil Servis - 25-35 Dk",
    "Çekmeköy" => "Mobil Servis - 30-40 Dk",
    "Beykoz" => "Mobil Servis - 35-45 Dk",
    "Şile" => "Mobil Servis - Randevulu",
    "Adalar" => "Mobil Servis - Planlı"
];

$allDistricts = [
    "Kartal", "Maltepe", "Pendik", "Tuzla", "Kadıköy", "Ataşehir", "Ümraniye", "Üsküdar", 
    "Sancaktepe", "Sultanbeyli", "Çekmeköy", "Beykoz", "Şile", "Adalar", "Beşiktaş", "Şişli", 
    "Sarıyer", "Beyoğlu", "Fatih", "Bakırköy", "Zeytinburnu", "Eyüpsultan", "Kağıthane", 
    "Gaziosmanpaşa", "Bayrampaşa", "Güngören", "Esenler", "Bağcılar", "Bahçelievler", 
    "Küçükçekmece", "Başakşehir", "Avcılar", "Beylikdüzü", "Esenyurt", "Büyükçekmece", 
    "Çatalca", "Silivri", "Arnavutköy", "Sultangazi"
];

// Menü Aktiflik Fonksiyonu
function isPageActive($currentFile, $targetFile) {
    return ($currentFile === $targetFile) ? 'active' : '';
}
