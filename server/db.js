import mongoose from 'mongoose'

export async function connectDb(uri) {
  try {
    await mongoose.connect(uri)
    console.log('MongoDB bağlantısı kuruldu')
  } catch (err) {
    console.warn('MongoDB bağlanamadı, JSON verisiyle devam ediliyor:', err.message)
  }
}
