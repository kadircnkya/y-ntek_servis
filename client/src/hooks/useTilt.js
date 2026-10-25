import { useEffect, useRef } from 'react'
import { hasFinePointer, prefersReducedMotion } from '../lib/device.js'

/**
 * Masaüstünde kartlara hafif 3D eğim + parlama.
 * - Yalnızca fare olan cihazlarda (dokunmatikte hiç bağlanmaz).
 * - Değerler CSS değişkenine yazılır; React render etmez.
 * - getBoundingClientRect yalnızca pointerenter'da okunur (pointermove'da layout zorlanmaz).
 */
export function useTilt(max = 7) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let rect = null
    let raf = 0
    let rx = 0
    let ry = 0
    let mx = 0
    let my = 0

    const apply = () => {
      raf = 0
      el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
      el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
      el.style.setProperty('--mx', `${mx.toFixed(0)}px`)
      el.style.setProperty('--my', `${my.toFixed(0)}px`)
    }
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const enter = (e) => {
      // Yalnızca masaüstünde (1024px ve üzeri fare etkileşiminde) çalışır
      if (e.pointerType === 'touch' || window.innerWidth < 1024) return
      rect = el.getBoundingClientRect()
      el.classList.add('is-tilting')
    }
    const move = (e) => {
      // Yalnızca masaüstünde (1024px ve üzeri fare etkileşiminde) çalışır
      if (e.pointerType === 'touch' || window.innerWidth < 1024) return
      if (!rect) rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      ry = (px - 0.5) * max * 2
      rx = (0.5 - py) * max * 2
      mx = px * rect.width
      my = py * rect.height
      queue()
    }
    const leave = (e) => {
      if (e && e.pointerType === 'touch') return
      rect = null
      rx = 0
      ry = 0
      el.classList.remove('is-tilting')
      queue()
    }

    el.addEventListener('pointerenter', enter)
    el.addEventListener('pointermove', move, { passive: true })
    el.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointerenter', enter)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [max])

  return ref
}
