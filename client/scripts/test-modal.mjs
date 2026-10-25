import { chromium } from 'playwright'
import path from 'path'
import fs from 'fs'

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

  console.log('1. Konum butonuna tıklanıyor...')
  const hudBtn = page.locator('.hero-hud-btn')
  await hudBtn.click()
  await page.waitForTimeout(300)

  const modal = page.locator('.districts-modal')
  const isVisible = await modal.isVisible()
  console.log('Modal görünür mü?', isVisible)

  // Body scroll kilitlendi mi?
  const bodyOverflow = await page.evaluate(() => document.body.style.overflow)
  console.log('Body overflow kilidi:', bodyOverflow)

  // Modal içi scroll testi
  const canScrollModal = await page.evaluate(() => {
    const m = document.querySelector('.districts-modal')
    if (!m) return false
    const prev = m.scrollTop
    m.scrollTop = 150
    const next = m.scrollTop
    return { prev, next, scrollable: m.scrollHeight > m.clientHeight }
  })
  console.log('Modal içi scroll durumu:', canScrollModal)

  // Ekran görüntüsü al
  await page.screenshot({ path: path.resolve('test-artifacts/modal-open-mobile.png') })
  console.log('Modal açık ekran görüntüsü kaydedildi: test-artifacts/modal-open-mobile.png')

  // Kapatma butonu
  const closeBtn = page.locator('.districts-close-btn')
  const closeBtnBox = await closeBtn.boundingBox()
  console.log('Kapatma butonu boyutu:', closeBtnBox)

  await closeBtn.click()
  await page.waitForTimeout(300)

  const isClosed = !(await modal.isVisible())
  const restoredBodyOverflow = await page.evaluate(() => document.body.style.overflow)
  console.log('Modal kapandı mı?', isClosed)
  console.log('Body overflow geri açıldı mı?', restoredBodyOverflow === '')

  await context.close()
  await browser.close()
  console.log('MODAL TESTİ BAŞARIYLA TAMAMLANDI!')
}

run().catch(console.error)
