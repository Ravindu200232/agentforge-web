import Image from 'next/image'
import Reveal from './Reveal'
import { STEPS, asset } from './site'

/**
 * The six stages, alternating side to side.
 *
 * Each one carries its own screenshot, so the claim and the evidence for it
 * are never more than a glance apart.
 */
export default function Steps() {
  return (
    <section id="how" className="border-y border-slate-200 bg-slate-50/60 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            How it works
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-[2.6rem] sm:leading-[1.15]">
            From a sentence to a running application
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Six stages, each one visible while it happens. Nothing is hidden behind
            a spinner and handed back as a finished pile of files.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {STEPS.map((step, i) => {
            const flipped = i % 2 === 1
            return (
              <Reveal key={step.tag}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={flipped ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                        {step.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-500">
                      {step.body}
                    </p>
                    <p className="mt-5 inline-block rounded-full bg-white px-4 py-1.5 font-mono text-xs text-ink-500 ring-1 ring-slate-200">
                      {step.detail}
                    </p>
                  </div>

                  <div className={flipped ? 'lg:order-1' : ''}>
                    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 transition-transform duration-500 hover:-translate-y-1">
                      <Image
                        src={asset(`/screenshots/${step.shot}.jpg`)}
                        alt={`AgentForge — ${step.title}`}
                        width={1800}
                        height={1125}
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        className="h-auto w-full"
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                    </figure>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
