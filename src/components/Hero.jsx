import { ArrowDown, Bot, CalendarDays, CheckCircle2, MapPin, Sparkles, UploadCloud, Users } from 'lucide-react'
import { activity, heroMetrics } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'

const quickFacts = [
  { icon: Users, label: '面向对象', value: '2024-2026 届学生' },
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

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_25rem] lg:px-8">
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
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {activity.proposition}
          </p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="metric-card rounded-[1.35rem] p-4"
              >
                <p className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-qblue">{metric.label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton onClick={onSignup} className="sm:min-w-56">
              <UploadCloud className="h-4 w-4" />
              {activity.primaryCta}
            </CtaButton>
            <CtaButton href="#topics" variant="secondary" className="sm:min-w-48">
              {activity.secondaryCta}
            </CtaButton>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-4xl">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/80 bg-white/62 p-4 shadow-sm backdrop-blur"
              >
                <fact.icon className="mb-3 h-5 w-5 text-qblue" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {fact.label}
                </p>
                <p className="mt-1 text-base font-semibold text-ink">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="mission-panel float-slow">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-qblue text-white">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">AI 实战任务栈</p>
                <p className="text-xs text-slate-500">3D / LLM / Robot / Voice</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {['生成式 3D 模型', '角色扮演语音对话', '嵌入式智能小车', '语音控制电脑'].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 p-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-100 text-sm font-bold text-qblue">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">实战通道</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">报名后进入议题创作、作品提交与路演式终面。</p>
            </div>
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
