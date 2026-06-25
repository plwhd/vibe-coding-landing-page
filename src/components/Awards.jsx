import { Medal } from 'lucide-react'
import { awards, referral } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Awards() {
  return (
    <section id="awards" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Awards"
          title="奖金、Offer 和算力福利，给结果足够回报"
          description="用项目结果说话，优秀作品获得奖金和 Offer 机会，报名成功还可获得 Token 与算力代金券。"
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <Reveal key={award.title} delay={index * 70}>
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1">
                <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${award.tone}`} />
                <div className="mb-8 flex items-center justify-between">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${award.tone} text-white`}>
                    <Medal className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                    {award.count}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-ink">{award.title}</h3>
                <p className="mt-3 text-4xl font-semibold tracking-tight text-ink">{award.prize}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="grid gap-6 rounded-[2rem] border border-blue-100 bg-blue-50/70 p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-qblue">
                Bonus resources
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{referral.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{referral.description}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{referral.invite}</p>
            </div>
            <div className="md:text-right">
              <CtaButton href={referral.url} variant="secondary">{referral.action}</CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
