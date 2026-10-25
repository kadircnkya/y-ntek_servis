import { chromium } from 'playwright'
import path from 'path'

async function run() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true })
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  })
  const page = await context.newPage()
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })

  // Randevu formuna scroll et
  const form = page.locator('#appt-form')
  await form.scrollIntoViewIfNeeded()
  await page.waitForTimeout(400)

  // Formun ekran görüntüsü
  await form.screenshot({ path: path.resolve('test-artifacts/compact-form-mobile.png') })
  console.log('Kompakt form ekran görüntüsü kaydedildi: test-artifacts/compact-form-mobile.png')

  // Boyutları al
  const box = await form.boundingBox()
  console.log('Formun mobildeki yeni boyutları:', box)

  await context.close()
  await browser.close()
}

run().catch(console.error)
