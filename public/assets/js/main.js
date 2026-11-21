/**
 * YÖNTEK UYDUCU - ANA SAYFA JAVASCRIPT
 * Tasarım Referansı: istanbuluydu.com.tr
 * Mobil Çekmece, WhatsApp Mesaj Oluşturucu ve İnteraktif Seçimler
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const WHATSAPP_PHONE = '905376023437'; // 0537 602 34 37

  // 1. Mobil Menü Aç/Kapat (Drawer)
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      mobileDrawer.classList.toggle('active');
    });

    // Menü dışına tıklayınca çekmeceyi kapat
    document.addEventListener('click', function (e) {
      if (!mobileDrawer.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileDrawer.classList.remove('active');
      }
    });

    // Linke tıklayınca çekmeceyi kapat
    mobileDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // 2. Navbar Scroll Efekti (Buzlu Cam & Gölge)
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 30) {
        siteHeader.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
      } else {
        siteHeader.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
      }
    }, { passive: true });
  }

  // 3. Tarih Alanı İçin Minimum Tarihi Bugün Olarak Ayarla
  const dateInput = document.getElementById('randevuTarih');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // 4. Telefon Numarası Formatlama (05XX XXX XX XX)
  const phoneInput = document.getElementById('randevuTelefon');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      let val = e.target.value.replace(/\D/g, '');

      if (val.startsWith('90')) {
        val = val.substring(2);
      } else if (val.startsWith('0')) {
        val = val.substring(1);
      }

      val = val.substring(0, 10);

      let formatted = '';
      if (val.length > 0) {
        formatted = '0' + val.substring(0, 3);
      }
      if (val.length >= 4) {
        formatted += ' ' + val.substring(3, 6);
      }
      if (val.length >= 7) {
        formatted += ' ' + val.substring(6, 8);
      }
      if (val.length >= 9) {
        formatted += ' ' + val.substring(8, 10);
      }

      e.target.value = formatted;
    });
  }

  // 5. Servis Talep Formu -> WhatsApp Mesajına Aktarma
  const bookingForm = document.getElementById('bookingForm');

  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('randevuAdSoyad');
      const phoneInput = document.getElementById('randevuTelefon');
      const serviceInput = document.getElementById('randevuHizmet');
      const districtInput = document.getElementById('randevuIlce');
      const dateInput = document.getElementById('randevuTarih');
      const timeInput = document.getElementById('randevuSaat');
      const noteInput = document.getElementById('randevuArizaNotu');

      let isValid = true;

      // Ad Soyad Kontrolü
      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        nameInput.style.borderColor = '#ef4444';
        nameInput.style.backgroundColor = '#fff5f5';
        isValid = false;
      } else {
        nameInput.style.borderColor = '';
        nameInput.style.backgroundColor = '';
      }

      // Telefon Kontrolü
      const rawDigits = phoneInput.value.replace(/\D/g, '');
      if (rawDigits.length < 10) {
        phoneInput.style.borderColor = '#ef4444';
        phoneInput.style.backgroundColor = '#fff5f5';
        isValid = false;
      } else {
        phoneInput.style.borderColor = '';
        phoneInput.style.backgroundColor = '';
      }

      // Hizmet Kontrolü
      if (!serviceInput.value) {
        serviceInput.style.borderColor = '#ef4444';
        serviceInput.style.backgroundColor = '#fff5f5';
        isValid = false;
      } else {
        serviceInput.style.borderColor = '';
        serviceInput.style.backgroundColor = '';
      }

      // İlçe Kontrolü
      if (!districtInput.value) {
        districtInput.style.borderColor = '#ef4444';
        districtInput.style.backgroundColor = '#fff5f5';
        isValid = false;
      } else {
        districtInput.style.borderColor = '';
        districtInput.style.backgroundColor = '';
      }

      if (!isValid) {
        const firstErr = bookingForm.querySelector('input[style*="ef4444"], select[style*="ef4444"]');
        if (firstErr) firstErr.focus();
        return;
      }

      // Tarih Formatla
      let formattedDate = dateInput ? dateInput.value : '';
      if (formattedDate) {
        const parts = formattedDate.split('-');
        if (parts.length === 3) {
          formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
        }
      } else {
        formattedDate = 'Bugün / En Kısa Sürede';
      }

      const selectedTime = (timeInput && timeInput.value) ? timeInput.value : 'Fark Etmez / İlk Müsait Saatte';
      const arizaNotu = (noteInput && noteInput.value.trim()) ? noteInput.value.trim() : 'Belirtilmedi';

      // WhatsApp Mesaj Metni İnşası (istanbuluydu formatı)
      let message = `*YÖNTEK UYDUCU - HIZLI SERVİS TALEBİ*\n\n`;
      message += `👤 *Ad Soyad:* ${nameInput.value.trim()}\n`;
      message += `📞 *Telefon:* ${phoneInput.value.trim()}\n`;
      message += `🛠 *Hizmet / Sorun:* ${serviceInput.value}\n`;
      message += `📍 *İlçe / Bölge:* ${districtInput.value}\n`;
      message += `📅 *Randevu Tarihi:* ${formattedDate}\n`;
      message += `⏰ *Tercih Edilen Saat:* ${selectedTime}\n`;
      message += `📝 *Arıza / Adres Notu:* ${arizaNotu}\n\n`;
      message += `_Web siteniz üzerinden servis talebi oluşturuldu. En kısa sürede ustamızın dönüşünü rica ederim._`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });

    // İnputlara yazıldığında kırmızı rengi temizle
    bookingForm.querySelectorAll('input, select, textarea').forEach(function (el) {
      el.addEventListener('input', function () {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
      });
      el.addEventListener('change', function () {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
      });
    });
  }

  // 6. Hizmet Kartına Tıklandığında Formdaki Hizmeti Otomatik Seç
  const serviceCards = document.querySelectorAll('.service-v2-card');
  const serviceSelect = document.getElementById('randevuHizmet');

  if (serviceCards.length > 0 && serviceSelect) {
    serviceCards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        const targetService = this.getAttribute('data-service');
        if (targetService) {
          const bookingSec = document.getElementById('randevu');
          if (bookingSec) {
            e.preventDefault();
            bookingSec.scrollIntoView({ behavior: 'smooth' });

            for (let i = 0; i < serviceSelect.options.length; i++) {
              if (serviceSelect.options[i].value === targetService) {
                serviceSelect.selectedIndex = i;
                serviceSelect.dispatchEvent(new Event('change'));
                break;
              }
            }
          }
        }
      });
    });
  }

  // 7. İlçe Kartına Tıklandığında Formdaki İlçeyi Otomatik Seç
  const districtCards = document.querySelectorAll('.district-v2-card');
  const districtSelect = document.getElementById('randevuIlce');

  if (districtCards.length > 0 && districtSelect) {
    districtCards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        const targetDistrict = this.getAttribute('data-district');
        if (targetDistrict) {
          const bookingSec = document.getElementById('randevu');
          if (bookingSec) {
            e.preventDefault();
            bookingSec.scrollIntoView({ behavior: 'smooth' });

            for (let i = 0; i < districtSelect.options.length; i++) {
              if (districtSelect.options[i].value === targetDistrict) {
                districtSelect.selectedIndex = i;
                districtSelect.dispatchEvent(new Event('change'));
                break;
              }
            }
          }
        }
      });
    });
  }
});
