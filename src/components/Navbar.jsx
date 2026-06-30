import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
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
        scrolled ? 'border-b border-warmline bg-white/95' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-qblue text-sm font-bold text-white">
            Q
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">七牛云校招</span>
            <span className="block text-xs text-olive">{activity.stockCode}</span>
          </span>
        </a>

        <div className="mx-6 hidden h-11 flex-1 items-center gap-2 rounded-2xl bg-sand px-4 text-sm text-olive lg:flex">
          <Search className="h-4 w-4" />
          <span>搜索岗位、议题和活动流程</span>
        </div>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-olive transition hover:bg-sand hover:text-ink"
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
          className="grid h-10 w-10 place-items-center rounded-full bg-sand text-ink xl:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-warmline bg-white px-4 py-4 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-olive hover:bg-sand hover:text-ink"
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
