# Yörünge Uydu — çanak anten satış ve servis sitesi

React (Vite) + Express. Ağırlık frontend'de; sunucu sadece içeriği JSON olarak sunar ve derlenmiş siteyi yayınlar.
MongoDB isteğe bağlıdır (`MONGODB_URI` verilmezse JSON dosyalarıyla çalışır).

## Kurulum

```bash
npm run install:all   # kökte, client'ta ve server'da paketleri kurar
npm run dev           # client: http://localhost:5173  |  server: http://localhost:5000
```

Yayına almak için:

```bash
npm run build         # client/dist üretir
npm start             # Express, dist klasörünü ve /api uçlarını sunar (PORT=5000)
```

## Kendi bilgilerinizi girin

Hepsi tek yerde: **`client/src/config.js`**

- işletme adı, telefon, **WhatsApp numarası** (başında + olmadan, `905xxxxxxxxx` biçiminde)
- adres, çalışma saatleri, hizmet bölgeleri
- harita için Google Haritalar "Haritayı yerleştir" adresi (`mapEmbedUrl`)

İçerik dosyaları: `client/src/data/` altındaki `services.json`, `products.json`, `faq.json`.
Sayfa başlığı ve açıklaması: `client/index.html`.

## WhatsApp butonu

Sağ alttaki buton, `config.js` içindeki numaraya `wa.me` bağlantısıyla gider. Ürün kartlarındaki "Fiyat sor",
hizmetlerdeki "Bu iş için yaz" ve iletişim formu, mesajı o bağlama göre hazır doldurur.

## Görseller

Sitedeki tüm çizimler (çanak, LNB, alıcı, kablo, uydu, ölçer) elle çizilmiş SVG'dir: `client/src/components/Art.jsx`.
Dükkândan ve yaptığınız montajlardan gerçek fotoğraf eklemek isterseniz hizmetler veya ürünler bölümüne
`<img>` olarak koyabilirsiniz; gerçek fotoğraf güveni en çok artıran şeydir.

## Tasarım notları

- Ana sahne: sayfa kaydırıldıkça çanak döner, sinyal ölçer yükselir ve "Kilitlendi" olur. Tek vurgulu hareket bu.
- Uydu haritası: güneye bakınca doğu solda kalır, bu yüzden Türksat 42°D en solda durur.
- "Hareketi azalt" ayarı açık olanlarda hero sahne animasyonsuz, kilitlenmiş hâlde görünür.
- Yazı tipleri: Archivo (başlıklar, geniş genişlik ekseni) ve Source Serif 4 (metin), `@fontsource` ile paketten gelir.
