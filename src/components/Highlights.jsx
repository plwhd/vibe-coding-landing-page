import { Award, BrainCircuit, BriefcaseBusiness, Rocket } from 'lucide-react'
import { highlights } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const icons = [BriefcaseBusiness, Award, Rocket, BrainCircuit]

export default function Highlights() {
  return (
    <section id="highlights" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why join"
          title="不是普通笔试，是一次能被看见的 AI 项目实战"
          description="把校招筛选变成真实项目挑战，岗位、奖金、Offer 与前沿技术方向同时摆在台面上。"
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={item.label} delay={index * 80}>
                <div className="shine-card group h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-200">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-qblue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
                  </div>
                  <p className="text-4xl font-semibold tracking-tight text-ink">{item.value}</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{item.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.detail}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
