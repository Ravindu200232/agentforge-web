import Image from 'next/image'
import { Github, Download } from './Icons'
import { NAV, SOURCE_URL, DOWNLOAD_URL } from './site'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
                <Image src="/agentforge-logo.png" alt="" fill sizes="40px" className="object-cover" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-ink-900">
                AgentForge
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Self-optimizing AI-agentic development. Research project RP-SE-009,
              Sri Lanka Institute of Information Technology.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={DOWNLOAD_URL}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-500 ring-1 ring-slate-200 transition-colors hover:text-brand-700 hover:ring-brand-300"
              aria-label="Download AgentForge"
            >
              <Download className="h-4.5 w-4.5" />
            </a>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-500 ring-1 ring-slate-200 transition-colors hover:text-brand-700 hover:ring-brand-300"
              aria-label="AgentForge on GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-slate-200 pt-6 text-xs text-ink-400">
          © {new Date().getFullYear()} RP-SE-009 · SLIIT. Screenshots captured from the
          running system.
        </p>
      </div>
    </footer>
  )
}
