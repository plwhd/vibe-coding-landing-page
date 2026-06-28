import { Medal } from 'lucide-react'
import { awards, referral } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Awards() {
  return (
    <section id="awards" className="section-pad section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Awards"
          title="奖项与回报"
          description="优秀作品获得奖金和 Offer 机会，报名成功可获得 Token 与算力代金券。"
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <Reveal key={award.title} delay={index * 70}>
              <div className="card-ui card-ui-hover relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-5">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${award.tone}`} />
                <div className="flex items-start justify-between gap-4">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${award.tone} text-white shadow-sm`}>
                    <Medal className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-600">
                    {award.count}
                  </span>
                </div>
                <div className="mt-7">
                  <h3 className="text-lg font-semibold text-ink">{award.title}</h3>
                  <p className="mt-2 text-[2.65rem] font-semibold leading-none tracking-tight text-ink">{award.prize}</p>
                </div>
                <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold text-qblue">项目奖金</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">优秀项目优先进入 Offer 评定</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <div className="rounded-[1.35rem] border border-blue-100 bg-blue-50/65 p-4 md:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-qblue">
                  Bonus resources
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{referral.title}</h3>
              </div>
              <CtaButton href={referral.url} variant="secondary">{referral.action}</CtaButton>
            </div>
            <div className="mt-3">
              <p className="text-sm leading-6 text-slate-600 lg:whitespace-nowrap">{referral.description}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{referral.invite}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
