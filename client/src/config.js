// ─────────────────────────────────────────────────────────────
//  Sitede görünen tüm işletme bilgileri burada. Kendi bilgilerinizle değiştirin.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Yöntek Teknik Servis', // [Dükkan adı]
  city: 'İstanbul', // [Şehir]
  phone: '5376023437', // [telefon]  başında 0 olmadan, 10 hane (5xx xxx xx xx)
  phoneDisplay: '+90 537 602 34 37',
  waDefault: 'Merhaba, çanak anten konusunda bilgi almak istiyorum.',
  address: 'Hürriyet, Amiral Altıncan Sk. No:2, 34876 Kartal / İstanbul',
  hours: 'Her gün 08.00 – 20.00',
  email: '',
  // Google Haritalar > Paylaş > Haritayı yerleştir > src="..." içindeki adresi buraya yapıştırın
  mapEmbedUrl: 'https://maps.google.com/maps?q=40.9063732,29.2265374&z=17&output=embed',
  // Google Haritalar kısa paylaşım bağlantısı (ör. https://maps.app.goo.gl/xyz)
  mapUrl: 'https://www.google.com/maps/place/H%C3%BCrriyet,+Amiral+Alt%C4%B1ncan+Sk.+No:2,+34876+Kartal%2F%C4%B0stanbul/@40.9063732,29.2265374,17z',

  // ⚠️ Aşağıdaki rakamlar ÖRNEKTİR. Gerçek rakamlarınızı yazın; uydurma rakam güven kaybettirir.
  stats: [
    { value: '12+', label: 'yıllık tecrübe' },
    { value: '4.800+', label: 'çatıda kurulum' },
    { value: 'Aynı gün', label: 'Anadolu Yakası keşif' },
  ],
  // Google İşletme puanınız (yoksa rating: '' bırakın, rozet gizlenir)
  rating: '4,9',
  ratingCount: '120+',
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
