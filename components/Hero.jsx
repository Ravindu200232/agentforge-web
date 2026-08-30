import Image from 'next/image'
import Button from './Button'
import { Download, Github, Windows } from './Icons'
import { PIPELINE, DOWNLOAD_URL, SOURCE_URL, asset } from './site'

/**
 * The pipeline that runs under the headline.
 *
 * The token crosses the rail once every six seconds and each stage is delayed
 * by a fifth of that, so a stage lights exactly as the token reaches it. It is
 * all CSS: no timers, no JavaScript, and nothing to keep in sync at runtime.
 */
function PipelineAnimation() {
  const cycle = 6
  const step = cycle / PIPELINE.length

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
          The run
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
          <span className="af-blink h-1.5 w-1.5 rounded-full bg-emerald-500" />
          live
        </span>
      </div>

      <div className="relative mb-5 h-1 rounded-full bg-slate-100">
        <div
          className="af-travel absolute -top-[7px] h-4 w-4 -translate-x-1/2 rounded-full bg-brand-600 shadow-[0_0_0_5px_rgba(99,102,241,0.15)]"
          style={{ animationDuration: `${cycle}s` }}
        />
      </div>

      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {PIPELINE.map((stage, i) => (
          <div
            key={stage}
            className="af-stage rounded-lg border px-1 py-2 text-center text-[10px] font-semibold sm:text-xs"
            style={{ animationDuration: `${cycle}s`, animationDelay: `${i * step}s` }}
          >
            {stage}
          </div>
        ))}
      </div>
    </div>
  )
}

/** A short list of files, drawn in as if the builder were writing them. */
function FileTicker() {
  const files = [
    'app/api/appointments/route.js',
    'app/(dashboard)/bookings/page.jsx',
    'lib/db/appointments.js',
    'tests/e2e/patient-books-a-visit.spec.js',
  ]

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
          Files written
        </span>
        <span className="font-mono text-[11px] text-ink-400">44</span>
      </div>

      <ul className="space-y-2">
        {files.map((file, i) => (
          <li key={file} className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span className="truncate font-mono text-[11px] text-ink-500 sm:text-xs">{file}</span>
            <span
              className="af-grow ml-auto h-[3px] w-8 shrink-0 rounded-full bg-emerald-400"
              style={{ animationDelay: `${400 + i * 260}ms` }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Two slow-drifting colour fields, well behind the text. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="af-drift absolute -left-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div
          className="af-drift absolute -right-24 top-24 h-[26rem] w-[26rem] rounded-full bg-sky-100/70 blur-3xl"
          style={{ animationDelay: '-6s' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            <span className="af-blink h-1.5 w-1.5 rounded-full bg-brand-500" />
            Self-optimizing AI-agentic development
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.1rem]">
            Describe an app.
            <br />
            <span className="af-gradient-text">Watch it get built.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            AgentForge interviews you, turns the answers into a traceable specification,
            writes the application, drives a real browser over every journey, repairs
            what fails and ships it to the cloud. One tool, and you watch each useful step.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={DOWNLOAD_URL} size="lg">
              <Download className="h-5 w-5" />
              Download for Windows
            </Button>
            <Button href={SOURCE_URL} variant="outline" size="lg">
              <Github className="h-5 w-5" />
              Source on GitHub
            </Button>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-ink-400">
            <Windows className="h-4 w-4" />
            Free · one installer · it fetches Ollama, MongoDB, Node and Python for you
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-[26px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-2xl shadow-slate-300/40 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="af-float relative block h-11 w-11 overflow-hidden rounded-full ring-1 ring-slate-200">
                <Image src={asset('/agentforge-logo.png')} alt="" fill sizes="44px" className="object-cover" priority />
              </span>
              <div>
                <p className="font-display text-sm font-bold tracking-tight text-ink-900">
                  AGENTFORGE
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink-400">Studio</p>
              </div>
              <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                ready
              </span>
            </div>

            <div className="space-y-4">
              <PipelineAnimation />
              <FileTicker />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                ['61', 'requirements'],
                ['104', 'tests passing'],
                ['3', 'roles seeded'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-white/70 py-3 ring-1 ring-slate-200">
                  <p className="font-display text-lg font-bold text-ink-900">{value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-ink-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* A slow ring behind the panel, purely decorative. */}
          <div
            aria-hidden
            className="af-orbit pointer-events-none absolute -inset-8 -z-10 rounded-full border border-dashed border-brand-200/60"
          />
        </div>
      </div>
    </section>
  )
}
