import { ExternalLink, Layers3 } from 'lucide-react'
import { useState } from 'react'
import { topics } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Topics() {
  const [activeTopic, setActiveTopic] = useState(null)

  return (
    <section id="topics" className="section-pad bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Challenge topics"
          title="五个实战议题，把 AI 想法做成作品"
          description="每个议题都要求清晰的用户思考、模型或硬件选型、工程实现和说明文档。"
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {topics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 70}>
              <button
                type="button"
                onClick={() => setActiveTopic(topic)}
                className="shine-card group flex h-full min-h-72 w-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-qblue hover:shadow-card"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {topic.tag}
                  </span>
                  <Layers3 className="h-5 w-5 text-qblue" />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-ink">{topic.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">{topic.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-qblue">
                  查看详情
                  <ExternalLink className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeTopic && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/40 p-4 backdrop-blur-sm">
          <div className="max-h-[86vh] w-full max-w-2xl overflow-auto rounded-[2rem] bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-5 flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 text-sm font-semibold text-qblue">{activeTopic.tag}</p>
                <h3 className="text-2xl font-semibold text-ink">{activeTopic.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveTopic(null)}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-qblue hover:text-qblue"
              >
                关闭
              </button>
            </div>
            <p className="text-base leading-8 text-slate-600">{activeTopic.detail}</p>
            <div className="mt-6 rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-semibold text-qblue">提交物</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{activeTopic.deliverable}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
