import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { activity, navItems } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'

export default function Navbar({ onSignup }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-slate-200/70 bg-white/86 shadow-sm backdrop-blur-xl' : 'bg-white/40 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-qblue text-sm font-bold text-white">
            Q
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">七牛云校招</span>
            <span className="block text-xs text-slate-500">{activity.stockCode}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <CtaButton onClick={onSignup}>{activity.primaryCta}</CtaButton>
        </div>

        <button
          type="button"
          aria-label="打开导航"
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <CtaButton onClick={() => { close(); onSignup() }} className="mt-2 w-full">
              {activity.primaryCta}
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  )
}
