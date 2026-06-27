import { MessageCircle, QrCode, UploadCloud } from 'lucide-react'
import { activity, qrCodes } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'
import Reveal from './Reveal.jsx'

export default function FooterCta({ onSignup }) {
  return (
    <footer id="contact" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                <QrCode className="h-4 w-4" />
                最后一步
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                准备好了吗？上传简历，进入项目实战。
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                报名截止 {activity.applyDeadline}。扫码进群可咨询报名、议题和提交规则。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton onClick={onSignup} className="bg-white text-ink hover:bg-blue-50">
                  <UploadCloud className="h-4 w-4" />
                  {activity.primaryCta}
                </CtaButton>
                <CtaButton href="#contact" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-ink">
                  <MessageCircle className="h-4 w-4" />
                  扫码进群
                </CtaButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {qrCodes.map((code) => (
                <div key={code.label} className="rounded-[1.35rem] bg-white p-4 text-center text-ink shadow-sm">
                  <img
                    src={code.image}
                    alt={code.label}
                    className="mx-auto aspect-square w-full max-w-36 rounded-2xl object-cover"
                  />
                  <p className="mt-3 text-sm font-semibold">{code.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{code.hint}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>七牛云 2026 校招季 · AI 项目实战挑战赛</p>
          <a href={activity.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-white">
            原始活动页
          </a>
        </div>
      </div>
    </footer>
  )
}
