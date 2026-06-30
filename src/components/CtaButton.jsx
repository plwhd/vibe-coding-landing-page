import { ArrowRight } from 'lucide-react'

export default function CtaButton({ children, variant = 'primary', href, onClick, className = '' }) {
  const base =
    'group inline-flex min-h-10 items-center justify-center gap-2 rounded-2xl border-2 px-4 py-2 text-xs font-semibold transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#435ee5]/25 active:scale-[0.98]'
  const styles =
    variant === 'primary'
      ? 'border-transparent bg-qblue text-white hover:bg-[#ad081b]'
      : 'border-transparent bg-sand text-ink hover:bg-[#d8d8d1]'

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
