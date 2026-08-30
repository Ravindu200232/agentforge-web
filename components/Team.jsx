import Image from 'next/image'
import Reveal from './Reveal'
import { TEAM } from './site'

/** The four people behind RP-SE-009. */
export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          The team
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-[2.6rem] sm:leading-[1.15]">
          Built by four people at SLIIT
        </h2>
        <p className="mt-4 text-lg text-ink-500">
          Research project RP-SE-009 — one agent each, and one system between them.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((person, i) => (
          <Reveal key={person.slug} delay={i * 100}>
            <figure className="group text-center">
              <div className="relative mx-auto h-40 w-40">
                {/* The ring lifts and colours on hover, the photo stays still. */}
                <span
                  aria-hidden
                  className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-brand-400 to-violet-400 opacity-0 blur-[6px] transition-opacity duration-300 group-hover:opacity-70"
                />
                <span className="relative block h-full w-full overflow-hidden rounded-full ring-4 ring-white shadow-lg shadow-slate-300/50">
                  <Image
                    src={`/team/${person.slug}.jpg`}
                    alt={person.name}
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
              </div>

              <figcaption className="mt-6">
                <p className="font-display text-lg font-bold tracking-tight text-ink-900">
                  {person.name}
                </p>
                <p className="mx-auto mt-1.5 max-w-[15rem] text-sm leading-snug text-ink-400">
                  {person.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
