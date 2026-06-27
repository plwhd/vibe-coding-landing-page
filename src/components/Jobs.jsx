import { ArrowRight, MapPin, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { jobs } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const allCategory = '全部'

export default function Jobs({ onSignup }) {
  const [category, setCategory] = useState(allCategory)
  const [active, setActive] = useState(jobs[0].title)
  const categories = useMemo(() => [allCategory, ...new Set(jobs.map((job) => job.category))], [])
  const visibleJobs = category === allCategory ? jobs : jobs.filter((job) => job.category === category)
  const activeJob = visibleJobs.find((job) => job.title === active) ?? visibleJobs[0] ?? jobs[0]

  const handleCategory = (item) => {
    setCategory(item)
    const nextJobs = item === allCategory ? jobs : jobs.filter((job) => job.category === item)
    setActive(nextJobs[0]?.title ?? jobs[0].title)
  }

  return (
    <section id="jobs" className="section-pad section-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="Open roles"
              title="100+ Offer 开放中，找到你的技术入口"
              description="先选方向，再看详情。岗位职责、要求和加分项为通用校招参考，正式投递以前以招聘团队确认为准。"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === item
                      ? 'bg-ink text-white'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-qblue hover:text-qblue'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <CtaButton onClick={onSignup} className="mt-7">
              投递感兴趣岗位
            </CtaButton>
          </div>

          <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-3">
              {visibleJobs.map((job, index) => (
                <Reveal key={job.title} delay={index * 35}>
                  <button
                    type="button"
                    onClick={() => setActive(job.title)}
                    className={`card-ui-hover w-full rounded-3xl border bg-white p-4 text-left shadow-sm ${
                      activeJob.title === job.title ? 'border-qblue ring-4 ring-blue-100' : 'border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-qblue">
                          {job.category}
                        </p>
                        <h3 className="text-lg font-semibold text-ink">{job.title}</h3>
                      </div>
                      <ArrowRight className={`mt-1 h-4 w-4 shrink-0 transition ${activeJob.title === job.title ? 'text-qblue' : 'text-slate-300'}`} />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.cities.map((city) => (
                        <span
                          key={city}
                          className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          <MapPin className="h-3 w-3" />
                          {city}
                        </span>
                      ))}
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>

            <Reveal className="xl:sticky xl:top-24">
              <article className="card-ui rounded-[1.75rem] p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-qblue">
                  Role detail
                </p>
                <h3 className="text-2xl font-semibold text-ink">{activeJob.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeJob.cities.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-qblue"
                    >
                      <MapPin className="h-3 w-3" />
                      {city}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-5">
                  <JobList title="岗位职责" items={activeJob.duties} />
                  <JobList title="岗位要求" items={activeJob.requirements} />
                  <div className="rounded-3xl bg-blue-50/75 p-5">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-qblue">
                      <Plus className="h-4 w-4" />
                      加分项
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{activeJob.bonus}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function JobList({ title, items }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold text-ink">{title}</h4>
      <ul className="space-y-2 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-qblue" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
