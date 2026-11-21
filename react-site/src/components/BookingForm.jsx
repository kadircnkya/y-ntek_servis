import React, { useState, useEffect } from 'react'
import { siteConfig, siteServices, allDistricts } from '../config.js'
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics.js'

export default function BookingForm({ initialService = '', initialDistrict = 'Kartal' }) {
  const [adSoyad, setAdSoyad] = useState('')
  const [telefon, setTelefon] = useState('')
  const [hizmet, setHizmet] = useState(initialService || '')
  const [ilce, setIlce] = useState(initialDistrict || 'Kartal')
  const [tarih, setTarih] = useState('')
  const [saat, setSaat] = useState('')
  const [arizaNotu, setArizaNotu] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialService) setHizmet(initialService)
  }, [initialService])

  useEffect(() => {
    if (initialDistrict) setIlce(initialDistrict)
  }, [initialDistrict])

  useEffect(() => {
    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const dd = String(today.getDate()).padStart(2, '0')
    setTarih(`${yyyy}-${mm}-${dd}`)
  }, [])

  const handlePhoneChange = (e) => {
    let val = e.target.value.replace(/\D/g, '')
    if (val.startsWith('90')) val = val.substring(2)
    else if (val.startsWith('0')) val = val.substring(1)
    val = val.substring(0, 10)

    let formatted = ''
    if (val.length > 0) formatted = '0' + val.substring(0, 3)
    if (val.length >= 4) formatted += ' ' + val.substring(3, 6)
    if (val.length >= 7) formatted += ' ' + val.substring(6, 8)
    if (val.length >= 9) formatted += ' ' + val.substring(8, 10)
    setTelefon(formatted)
    if (errors.telefon) setErrors((prev) => ({ ...prev, telefon: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!adSoyad.trim() || adSoyad.trim().length < 3) newErrors.adSoyad = true
    const rawPhone = telefon.replace(/\D/g, '')
    if (rawPhone.length < 10) newErrors.telefon = true
    if (!hizmet) newErrors.hizmet = true
    if (!ilce) newErrors.ilce = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    trackWhatsAppClick()

    let formattedDate = tarih
    if (formattedDate) {
      const parts = formattedDate.split('-')
      if (parts.length === 3) formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`
    } else {
      formattedDate = 'Bugün / En Kısa Sürede'
    }

    const selectedTime = saat || 'Fark Etmez / İlk Müsait Saatte'
    const noteText = arizaNotu.trim() || 'Belirtilmedi'

    let message = `*YÖNTEK UYDUCU - HIZLI SERVİS TALEBİ*\n\n`
    message += `👤 *Ad Soyad:* ${adSoyad.trim()}\n`
    message += `📞 *Telefon:* ${telefon.trim()}\n`
    message += `🛠 *Hizmet / Sorun:* ${hizmet}\n`
    message += `📍 *İlçe / Bölge:* ${ilce}\n`
    message += `📅 *Randevu Tarihi:* ${formattedDate}\n`
    message += `⏰ *Tercih Edilen Saat:* ${selectedTime}\n`
    message += `📝 *Arıza / Adres Notu:* ${noteText}\n\n`
    message += `_Web siteniz üzerinden servis talebi oluşturuldu. En kısa sürede ustamızın dönüşünü rica ederim._`

    const waUrl = `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank')
  }

  return (
    <section className="contact-section-v2" id="randevu">
      <div className="container">
        
        <div className="section-head-centered">
          <span className="section-pill-badge">HIZLI SERVİS TALEBİ</span>
          <h2 className="section-h2-title">SERVİS RANDEVUSU OLUŞTURUN</h2>
          <p className="section-subtitle-lead">
            Formu doldurun, talebiniz anında WhatsApp üzerinden ustamıza iletilsin ve dakikalar içinde yola çıkılsın.
          </p>
        </div>

        <div className="contact-v2-grid">
          
          <div className="contact-v2-cards">
            
            <div className="contact-side-card">
              <div className="contact-side-icon blue">
                <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/></svg>
              </div>
              <div className="contact-side-info">
                <span className="contact-side-title">7/24 Acil Usta Hattı</span>
                <span className="contact-side-value">{siteConfig.phoneDisplay}</span>
                <a href={siteConfig.phoneTel} onClick={trackPhoneClick} className="contact-side-action">
                  Hemen Telefonla Arayın →
                </a>
              </div>
            </div>

            <div className="contact-side-card">
              <div className="contact-side-icon green">
                <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.14c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.32c-.84-1.34-1.28-2.9-1.28-4.51 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.21-8.22 8.21zm4.5-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/></svg>
              </div>
              <div className="contact-side-info">
                <span className="contact-side-title">WhatsApp Destek & Konum</span>
                <span className="contact-side-value">{siteConfig.phoneDisplay}</span>
                <a href={siteConfig.whatsappUrl} onClick={trackWhatsAppClick} target="_blank" rel="noopener noreferrer" className="contact-side-action">
                  WhatsApp'tan Konum Gönderin →
                </a>
              </div>
            </div>

            <div className="contact-side-card">
              <div className="contact-side-icon orange">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div className="contact-side-info">
                <span className="contact-side-title">Merkez Servis Noktası</span>
                <span className="contact-side-value">Kartal / İstanbul</span>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Anadolu Yakası geneline 30 dk mobil servis aracı</span>
              </div>
            </div>

          </div>

          <div className="form-v2-card">
            <div className="form-v2-header">
              <div className="form-v2-accent-bar" aria-hidden="true"></div>
              <h3 className="form-v2-title">Servis Talep Formu</h3>
            </div>

            <form onSubmit={handleSubmit} className="form-v2-body" noValidate>
              
              <div className="form-2col-row">
                <div className="form-field-group">
                  <label htmlFor="randevuAdSoyad" className="form-field-label">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    id="randevuAdSoyad"
                    value={adSoyad}
                    onChange={(e) => {
                      setAdSoyad(e.target.value)
                      if (errors.adSoyad) setErrors((prev) => ({ ...prev, adSoyad: false }))
                    }}
                    className="form-v2-input"
                    style={errors.adSoyad ? { borderColor: '#ef4444', backgroundColor: '#fff5f5' } : {}}
                    placeholder="Örn: Ahmet Yılmaz"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-field-group">
                  <label htmlFor="randevuTelefon" className="form-field-label">Telefon Numaranız *</label>
                  <input
                    type="tel"
                    id="randevuTelefon"
                    value={telefon}
                    onChange={handlePhoneChange}
                    className="form-v2-input"
                    style={errors.telefon ? { borderColor: '#ef4444', backgroundColor: '#fff5f5' } : {}}
                    placeholder="05XX XXX XX XX"
                    required
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="form-2col-row">
                <div className="form-field-group">
                  <label htmlFor="randevuHizmet" className="form-field-label">Hizmet / Sorun Nedir? *</label>
                  <select
                    id="randevuHizmet"
                    value={hizmet}
                    onChange={(e) => {
                      setHizmet(e.target.value)
                      if (errors.hizmet) setErrors((prev) => ({ ...prev, hizmet: false }))
                    }}
                    className="form-v2-input"
                    style={errors.hizmet ? { borderColor: '#ef4444', backgroundColor: '#fff5f5' } : {}}
                    required
                  >
                    <option value="" disabled>Hizmet Seçin</option>
                    {siteServices.map((srv) => (
                      <option key={srv.id} value={srv.title}>{srv.title}</option>
                    ))}
                    <option value="Sinyal Yok Hatası">Sinyal Yok Hatası</option>
                    <option value="Diğer Genel Destek">Diğer Genel Destek</option>
                  </select>
                </div>
                <div className="form-field-group">
                  <label htmlFor="randevuIlce" className="form-field-label">İlçe / Bölgeniz *</label>
                  <select
                    id="randevuIlce"
                    value={ilce}
                    onChange={(e) => {
                      setIlce(e.target.value)
                      if (errors.ilce) setErrors((prev) => ({ ...prev, ilce: false }))
                    }}
                    className="form-v2-input"
                    style={errors.ilce ? { borderColor: '#ef4444', backgroundColor: '#fff5f5' } : {}}
                    required
                  >
                    <option value="" disabled>İlçe Seçin</option>
                    {allDistricts.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-2col-row">
                <div className="form-field-group">
                  <label htmlFor="randevuTarih" className="form-field-label">Randevu Tarihi</label>
                  <input
                    type="date"
                    id="randevuTarih"
                    value={tarih}
                    onChange={(e) => setTarih(e.target.value)}
                    className="form-v2-input"
                  />
                </div>
                <div className="form-field-group">
                  <label htmlFor="randevuSaat" className="form-field-label">Saat Dilimi</label>
                  <select
                    id="randevuSaat"
                    value={saat}
                    onChange={(e) => setSaat(e.target.value)}
                    className="form-v2-input"
                  >
                    <option value="">Saat Dilimi (Fark Etmez)</option>
                    <option value="Sabah (09:00 - 12:00)">Sabah (09:00 - 12:00)</option>
                    <option value="Öğle (12:00 - 15:00)">Öğle (12:00 - 15:00)</option>
                    <option value="Öğleden Sonra (15:00 - 18:00)">Öğleden Sonra (15:00 - 18:00)</option>
                    <option value="Akşam (18:00 - 21:00)">Akşam (18:00 - 21:00)</option>
                  </select>
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="randevuArizaNotu" className="form-field-label">Arıza / Adres Notunuz</label>
                <textarea
                  id="randevuArizaNotu"
                  value={arizaNotu}
                  onChange={(e) => setArizaNotu(e.target.value)}
                  className="form-v2-input"
                  placeholder="İlçe, mahalle veya sorunun detaylarını kısaca yazın (Örn: Çanak sinyali gitti, LNB kontrol edilsin)..."
                />
              </div>

              <button type="submit" className="btn-form-v2-whatsapp" id="btnSubmitWhatsapp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.14c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.32c-.84-1.34-1.28-2.9-1.28-4.51 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.21-8.22 8.21zm4.5-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
                </svg>
                <span>SERVİS OLUŞTUR (WHATSAPP)</span>
              </button>

              <p className="form-helper-note">Bilgileriniz direkt WhatsApp üzerinden nöbetçi ustamıza iletilir.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

