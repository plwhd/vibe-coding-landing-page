import { Award, BrainCircuit, BriefcaseBusiness, Rocket } from 'lucide-react'
import { highlights } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const icons = [BriefcaseBusiness, Award, Rocket, BrainCircuit]

export default function Highlights() {
  return (
    <section id="highlights" className="section-pad section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why join"
          title="AI 实战挑战"
          description="用真实项目参与校招筛选，岗位、奖金、Offer 与前沿技术方向同步展开。"
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={item.label} delay={index * 80}>
                <div className="card-ui card-ui-hover h-full rounded-[1.75rem] p-6">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-qblue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
                  </div>
                  <p className="text-4xl font-semibold tracking-tight text-ink">{item.value}</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{item.detail}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
