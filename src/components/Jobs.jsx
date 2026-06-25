import { MapPin, Plus } from 'lucide-react'
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
  const activeJob = jobs.find((job) => job.title === active) ?? visibleJobs[0]

  return (
    <section id="jobs" className="section-pad bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="Open roles"
              title="100+ Offer 开放中，找到你的技术入口"
              description="岗位职责、要求和加分项为通用校招参考，正式投递以前以招聘团队确认为准。"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
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

          <div className="grid gap-4">
            {visibleJobs.map((job, index) => (
              <Reveal key={job.title} delay={index * 45}>
                <button
                  type="button"
                  onClick={() => setActive(job.title)}
                  className={`w-full rounded-[1.75rem] border bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card ${
                    activeJob.title === job.title ? 'border-qblue ring-4 ring-blue-100' : 'border-slate-200'
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-qblue">
                        {job.category}
                      </p>
                      <h3 className="text-xl font-semibold text-ink">{job.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
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
                  </div>

                  {activeJob.title === job.title && (
                    <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 md:grid-cols-3">
                      <JobList title="岗位职责" items={job.duties} />
                      <JobList title="岗位要求" items={job.requirements} />
                      <div className="rounded-2xl bg-blue-50 p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-qblue">
                          <Plus className="h-4 w-4" />
                          加分项
                        </div>
                        <p className="text-sm leading-7 text-slate-600">{job.bonus}</p>
                      </div>
                    </div>
                  )}
                </button>
              </Reveal>
            ))}
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
