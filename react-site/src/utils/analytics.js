// Google Ads Dönüşüm Etiketi Sabitleri
export const GOOGLE_ADS_CONVERSIONS = {
  PHONE: 'AW-18525634687/R_CHCLuGgawdEP-A24FF',
  WHATSAPP: 'AW-18525634687/WHATSAPP_LABEL_BURAYA',
}

export function trackPhoneClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSIONS.PHONE,
      value: 1.0,
      currency: 'TRY',
    })
  }
}

export function trackWhatsAppClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSIONS.WHATSAPP,
      value: 1.0,
      currency: 'TRY',
    })
  }
}

