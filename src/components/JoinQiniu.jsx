import { Building2, Play, Sparkles } from 'lucide-react'
import { qiniu } from '../data/activity.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function JoinQiniu() {
  return (
    <section id="join" className="section-pad bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Join Qiniu"
              title="加入七牛，从云到 AI 到具身智能"
              description={qiniu.description}
            />
            <div className="grid gap-3">
              {qiniu.reasons.map((reason, index) => (
                <Reveal key={reason} delay={index * 60}>
                  <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-sm font-bold text-qblue">
                      {index + 1}
                    </span>
                    <p className="font-medium text-slate-700">{reason}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
              <div className="relative aspect-video bg-slate-900">
                <video className="h-full w-full object-cover" controls preload="metadata">
                  <source src={qiniu.video} type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-ink backdrop-blur">
                  <Play className="h-3.5 w-3.5 text-qblue" />
                  七牛云：从云到端的AI平台服务商
                </div>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-2">
                {qiniu.stats.map(([value, label]) => (
                  <div key={value} className="rounded-3xl bg-slate-50 p-4">
                    <div className="mb-3 flex items-center gap-2 text-qblue">
                      {value.includes('AI') ? <Sparkles className="h-4 w-4" /> : <Building2 className="h-4 w-4" />}
                      <span className="text-sm font-semibold">{label}</span>
                    </div>
                    <p className="text-2xl font-semibold text-ink">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
