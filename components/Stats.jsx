'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS } from './site'

/** Counts from zero to `value` once, the first time the strip is on screen. */
function Counter({ value, suffix }) {
  const [shown, setShown] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setShown(value)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const duration = 1100
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        // Ease out, so it slows into the final number instead of stopping dead.
        setShown(Math.round(value * (1 - Math.pow(1 - t, 3))))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.4 })

    observer.observe(node)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        {STATS.map(stat => (
          <div key={stat.label} className="px-2 text-center">
            <p className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-snug text-ink-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
