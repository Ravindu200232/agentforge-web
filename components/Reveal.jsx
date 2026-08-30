'use client'

import { useEffect, useRef } from 'react'

/**
 * Fades a section in the first time it reaches the viewport.
 *
 * The observer disconnects after the first hit: a section that re-enters on
 * the way back up has already been seen, and replaying the animation there
 * reads as a glitch rather than an effect.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Without IntersectionObserver the content simply starts visible.
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-in')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        node.classList.add('is-in')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`af-reveal ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
