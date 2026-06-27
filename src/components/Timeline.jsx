import { timeline } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Roadmap"
          title="从报名到 Offer，一条清晰的项目实战路径"
          description="两批次节奏并行，核心路径保持一致：报名、创作、提交、路演、Offer、获奖公布。"
          align="center"
        />

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 md:block lg:left-1/2" />
          <div className="grid gap-5">
            {timeline.map((item, index) => (
              <Reveal key={item.step} delay={index * 60}>
                <div
                  className={`relative grid gap-4 lg:grid-cols-2 ${
                    index % 2 === 0 ? '' : 'lg:[&>*:first-child]:col-start-2'
                  }`}
                >
                  <article className="timeline-card card-ui card-ui-hover rounded-[1.75rem] p-5 md:p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-sm font-bold text-white">
                          {item.step}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                          {item.phase}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">{item.detail}</p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      <TimePill label="第一批" value={item.batchOne} />
                      <TimePill label="第二批" value={item.batchTwo} />
                    </div>
                  </article>
                </div>
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
    <div className="rounded-2xl border border-blue-100 bg-blue-50/65 p-3">
      <p className="text-xs font-semibold text-qblue">{label}</p>
      <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
    </div>
  )
}
