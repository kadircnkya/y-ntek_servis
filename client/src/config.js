// ─────────────────────────────────────────────────────────────
//  Sitede görünen tüm işletme bilgileri burada.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Yöntek Teknik Servis',
  city: 'İstanbul',
  phone: '5376023437', // başında 0 olmadan, 10 hane
  phoneDisplay: '+90 537 602 34 37',
  waDefault: 'Merhaba, uydu/çanak antenimde arıza var, servis için yazıyorum.',
  address: 'Hürriyet, Amiral Altıncan Sk. No:2, 34876 Kartal / İstanbul',
  hours: 'Her gün 08.00 – 20.00',
  email: '',
  mapEmbedUrl: 'https://maps.google.com/maps?q=40.9063732,29.2265374&z=17&output=embed',
  mapUrl: 'https://www.google.com/maps/place/H%C3%BCrriyet,+Amiral+Alt%C4%B1ncan+Sk.+No:2,+34876+Kartal%2F%C4%B0stanbul/@40.9063732,29.2265374,17z',

  // Yalnızca doğru olduğunu bildiğimiz bilgiler. Gerçek rakamınız varsa (yıl, çözülen arıza sayısı) ekleyin.
  stats: [
    { value: 'Aynı gün', label: 'Anadolu Yakası servis' },
    { value: 'Ölçerle', label: 'sinyal ayarı' },
    { value: '08–20', label: 'her gün açığız' },
  ],

  // Gerçek Google İşletme puanınız çıkana kadar boş kalsın, rozet gizlenir
  rating: '',
  ratingCount: '',
}

// Convenience aliases used by components
export const SHOP = {
  name: site.name,
  city: site.city,
  phone: `+90${site.phone}`,
  phonePretty: site.phoneDisplay,
  address: site.address,
  mapUrl: site.mapUrl,
  mapEmbed: site.mapEmbedUrl,
}

export const waNumber = `90${site.phone}`
export const waLink = (text) => `https://wa.me/${waNumber}?text=${encodeURIComponent(text || site.waDefault)}`
export const telLink = `tel:+90${site.phone}`