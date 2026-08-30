import Reveal from './Reveal'
import { Arrow } from './Icons'
import { FRAGMENTS } from './site'

export default function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          The problem
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-[2.6rem] sm:leading-[1.15]">
          Software development is still fragmented
        </h2>
        <p className="mt-4 text-lg text-ink-500">
          Four stages, four tools, and a person carrying the work between them.
          Every handoff is manual, and the work is repeated.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FRAGMENTS.map((item, i) => (
          <Reveal key={item.n} delay={i * 90}>
            <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-200/70">
              <span className="font-mono text-xs text-ink-400">{item.n}</span>
              <p className="mt-3 font-display text-xl font-bold text-ink-900">{item.title}</p>
              <p className="mt-1 text-sm text-ink-400">{item.note}</p>

              {/* The break between stages, drawn only where there is a next one. */}
              {i < FRAGMENTS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-300 ring-1 ring-slate-200 lg:flex"
                >
                  <Arrow className="h-3 w-3" />
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={260} className="mt-12">
        <div className="mx-auto max-w-3xl rounded-2xl bg-ink-900 px-7 py-8 text-center">
          <p className="font-display text-xl font-semibold text-white sm:text-2xl">
            AgentForge is one tool that does all four, and hands nothing back to you
            half-finished.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
