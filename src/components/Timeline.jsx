import { timeline } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Roadmap"
          title="从报名到 Offer，一条清晰的项目实战路径"
          description="两批次节奏并行，核心路径保持一致：报名、创作、提交、路演、Offer、获奖公布。"
          align="center"
        />

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-warmline md:block lg:left-1/2" />
          <div className="grid gap-5">
            {timeline.map((item, index) => (
              <Reveal key={item.step} delay={index * 60}>
                <div
                  className={`relative grid gap-4 lg:grid-cols-2 ${
                    index % 2 === 0 ? '' : 'lg:[&>*:first-child]:col-start-2'
                  }`}
                >
                  <article className="timeline-card rounded-[28px] border border-warmline bg-warm p-5">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-[20px] bg-qblue text-sm font-bold text-white">
                        {item.step}
                      </span>
                      <span className="rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-qblue">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-olive">{item.detail}</p>
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
