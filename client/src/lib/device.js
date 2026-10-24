// Cihaz / bağlantı yeteneklerini tek yerden okur. Tüm "ne kadar şaşalı olalım" kararları buradan çıkar.
const mm = (q) => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia(q).matches

export const prefersReducedMotion = () => mm('(prefers-reduced-motion: reduce)')
export const hasFinePointer = () => mm('(hover: hover) and (pointer: fine)')

export function getProfile() {
  const width = window.innerWidth
  const cores = navigator.hardwareConcurrency || 4
  const mem = navigator.deviceMemory || 4 // yalnızca Chromium destekler
  const mobile = width < 768
  const lowEnd = cores <= 4 || mem <= 2
  return {
    width,
    cores,
    mem,
    mobile,
    lowEnd,
    // "lite": düşük güçlü telefon → dekoratif döngü animasyonları kapanır
    lite: (mobile && lowEnd) || mem <= 2,
    reduced: prefersReducedMotion(),
    finePointer: hasFinePointer(),
  }
}

// Hero videosu yüklenmeli mi? Veri tasarrufu, yavaş hat veya azaltılmış hareket → sadece poster.
export function canLoadHeroVideo() {
  if (prefersReducedMotion()) return false
  const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (c) {
    if (c.saveData) return false
    if (/(^|-)2g$|^3g$/.test(c.effectiveType || '')) return false
    if (typeof c.downlink === 'number' && c.downlink > 0 && c.downlink < 1.5) return false
  }
  return true
}
