import { ExternalLink, Layers3 } from 'lucide-react'
import { useState } from 'react'
import { topics } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Topics() {
  const [activeTopic, setActiveTopic] = useState(null)

  return (
    <section id="topics" className="section-pad bg-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Challenge topics"
          title="五个实战议题，把 AI 想法做成作品"
          description="每个议题都要求清晰的用户思考、模型或硬件选型、工程实现和说明文档。"
          align="center"
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-5">
          {topics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 70} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={`group flex w-full flex-col rounded-[28px] border-[8px] border-white p-5 text-left transition duration-200 hover:border-sand ${
                  index % 3 === 0 ? 'min-h-80 bg-[#f7dfe4]' : index % 3 === 1 ? 'min-h-72 bg-white' : 'min-h-96 bg-sand'
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-2xl bg-[hsla(60,20%,98%,.7)] px-3 py-1 text-xs font-semibold text-olive">
                    {topic.tag}
                  </span>
                  <Layers3 className="h-5 w-5 text-qblue" />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-ink">{topic.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-olive">{topic.summary}</p>
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
        <div className="fixed inset-0 z-[70] grid place-items-center bg-[#211922]/45 p-4 backdrop-blur-sm">
          <div className="max-h-[86vh] w-full max-w-2xl overflow-auto rounded-[32px] bg-white p-6 md:p-8">
            <div className="mb-5 flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 text-sm font-semibold text-qblue">{activeTopic.tag}</p>
                <h3 className="text-2xl font-semibold text-ink">{activeTopic.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveTopic(null)}
                className="rounded-2xl bg-sand px-4 py-2 text-sm font-semibold text-ink transition hover:bg-[#d8d8d1]"
              >
                关闭
              </button>
            </div>
            <p className="text-base leading-8 text-olive">{activeTopic.detail}</p>
            <div className="mt-6 rounded-[20px] bg-warm p-5">
              <p className="text-sm font-semibold text-qblue">提交物</p>
              <p className="mt-2 text-sm leading-7 text-olive">{activeTopic.deliverable}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
