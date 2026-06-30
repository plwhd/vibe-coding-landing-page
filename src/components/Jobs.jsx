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
    <section id="jobs" className="section-pad bg-warm">
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
                className={`rounded-2xl px-4 py-2 text-xs font-semibold transition ${
                    category === item
                      ? 'bg-qblue text-white'
                      : 'bg-sand text-ink hover:bg-[#d8d8d1]'
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
                  className={`w-full rounded-[28px] border bg-white p-5 text-left transition duration-200 hover:border-silver ${
                    activeJob.title === job.title ? 'border-qblue ring-4 ring-[#e60023]/10' : 'border-warmline'
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-qblue">
                        {job.category}
                      </p>
                      <h3 className="text-xl font-semibold text-ink">{job.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.cities.map((city) => (
                        <span
                          key={city}
                          className="inline-flex items-center gap-1 rounded-2xl bg-sand px-3 py-1 text-xs font-medium text-olive"
                        >
                          <MapPin className="h-3 w-3" />
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeJob.title === job.title && (
                    <div className="mt-5 grid gap-4 border-t border-warmline pt-5 md:grid-cols-3">
                      <JobList title="岗位职责" items={job.duties} />
                      <JobList title="岗位要求" items={job.requirements} />
                      <div className="rounded-[20px] bg-warm p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-qblue">
                          <Plus className="h-4 w-4" />
                          加分项
                        </div>
                        <p className="text-sm leading-7 text-olive">{job.bonus}</p>
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
      <ul className="space-y-2 text-sm leading-6 text-olive">
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
