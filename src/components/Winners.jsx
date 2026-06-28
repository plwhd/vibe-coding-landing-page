import { Trophy } from 'lucide-react'
import { winners } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Winners() {
  return (
    <section id="winners" className="section-pad section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Winners"
          title="获奖队伍"
          description="保留获奖结果作为活动真实性和项目产出的证明。"
          align="center"
        />

        <Reveal>
          <div className="card-ui overflow-hidden rounded-[1.75rem]">
            <div className="grid grid-cols-[0.7fr_1fr_1.5fr] gap-4 border-b border-blue-100 bg-blue-50/80 px-5 py-4 text-sm font-semibold text-qblue md:px-7">
              <span>奖项</span>
              <span>队伍名称</span>
              <span>议题方向</span>
            </div>
            <div className="divide-y divide-slate-100">
              {winners.map(([award, team, topic], index) => (
                <div
                  key={`${award}-${team}`}
                  className={`grid grid-cols-1 gap-2 px-5 py-4 text-sm transition md:grid-cols-[0.7fr_1fr_1.5fr] md:items-center md:gap-4 md:px-7 ${rowTone(award)}`}
                >
                  <span className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-semibold ${awardTone(award)}`}>
                    <Trophy className={`h-4 w-4 ${iconTone(award)}`} />
                    {award}
                  </span>
                  <span className={`font-semibold text-ink ${index < 3 ? 'text-base' : ''}`}>{team}</span>
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

function awardTone(award) {
  if (award === '一等奖') return 'border-amber-300 bg-amber-100 text-amber-800 shadow-sm'
  if (award === '二等奖') return 'border-blue-200 bg-blue-100 text-qblue'
  if (award === '三等奖') return 'border-emerald-200 bg-emerald-50 text-emerald-700'
  return 'border-slate-200 bg-slate-50 text-slate-600'
}

function rowTone(award) {
  if (award === '一等奖') return 'bg-amber-50/70 hover:bg-amber-50'
  if (award === '二等奖') return 'bg-blue-50/55 hover:bg-blue-50'
  return 'hover:bg-blue-50/60'
}

function iconTone(award) {
  if (award === '一等奖') return 'text-sun'
  if (award === '二等奖') return 'text-qblue'
  if (award === '三等奖') return 'text-emerald-600'
  return 'text-slate-500'
}
