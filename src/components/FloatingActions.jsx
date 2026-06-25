import { Gift, MessageCircle, UploadCloud } from 'lucide-react'
import { referral } from '../data/activity.js'

export default function FloatingActions({ onSignup }) {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col gap-3 md:flex">
        <button
          type="button"
          onClick={onSignup}
          className="group flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1"
        >
          <UploadCloud className="h-4 w-4" />
          上传简历
        </button>
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-1 hover:border-qblue hover:text-qblue"
        >
          <MessageCircle className="h-4 w-4" />
          扫码进群
        </a>
        <a
          href={referral.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-1 hover:border-qblue hover:text-qblue"
        >
          <Gift className="h-4 w-4" />
          算力好礼
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/92 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
        <button
          type="button"
          onClick={onSignup}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
        >
          <UploadCloud className="h-4 w-4" />
          上传简历并报名
        </button>
      </div>
    </>
  )
}
