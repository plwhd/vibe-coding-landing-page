import { ArrowRight } from 'lucide-react'

export default function CtaButton({ children, variant = 'primary', href, onClick, className = '' }) {
  const base =
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.98]'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-white shadow-glow hover:-translate-y-0.5 hover:bg-slate-950'
      : 'border border-slate-200 bg-white/80 text-ink shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-qblue hover:text-qblue'

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </button>
  )
}
