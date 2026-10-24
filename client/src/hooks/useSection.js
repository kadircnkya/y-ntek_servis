import { useEffect, useRef } from 'react'

/**
 * Bölüm için tek hook:
 *  - Bölüm ekrandayken <section>'a "is-visible" ekler, çıkınca kaldırır.
 *    CSS'te döngü animasyonları yalnızca .is-visible içinde çalışır (ekran dışında GPU boşta kalır).
 *  - İçindeki .reveal elemanlarına bir kez "is-in" ekler (fade + yukarı kayma), sonra gözlemi bırakır.
 * React state kullanılmaz, yeniden render olmaz.
 */
export function useSection() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = root.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      root.classList.add('is-visible')
      items.forEach((el) => el.classList.add('is-in'))
      return
    }

    const vis = new IntersectionObserver(([e]) => root.classList.toggle('is-visible', e.isIntersecting), {
      rootMargin: '80px 0px',
    })
    vis.observe(root)

    const rev = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            rev.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    items.forEach((el) => rev.observe(el))

    return () => {
      vis.disconnect()
      rev.disconnect()
    }
  }, [])

  return ref
}
