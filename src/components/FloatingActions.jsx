import { Gift, MessageCircle, UploadCloud } from 'lucide-react'
import { referral } from '../data/activity.js'

export default function FloatingActions({ onSignup }) {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col gap-3 md:flex">
        <button
          type="button"
          onClick={onSignup}
          className="group flex items-center gap-2 rounded-2xl bg-qblue px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#ad081b]"
        >
          <UploadCloud className="h-4 w-4" />
          上传简历
        </button>
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-2xl bg-sand px-4 py-3 text-xs font-semibold text-ink transition hover:bg-[#d8d8d1]"
        >
          <MessageCircle className="h-4 w-4" />
          扫码进群
        </a>
        <a
          href={referral.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 rounded-2xl bg-sand px-4 py-3 text-xs font-semibold text-ink transition hover:bg-[#d8d8d1]"
        >
          <Gift className="h-4 w-4" />
          算力好礼
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-warmline bg-white/95 p-3 backdrop-blur md:hidden">
        <button
          type="button"
          onClick={onSignup}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-qblue px-5 py-3 text-sm font-semibold text-white"
        >
          <UploadCloud className="h-4 w-4" />
          上传简历并报名
        </button>
      </div>
    </>
  )
}
