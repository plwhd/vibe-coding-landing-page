import { ArrowRight, MapPin, Plus } from 'lucide-react'
import { useState } from 'react'
import { jobs } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const roleCount = jobs.length
const cityCount = new Set(jobs.flatMap((job) => job.cities)).size

export default function Jobs({ onSignup }) {
  const [active, setActive] = useState(jobs[0].title)
  const activeJob = jobs.find((job) => job.title === active) ?? jobs[0]

  return (
    <section id="jobs" className="section-pad section-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <SectionHeader
            eyebrow="Open roles"
            title="100+ Offer 开放"
            description="覆盖研发、AI、产品、数据、解决方案等方向。点击岗位卡片查看职责、要求和加分项。"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <div className="subtle-panel rounded-2xl p-4">
              <p className="text-2xl font-semibold text-ink">{roleCount}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">岗位类型</p>
            </div>
            <div className="subtle-panel rounded-2xl p-4">
              <p className="text-2xl font-semibold text-ink">{cityCount}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">城市覆盖</p>
            </div>
            <CtaButton onClick={onSignup} className="col-span-2 sm:col-span-1 sm:self-center">
              投递岗位
            </CtaButton>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div className="grid gap-3 sm:grid-cols-2">
            {jobs.map((job, index) => (
              <Reveal key={job.title} delay={index * 30}>
                <button
                  type="button"
                  onClick={() => setActive(job.title)}
                  className={`card-ui card-ui-hover h-full w-full rounded-[1.35rem] p-4 text-left ${
                    activeJob.title === job.title ? 'border-qblue ring-4 ring-blue-100' : ''
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
                  <div className="mt-4 flex flex-wrap gap-2">
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
                  <p className="mt-4 text-sm leading-6 text-slate-500">{job.duties[0]}</p>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:sticky lg:top-24">
            <JobDetail job={activeJob} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function JobDetail({ job }) {
  return (
    <article className="card-ui rounded-[1.75rem] p-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-qblue">
        Role detail
      </p>
      <h3 className="text-2xl font-semibold text-ink">{job.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.cities.map((city) => (
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
        <JobList title="工作职责" items={job.duties} />
        <JobList title="岗位要求" items={job.requirements} />
        <div className="rounded-3xl bg-blue-50/75 p-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-qblue">
            <Plus className="h-4 w-4" />
            加分项
          </div>
          <p className="text-sm leading-7 text-slate-600">{job.bonus}</p>
        </div>
      </div>
    </article>
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
