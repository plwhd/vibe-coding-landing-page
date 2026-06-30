import { ArrowDown, CalendarDays, MapPin, Sparkles, UploadCloud, Users } from 'lucide-react'
import { activity, highlights, topics } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'

const quickFacts = [
  { icon: Users, label: '面向对象', value: '2024-2026 届学生' },
  { icon: CalendarDays, label: '报名截止', value: activity.applyDeadline },
  { icon: MapPin, label: '活动地点', value: activity.location }
]

const pinCards = [
  {
    title: highlights[1].value,
    caption: highlights[1].label,
    className: 'h-44 bg-qblue text-white'
  },
  {
    title: 'SSP',
    caption: '项目路演终面',
    className: 'h-36 bg-sand text-ink'
  },
  {
    title: topics[1].tag,
    caption: topics[1].title,
    className: 'h-52 bg-[#f7dfe4] text-ink'
  },
  {
    title: highlights[0].value,
    caption: highlights[0].label,
    className: 'h-40 bg-mint text-white'
  },
  {
    title: topics[0].tag,
    caption: topics[0].title,
    className: 'h-56 bg-[#f6f6f3] text-ink'
  },
  {
    title: 'AI',
    caption: '3D / LLM / Robot / Voice',
    className: 'h-36 bg-darkwarm text-white'
  }
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
              left: `${(index * 41) % 96}%`,
              top: `${((index * 47) % 78) + 10}%`,
              animationDelay: `${index * 0.16}s`
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-2xl bg-[hsla(60,20%,98%,.7)] px-3 py-2 text-xs font-semibold text-qblue">
            <Sparkles className="h-4 w-4" />
            {activity.eyebrow}
          </div>

          <h1 className="max-w-4xl text-balance text-[54px] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[64px] lg:text-[70px]">
            {activity.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-ink md:text-2xl">
            {activity.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-olive">
            面向云计算、AI、开发者和校园招聘的项目实战挑战。用作品证明实力，拿 Offer，赢奖金。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton onClick={onSignup} className="sm:min-w-44">
              <UploadCloud className="h-4 w-4" />
              {activity.primaryCta}
            </CtaButton>
            <CtaButton href="#topics" variant="secondary" className="sm:min-w-40">
              {activity.secondaryCta}
            </CtaButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[20px] border border-warmline bg-white p-4 transition hover:border-silver"
              >
                <fact.icon className="mb-3 h-5 w-5 text-qblue" />
                <p className="text-xs font-semibold text-silver">{fact.label}</p>
                <p className="mt-2 text-sm font-bold text-ink">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden columns-2 gap-4 lg:block xl:columns-3">
          {pinCards.map((card, index) => (
            <article
              key={`${card.title}-${card.caption}`}
              className={`mb-4 break-inside-avoid rounded-[28px] border-[8px] border-white p-5 ${card.className}`}
            >
              <p className="text-[42px] font-semibold leading-none tracking-[-0.04em]">{card.title}</p>
              <p className="mt-3 text-sm font-semibold leading-6 opacity-80">{card.caption}</p>
              <span className="mt-5 inline-flex rounded-2xl bg-white/30 px-3 py-1 text-xs font-semibold">
                Pin 0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </div>

      <a
        href="#highlights"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-2xl bg-sand px-4 py-2 text-xs font-semibold text-olive transition hover:text-ink md:flex"
      >
        向下了解活动
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  )
}
