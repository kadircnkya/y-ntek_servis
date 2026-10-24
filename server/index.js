import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

// İçerik, client/src/data altındaki JSON dosyalarından okunur.
// MongoDB bağlıysa aynı uçlar veritabanından da beslenebilir (bkz. models/ ve db.js).
const dataDir = path.join(__dirname, '..', 'client', 'src', 'data')
const readJson = (name) => JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf-8'))

app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.get('/api/products', (_req, res) => res.json(readJson('products.json')))
app.get('/api/services', (_req, res) => res.json(readJson('services.json')))
app.get('/api/faq', (_req, res) => res.json(readJson('faq.json')))

// Üretimde derlenmiş client'ı sun
const dist = path.join(__dirname, '..', 'client', 'dist')
if (fs.existsSync(dist)) {
  app.use(express.static(dist))
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')))
}

if (process.env.MONGODB_URI) {
  const { connectDb } = await import('./db.js')
  await connectDb(process.env.MONGODB_URI)
}

app.listen(PORT, () => console.log(`Sunucu hazır: http://localhost:${PORT}`))
