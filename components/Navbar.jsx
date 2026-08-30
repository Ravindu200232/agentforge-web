'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import { Download, Menu, Close } from './Icons'
import { NAV, DOWNLOAD_URL } from './site'

/** A transparent bar that gains a border and a blur once the page moves. */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A menu left open behind a locked body is a trap on a phone.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        stuck ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200 shadow-sm">
            <Image src="/agentforge-logo.png" alt="" fill sizes="40px" className="object-cover" priority />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink-900">
            AgentForge
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-500 transition-colors hover:bg-slate-100 hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={DOWNLOAD_URL}>
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close the menu' : 'Open the menu'}
          aria-expanded={open}
          className="rounded-full p-2 text-ink-700 ring-1 ring-slate-200 md:hidden"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-2 md:hidden">
          {NAV.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-ink-700 hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
          <Button href={DOWNLOAD_URL} size="lg" className="mt-3 w-full">
            <Download className="h-5 w-5" />
            Download for Windows
          </Button>
        </div>
      )}
    </header>
  )
}
