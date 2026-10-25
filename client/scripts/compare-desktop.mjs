import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

async function compareImages(file1, file2) {
  if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
    console.log(`Dosya bulunamadı: ${file1} veya ${file2}`)
    return null
  }

  const img1 = sharp(file1)
  const img2 = sharp(file2)
  const meta1 = await img1.metadata()
  const meta2 = await img2.metadata()

  if (meta1.width !== meta2.width || meta1.height !== meta2.height) {
    console.log(`Boyut farkı: ${meta1.width}x${meta1.height} vs ${meta2.width}x${meta2.height}`)
    return { matches: false, reason: 'dimension_mismatch', meta1, meta2 }
  }

  const raw1 = await img1.raw().toBuffer()
  const raw2 = await img2.raw().toBuffer()

  let diffPixels = 0
  for (let i = 0; i < raw1.length; i += 4) {
    const rDiff = Math.abs(raw1[i] - raw2[i])
    const gDiff = Math.abs(raw1[i + 1] - raw2[i + 1])
    const bDiff = Math.abs(raw1[i + 2] - raw2[i + 2])
    if (rDiff > 2 || gDiff > 2 || bDiff > 2) {
      diffPixels++
    }
  }

  const totalPixels = meta1.width * meta1.height
  const diffPercent = (diffPixels / totalPixels) * 100

  return {
    matches: diffPixels === 0,
    diffPixels,
    totalPixels,
    diffPercent: diffPercent.toFixed(4) + '%'
  }
}

async function run() {
  const before1440 = path.resolve('test-artifacts/audit-before/desktop-1440x900-full.png')
  const after1440 = path.resolve('test-artifacts/audit-after/desktop-1440x900-full.png')
  const res1440 = await compareImages(before1440, after1440)
  console.log('1440x900 Regresyon Sonucu:', res1440)

  const before1920 = path.resolve('test-artifacts/audit-before/desktop-1920x1080-full.png')
  const after1920 = path.resolve('test-artifacts/audit-after/desktop-1920x1080-full.png')
  const res1920 = await compareImages(before1920, after1920)
  console.log('1920x1080 Regresyon Sonucu:', res1920)
}

run().catch(console.error)
