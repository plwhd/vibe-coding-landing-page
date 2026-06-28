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

        <div className="overflow-x-auto pb-2">
          <div className="relative flex min-w-max gap-3">
            <div className="absolute left-10 right-10 top-[1.45rem] h-px bg-blue-100" aria-hidden="true" />
            {timeline.map((item, index) => (
              <Reveal key={item.step} delay={index * 45}>
                <article className="relative w-44 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-qblue hover:shadow-card">
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-qblue text-xs font-bold text-white shadow-sm">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-qblue">
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
