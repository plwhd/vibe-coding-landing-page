import { Gift, MessageCircle, UploadCloud } from 'lucide-react'
import { referral } from '../data/activity.js'

export default function FloatingActions({ onSignup }) {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col gap-3 md:flex">
        <button
          type="button"
          onClick={onSignup}
          aria-label="上传简历"
          title="上传简历"
          className="group relative grid h-12 w-12 place-items-center rounded-full bg-qblue text-white shadow-glow transition hover:-translate-y-1"
        >
          <UploadCloud className="h-4 w-4" />
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink opacity-0 shadow-sm transition group-hover:opacity-100">
            上传简历
          </span>
        </button>
        <a
          href="#contact"
          aria-label="扫码进群"
          title="扫码进群"
          className="group relative grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:-translate-y-1 hover:border-qblue hover:text-qblue"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink opacity-0 shadow-sm transition group-hover:opacity-100">
            扫码进群
          </span>
        </a>
        <a
          href={referral.url}
          target="_blank"
          rel="noreferrer"
          aria-label="算力好礼"
          title="算力好礼"
          className="group relative grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:-translate-y-1 hover:border-qblue hover:text-qblue"
        >
          <Gift className="h-4 w-4" />
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink opacity-0 shadow-sm transition group-hover:opacity-100">
            算力好礼
          </span>
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/92 p-3 shadow-[0_-12px_30px_rgba(36,59,90,0.08)] backdrop-blur md:hidden">
        <button
          type="button"
          onClick={onSignup}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-qblue px-5 py-3 text-sm font-semibold text-white"
        >
          <UploadCloud className="h-4 w-4" />
          上传简历并报名
        </button>
      </div>
    </>
  )
}
