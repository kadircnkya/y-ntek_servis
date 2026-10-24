// Kaynak görselleri (assets-src/) doğru boyutlarda AVIF / WebP / JPG olarak public/ klasörüne yazar.
// Çalıştırma:  npm run images
// Kendi fotoğraflarınızı eklemek için assets-src/ içine koyup aşağıdaki listeye bir satır ekleyin.
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const src = (f) => path.join(root, 'assets-src', f)
const out = (f) => path.join(root, 'public', f)

const jobs = [
  // Hero posteri: LCP elemanı. Mobil ve masaüstü için ayrı genişlik.
  { file: 'hero-poster.jpg', name: 'hero-poster', widths: [828, 1920], formats: ['avif', 'webp', 'jpg'] },
  // "Neden biz" bölümündeki çatı fotoğrafı (lazy yüklenir).
  { file: 'montaj.jpg', name: 'montaj', widths: [480, 800, 1200], formats: ['avif', 'webp', 'jpg'] },
]

const encoders = {
  avif: (img) => img.avif({ quality: 50, effort: 6 }),
  webp: (img) => img.webp({ quality: 72, effort: 6 }),
  jpg: (img) => img.jpeg({ quality: 74, mozjpeg: true, progressive: true }),
}

await mkdir(path.join(root, 'public'), { recursive: true })

for (const job of jobs) {
  for (const w of job.widths) {
    for (const fmt of job.formats) {
      const name = `${job.name}-${w}.${fmt}`
      const info = await encoders[fmt](sharp(src(job.file)).resize({ width: w, withoutEnlargement: true })).toFile(out(name))
      console.log(`${name.padEnd(28)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
    }
  }
}

// Video etiketi için sabit adlı poster: /hero-poster.jpg (masaüstü boyutu)
await encoders.jpg(sharp(src('hero-poster.jpg')).resize({ width: 1920, withoutEnlargement: true })).toFile(out('hero-poster.jpg'))
console.log('hero-poster.jpg (video poster) yazıldı')
