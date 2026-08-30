import Reveal from './Reveal'
import Button from './Button'
import { Download, Check, Github, Windows } from './Icons'
import { DOWNLOAD_URL, SOURCE_URL, INSTALLER, INCLUDED } from './site'

/** The download call to action, and what the installer takes care of. */
export default function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden bg-ink-900 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="af-drift absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" />
        <div
          className="af-drift absolute -right-10 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
          style={{ animationDelay: '-8s' }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-100">
            <Windows className="h-3.5 w-3.5" />
            Windows 10 and 11 · 64-bit
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.7rem] sm:leading-[1.12]">
            One installer.
            <br />
            It sets up the rest itself.
          </h2>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
            Run it, pick a folder, and open AgentForge. The first launch checks what is
            already on the machine and installs only what is missing — then starts the
            backend and the Studio for you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={DOWNLOAD_URL} size="lg">
              <Download className="h-5 w-5" />
              Download the installer
            </Button>
            <Button href={SOURCE_URL} variant="ghost" size="lg">
              <Github className="h-5 w-5" />
              Read the source
            </Button>
          </div>

          <p className="mt-5 font-mono text-xs text-slate-400">
            {INSTALLER} · about 95 MB · free
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
              Installed for you, if you do not have it
            </p>

            <ul className="mt-6 space-y-4">
              {INCLUDED.map(item => (
                <li key={item.name} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="font-semibold text-white">{item.name}</span>
                    <span className="ml-2 text-sm text-slate-400">{item.note}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-relaxed text-slate-400">
              Anything already on the PC is left exactly as it is. Nothing is replaced,
              downgraded or reconfigured behind your back.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
