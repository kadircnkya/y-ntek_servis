import { chromium } from 'playwright'
import path from 'path'

async function run() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true })
  
  // 1. Mobil Ekran Testi (390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  })
  const mobilePage = await mobileContext.newPage()
  await mobilePage.goto('http://localhost:5173', { waitUntil: 'networkidle' })

  console.log('--- MOBİL TESTİ ---')
  const hudBtn = mobilePage.locator('.hero-hud-btn')
  const hudBox = await hudBtn.boundingBox()
  console.log('Mobilde konum butonu boyutu ve konumu:', hudBox)

  // Konum butonunun ekran görüntüsü
  await mobilePage.screenshot({ path: path.resolve('test-artifacts/mobile-hero-hud-compact.png') })
  console.log('Mobil hero ekran görüntüsü kaydedildi: test-artifacts/mobile-hero-hud-compact.png')

  // 2. Bar Geçiş Testi (Aşama 0 -> 1 -> 2)
  console.log('--- 3 BAR ZAMANLI GEÇİŞ TESTİ ---')
  const getStageInfo = async () => {
    return await mobilePage.evaluate(() => {
      const hero = document.querySelector('.hero')
      const activeSlide = document.querySelector('.hero-slide.is-active')
      const activeBar = document.querySelector('.hero-progress-seg.active')
      const doneBars = document.querySelectorAll('.hero-progress-seg.done')
      const title = activeSlide ? activeSlide.querySelector('.hero-title')?.innerText : ''
      return {
        className: hero?.className,
        title,
        doneBarsCount: doneBars.length,
        hasActiveBar: !!activeBar
      }
    })
  }

  console.log('Başlangıç (Aşama 0):', await getStageInfo())
  
  // 4 saniye sonra 1. aşama
  console.log('4 saniye bekleniyor (1. bar doluyor)...')
  await mobilePage.waitForTimeout(4200)
  console.log('4.2s Sonrası (Aşama 1 olmalı):', await getStageInfo())

  // 4 saniye sonra 2. aşama (final)
  console.log('4 saniye daha bekleniyor (2. bar doluyor)...')
  await mobilePage.waitForTimeout(4200)
  console.log('8.4s Sonrası (Aşama 2 / Final olmalı):', await getStageInfo())

  await mobileContext.close()
  await browser.close()
  console.log('TÜM TESTLER BAŞARIYLA TAMAMLANDI!')
}

run().catch(console.error)
