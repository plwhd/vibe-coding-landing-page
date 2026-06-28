import { timeline } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Roadmap"
          title="报名到 Offer"
          description="两批次节奏并行，核心路径保持一致：报名、创作、提交、路演、Offer、获奖公布。"
          align="center"
        />

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <Reveal key={item.step} delay={index * 45}>
              <article className="card-ui card-ui-hover flex h-full flex-col rounded-[1.35rem] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-xs font-bold text-qblue">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                    {item.phase}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-6 text-ink">{item.title}</h3>
                <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500">{item.detail}</p>
                <div className="mt-4 grid gap-1.5">
                  <TimePill label="第一批" value={item.batchOne} />
                  <TimePill label="第二批" value={item.batchTwo} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TimePill({ label, value }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/65 px-3 py-2">
      <p className="text-[11px] font-semibold text-qblue">{label}</p>
      <p className="mt-0.5 text-xs font-semibold text-ink">{value}</p>
    </div>
  )
}
