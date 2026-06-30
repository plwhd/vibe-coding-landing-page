import { MessageCircle, QrCode, UploadCloud } from 'lucide-react'
import { activity, qrCodes } from '../data/activity.js'
import CtaButton from './CtaButton.jsx'
import Reveal from './Reveal.jsx'

export default function FooterCta({ onSignup }) {
  return (
    <footer id="contact" className="bg-darkwarm text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <QrCode className="h-4 w-4" />
                最后一步
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                准备好了吗？上传简历，进入项目实战。
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#e5e5e0]">
                报名截止 {activity.applyDeadline}。扫码进群可咨询报名、议题和提交规则。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton onClick={onSignup} className="border-transparent bg-qblue text-white hover:bg-[#ad081b]">
                  <UploadCloud className="h-4 w-4" />
                  {activity.primaryCta}
                </CtaButton>
                <CtaButton href="#contact" variant="secondary" className="bg-sand text-ink hover:bg-white">
                  <MessageCircle className="h-4 w-4" />
                  扫码进群
                </CtaButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {qrCodes.map((code) => (
                <div key={code.label} className="rounded-[24px] bg-white p-4 text-center text-ink">
                  <img
                    src={code.image}
                    alt={code.label}
                    className="mx-auto aspect-square w-full max-w-36 rounded-[20px] object-cover"
                  />
                  <p className="mt-3 text-sm font-semibold">{code.label}</p>
                  <p className="mt-1 text-xs text-olive">{code.hint}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#c8c8c1] md:flex-row md:items-center md:justify-between">
          <p>七牛云 2026 校招季 · AI 项目实战挑战赛</p>
          <a href={activity.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-white">
            原始活动页
          </a>
        </div>
      </div>
    </footer>
  )
}
