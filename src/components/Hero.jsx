import { ArrowDown, Bot, CalendarDays, MapPin, Sparkles, UploadCloud, Users } from 'lucide-react'
import { activity } from '../data/activity.js'
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
        {Array.from({ length: 26 }).map((_, index) => (
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

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-sm font-semibold text-qblue shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            {activity.eyebrow}
          </div>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[1.04] text-ink sm:text-6xl lg:text-8xl">
            {activity.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-slate-700 md:text-2xl">
            {activity.subtitle}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            面向云计算、AI、开发者和校园招聘的项目实战挑战。用作品证明实力，拿 Offer，赢奖金。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton onClick={onSignup} className="sm:min-w-52">
              <UploadCloud className="h-4 w-4" />
              {activity.primaryCta}
            </CtaButton>
            <CtaButton href="#topics" variant="secondary" className="sm:min-w-48">
              {activity.secondaryCta}
            </CtaButton>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-4xl">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="group rounded-3xl border border-white/80 bg-white/70 p-5 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-blue-200"
            >
              <fact.icon className="mb-4 h-5 w-5 text-qblue" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                {fact.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden w-[24rem] lg:block">
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
            {['生成式 3D 模型', '角色扮演语音对话', '嵌入式智能小车'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 p-3">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-100 text-sm font-bold text-qblue">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-slate-700">{item}</span>
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
