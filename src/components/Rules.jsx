import { CheckCircle2, ClipboardCheck, ShieldCheck } from 'lucide-react'
import { rules } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Rules() {
  return (
    <section id="rules" className="section-pad bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Rules"
          title="评审透明，提交标准清晰"
          description="评审重点不是单纯炫技，而是产品是否有用户价值，以及工程实现是否扎实。"
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
              <div className="mb-6 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-qblue" />
                <h3 className="text-xl font-semibold text-ink">议题评审规则</h3>
              </div>
              <div className="space-y-4">
                {rules.review.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-50 p-5">
                    <div className="mb-3 flex items-baseline justify-between gap-4">
                      <h4 className="text-lg font-semibold text-ink">{item.title}</h4>
                      <span className="text-3xl font-semibold text-qblue">{item.weight}</span>
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{item.detail}</p>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-qblue" style={{ width: item.weight }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
              <div className="mb-6 flex items-center gap-3">
                <ClipboardCheck className="h-6 w-6 text-mint" />
                <h3 className="text-xl font-semibold text-ink">作品提交清单</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {rules.submission.map((item) => (
                  <div key={item} className="flex gap-3 rounded-3xl bg-slate-50 p-5">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-mint" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <details className="mt-5 rounded-3xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer text-sm font-semibold text-ink">
                  知识产权与学术诚信说明
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  作品知识产权归提交队伍或个人所有。不得侵犯他人知识产权或其他权益，不得未经相关单位许可公开发布涉及该单位知识产权的作品及软件。代码抄袭、技术抄袭或代码重复率在 50% 以上，将取消路演资格，并列入招聘黑名单。
                </p>
              </details>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
