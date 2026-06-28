import { ArrowDown, CalendarDays, CheckCircle2, MapPin, Sparkles, UploadCloud, Users } from 'lucide-react'
import { activity, heroMetrics } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'

const quickFacts = [
  { icon: Users, label: '面向对象', value: activity.target, featured: true },
  { icon: CalendarDays, label: '报名截止', value: activity.applyDeadline },
  { icon: MapPin, label: '活动地点', value: activity.location }
]

export default function Hero({ onSignup }) {
  return (
    <section id="top" className="hero-surface relative overflow-hidden pt-16">
      <div className="mesh-grid absolute inset-0" />
      <div className="particle-field absolute inset-0" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 37) % 96}%`,
              top: `${((index * 53) % 82) + 8}%`,
              animationDelay: `${index * 0.18}s`
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-qblue shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              {activity.eyebrow}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
              <CheckCircle2 className="h-4 w-4" />
              面向 2024-2026 届学生
            </div>
          </div>

          <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            {activity.title}
            <span className="block bg-gradient-to-r from-qblue via-cyanline to-mint bg-clip-text text-transparent">
              {activity.themeLine}
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-xl font-semibold leading-8 text-ink md:text-3xl md:leading-10">
            {activity.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton onClick={onSignup} className="sm:min-w-56">
              <UploadCloud className="h-4 w-4" />
              {activity.primaryCta}
            </CtaButton>
            <CtaButton href="#topics" variant="secondary" className="sm:min-w-48">
              {activity.secondaryCta}
            </CtaButton>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="metric-card rounded-[1.1rem] p-3 sm:rounded-[1.35rem] sm:p-4"
              >
                <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">{metric.value}</p>
                <p className="mt-2 text-xs font-semibold text-qblue sm:text-sm">{metric.label}</p>
                <p className="mt-2 hidden text-xs leading-5 text-slate-500 sm:block">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className={`rounded-2xl border border-white/80 bg-white/62 p-3 shadow-sm backdrop-blur sm:p-4 ${
                  fact.featured ? 'sm:col-span-2' : ''
                }`}
              >
                <fact.icon className="mb-2 h-4 w-4 text-qblue sm:mb-3 sm:h-5 sm:w-5" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-ink sm:text-base">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#highlights"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-500 shadow-sm backdrop-blur transition hover:text-qblue md:flex"
      >
        向下了解活动
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
