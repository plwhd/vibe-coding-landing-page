import { Trophy } from 'lucide-react'
import { winners } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Winners() {
  return (
    <section id="winners" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Winners"
          title="获奖队伍展示"
          description="保留获奖结果作为活动真实性和项目产出的证明。"
          align="center"
        />

        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
            <div className="grid grid-cols-[0.7fr_1fr_1.5fr] gap-4 bg-ink px-5 py-4 text-sm font-semibold text-white md:px-7">
              <span>奖项</span>
              <span>队伍名称</span>
              <span>议题方向</span>
            </div>
            <div className="divide-y divide-slate-100">
              {winners.map(([award, team, topic], index) => (
                <div
                  key={`${award}-${team}`}
                  className="grid grid-cols-1 gap-2 px-5 py-4 text-sm transition hover:bg-blue-50/60 md:grid-cols-[0.7fr_1fr_1.5fr] md:gap-4 md:px-7"
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                    <Trophy className={`h-4 w-4 ${index < 1 ? 'text-sun' : 'text-qblue'}`} />
                    {award}
                  </span>
                  <span className="font-semibold text-ink">{team}</span>
                  <span className="leading-6 text-slate-600">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
