'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SCREENS } from './site'

/** The screenshot browser: one tab per surface of the Studio. */
export default function Gallery() {
  const [active, setActive] = useState(0)
  const shot = SCREENS[active]

  return (
    <section id="screens" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          Screens
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-[2.6rem] sm:leading-[1.15]">
          The whole thing, in one window
        </h2>
        <p className="mt-4 text-lg text-ink-500">
          Captured from the running system, not mocked up.
        </p>
      </div>

      <div className="af-rail mt-10 flex justify-start gap-2 overflow-x-auto pb-2 sm:justify-center">
        {SCREENS.map((screen, i) => (
          <button
            key={screen.id}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              i === active
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                : 'bg-white text-ink-500 ring-1 ring-slate-200 hover:text-ink-900 hover:ring-brand-300'
            }`}
          >
            {screen.tab}
          </button>
        ))}
      </div>

      <figure className="mt-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-300/40">
          {/* A window chrome strip, so the screenshot reads as an application. */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-white/80 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-[11px] text-ink-400">
              AgentForge Studio — {shot.tab}
            </span>
          </div>

          <Image
            key={shot.id}
            src={`/screenshots/${shot.id}.jpg`}
            alt={shot.caption}
            width={1800}
            height={1125}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="af-reveal is-in h-auto w-full"
          />
        </div>
        <figcaption className="mt-4 text-center text-sm text-ink-400">{shot.caption}</figcaption>
      </figure>
    </section>
  )
}
