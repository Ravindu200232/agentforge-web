import Image from 'next/image'
import Reveal from './Reveal'
import Button from './Button'
import { Download } from './Icons'
import { GUIDE, STACKS, DOWNLOAD_URL, INSTALLER, INSTALLER_SIZE, asset } from './site'

/**
 * The step-by-step guide: install, sign in, describe the app, choose the stack,
 * connect Supabase and MongoDB, build and deploy.
 *
 * Each chapter puts its instructions beside the screens they describe, so a
 * reader can follow along with AgentForge open next to the page.
 */
export default function Guide() {
  return (
    <section id="guide" className="border-t border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            Guide
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-[2.6rem] sm:leading-[1.15]">
            From the download to a live app
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Every step, with the screen you will see at that step. Install it, sign in, describe
            your app, choose a stack, connect Supabase or MongoDB, and deploy.
          </p>
        </Reveal>

        <nav aria-label="Guide chapters" className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {GUIDE.map((chapter, i) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-ink-500 ring-1 ring-slate-200 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              <span className="font-mono text-xs text-brand-600">{String(i + 1).padStart(2, '0')}</span>{' '}
              {chapter.title}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {GUIDE.map((chapter, i) => (
            <Reveal key={chapter.id}>
              <article id={chapter.id} className="scroll-mt-24">
                <div className={chapter.shots.length
                  ? 'grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12'
                  : 'mx-auto max-w-3xl'}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink-500">{chapter.lead}</p>

                    <ol className="mt-6 space-y-4">
                      {chapter.steps.map((step, k) => (
                        <li key={k} className="flex gap-3.5">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 font-mono text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                            {k + 1}
                          </span>
                          <span className="leading-relaxed text-ink-700">{step}</span>
                        </li>
                      ))}
                    </ol>

                    {chapter.note && (
                      <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
                        {chapter.note}
                      </p>
                    )}

                    {chapter.id === 'guide-install' && (
                      <div className="mt-7">
                        <Button href={DOWNLOAD_URL} size="lg">
                          <Download className="h-5 w-5" />
                          Download {INSTALLER}
                        </Button>
                        <p className="mt-3 font-mono text-xs text-ink-400">
                          {INSTALLER_SIZE} · Windows 10 and 11, 64-bit · free
                        </p>
                      </div>
                    )}
                  </div>

                  {chapter.shots.length > 0 && (
                    <div className={chapter.shots.every(s => s.w <= 600) && chapter.shots.length === 2
                      ? 'grid gap-5 sm:grid-cols-2'
                      : 'space-y-6'}
                    >
                      {chapter.shots.map(shot => (
                        <figure key={shot.src}>
                          <div
                            className="mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
                            style={{ maxWidth: shot.w <= 600 ? `${shot.w}px` : undefined }}
                          >
                            <Image
                              src={asset(shot.src)}
                              alt={shot.caption}
                              width={shot.w}
                              height={shot.h}
                              sizes="(max-width: 1024px) 100vw, 56vw"
                              className="h-auto w-full"
                              loading="lazy"
                            />
                          </div>
                          <figcaption className="mt-2.5 text-center text-sm text-ink-400">{shot.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>

                {chapter.table && <StackTable />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Every stack, what it is, and the accounts a build of it needs. */
function StackTable() {
  return (
    <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wider text-ink-400">
          <tr>
            <th scope="col" className="px-5 py-3 font-semibold">Stack</th>
            <th scope="col" className="px-5 py-3 font-semibold">What it is</th>
            <th scope="col" className="px-5 py-3 font-semibold">Accounts it needs</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {STACKS.map(stack => (
            <tr key={stack.name}>
              <td className="whitespace-nowrap px-5 py-3 font-semibold text-ink-900">{stack.name}</td>
              <td className="px-5 py-3 text-ink-500">{stack.what}</td>
              <td className="whitespace-nowrap px-5 py-3 text-ink-700">{stack.needs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
