import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'

const viewports = [
  { name: '360x640', width: 360, height: 640, isMobile: true, hasTouch: true },
  { name: '375x667', width: 375, height: 667, isMobile: true, hasTouch: true },
  { name: '390x844', width: 390, height: 844, isMobile: true, hasTouch: true },
  { name: '412x915', width: 412, height: 915, isMobile: true, hasTouch: true },
  { name: '768x1024', width: 768, height: 1024, isMobile: true, hasTouch: true },
  { name: 'landscape-844x390', width: 844, height: 390, isMobile: true, hasTouch: true },
  { name: 'desktop-1440x900', width: 1440, height: 900, isMobile: false, hasTouch: false },
  { name: 'desktop-1920x1080', width: 1920, height: 1080, isMobile: false, hasTouch: false }
]

const outDir = path.resolve('test-artifacts/audit-after')
fs.mkdirSync(outDir, { recursive: true })

async function run() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true })
  const report = {}

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile,
      hasTouch: vp.hasTouch,
      deviceScaleFactor: 2
    })
    const page = await context.newPage()
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })

    // 1. Ekran görüntüsü
    await page.screenshot({ path: path.join(outDir, `${vp.name}-full.png`), fullPage: true })

    // 2. Taşma analizi (overflow-x geçici kaldırılıp gerçek taşan elemanlar taranır)
    const overflowReport = await page.evaluate(() => {
      const docEl = document.documentElement
      const body = document.body
      const initialScrollWidth = docEl.scrollWidth
      const clientWidth = docEl.clientWidth
      
      // Geçici olarak overflow-x'i açarak taşan öğelerin doğal koordinatlarını ölçelim
      const prevHtmlOverflow = docEl.style.overflowX
      const prevBodyOverflow = body.style.overflowX
      docEl.style.overflowX = 'visible'
      body.style.overflowX = 'visible'

      const vpWidth = window.innerWidth
      const overflowingElements = []

      const all = document.querySelectorAll('*')
      for (const el of all) {
        // Görünmeyenleri atla
        const style = window.getComputedStyle(el)
        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue

        const rect = el.getBoundingClientRect()
        // Sayfanın sağına taşan
        if (rect.right > vpWidth + 1 || rect.left < -1) {
          const section = el.closest('section, header, footer, nav, main')
          overflowingElements.push({
            tag: el.tagName.toLowerCase(),
            id: el.id || '',
            className: (el.className && typeof el.className === 'string') ? el.className.trim() : '',
            section: section ? (section.id || section.tagName.toLowerCase()) : 'root',
            rect: {
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
              overflowAmount: Math.round(rect.right - vpWidth)
            }
          })
        }
      }

      // Restore
      docEl.style.overflowX = prevHtmlOverflow
      body.style.overflowX = prevBodyOverflow

      // Küçük dokunma hedefleri
      const smallTouchTargets = []
      const clickables = document.querySelectorAll('button, a, input, select, textarea, [role="button"]')
      for (const el of clickables) {
        const style = window.getComputedStyle(el)
        if (style.display === 'none' || style.visibility === 'hidden') continue
        const rect = el.getBoundingClientRect()
        if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
          smallTouchTargets.push({
            tag: el.tagName.toLowerCase(),
            id: el.id || '',
            text: el.innerText ? el.innerText.slice(0, 30) : (el.getAttribute('aria-label') || ''),
            className: (el.className && typeof el.className === 'string') ? el.className.trim() : '',
            size: `${Math.round(rect.width)}x${Math.round(rect.height)}`
          })
        }
      }

      return {
        clientWidth,
        initialScrollWidth,
        hasInitialOverflow: initialScrollWidth > clientWidth,
        overflowCount: overflowingElements.length,
        overflowingElements: overflowingElements.slice(0, 20),
        smallTouchTargetsCount: smallTouchTargets.length,
        smallTouchTargets: smallTouchTargets.slice(0, 15)
      }
    })

    report[vp.name] = overflowReport
    await context.close()
  }

  await browser.close()
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2))
  console.log('AUDIT COMPLETED')
  console.log(JSON.stringify(report, null, 2))
}

run().catch(console.error)
