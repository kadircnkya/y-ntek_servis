# Yöntek Teknik Servis

PHP ile yazılmış site. Render'daki Node servisinde çalışsın diye PHP sayfaları,
Node içinde çalışan gerçek PHP 8.3 (WebAssembly, `@php-wasm/node`) ile işlenir.

## Klasörler

- `public/`: sitenin kendisi (index.php, iletisim.php, includes/config.php, assets/ ...).
  Site üzerindeki değişiklikler hep burada yapılır.
- `server.js`: `public/` klasörünü yayınlayan küçük sunucu. İletişim formu, `?ilce=` / `?hizmet=`
  parametreleri, sıkıştırma, önbellek ve güvenlik başlıkları dahil `.htaccess` ayarlarının karşılığı burada.

## Çalıştırma

```
npm install
npm start        # http://localhost:5000  (PORT ortam değişkeni ile değişir)
```

Render ayarları değişmedi: `npm run install:all` / `npm run build` / `npm start` komutları çalışmaya devam eder.

## Eski site

Önceki React + Express sürümü `yedek-react-site` dalında duruyor.
