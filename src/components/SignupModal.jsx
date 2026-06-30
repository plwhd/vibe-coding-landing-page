import { useState } from 'react'
import { X } from 'lucide-react'
import { activity, formFields } from '../data/activity.js'

export default function SignupModal({ open, onClose }) {
  const [fileName, setFileName] = useState('')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-[#211922]/45 p-4 backdrop-blur-sm">
      <div className="mx-auto my-8 max-w-3xl overflow-hidden rounded-[32px] bg-white">
        <div className="flex items-start justify-between gap-6 border-b border-warmline p-6">
          <div>
            <p className="text-sm font-semibold text-qblue">立即报名</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">{activity.title}</h2>
            <p className="mt-2 text-sm leading-7 text-olive">
              当前为前端演示表单，不会提交到后端。正式页面可对接原报名接口。
            </p>
          </div>
          <button
            type="button"
            aria-label="关闭报名弹窗"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand text-olive transition hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form className="grid gap-5 p-6" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="队伍名称" placeholder="一人投递也需要队伍名" />
            <Field label="姓名" placeholder="请输入姓名" />
            <Field label="手机号码" placeholder="请输入手机号码" />
            <Field label="邮箱" placeholder="请输入邮箱" type="email" />
            <Select label="意向岗位" options={formFields.jobs} />
            <Select label="意向工作城市" options={formFields.cities} />
          </div>

          <div>
            <label className="mb-3 block text-sm font-semibold text-ink">投递方式</label>
            <div className="grid gap-3 md:grid-cols-3">
              {['组队投递报名', '单人投递报名', '先单人报名，之后再确定'].map((item) => (
                <label key={item} className="flex cursor-pointer gap-2 rounded-2xl border border-warmline p-4 text-sm text-olive hover:border-qblue">
                  <input type="radio" name="signupType" className="mt-1" />
                  {item}
                </label>
              ))}
            </div>
            <p className="mt-2 text-xs text-olive">友情提醒：议题涉及前后端配合，组队报名胜率更高。</p>
          </div>

          <Select label="你是从哪里了解到本次招聘信息的？" options={formFields.sources} />

          <div className="rounded-[24px] border border-dashed border-silver bg-warm p-5">
            <label className="block text-sm font-semibold text-ink">简历附件（PDF）</label>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
                className="block w-full text-sm text-olive file:mr-4 file:rounded-2xl file:border-0 file:bg-qblue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
              />
              {fileName && <span className="text-sm text-qblue">{fileName}</span>}
            </div>
          </div>

          <div className="rounded-[24px] bg-sand p-5 text-sm leading-7 text-olive">
            报名成功后即送 1200 万 Token。校招期间每日限量发放 1 万元代金券，可用于购买 GPU 算力与全栈应用服务器，优秀项目优先评定。
          </div>

          <button
            type="submit"
            className="min-h-12 rounded-2xl bg-qblue px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ad081b] active:scale-[0.98]"
          >
            提交报名信息
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({ label, placeholder, type = 'text' }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="min-h-12 w-full rounded-2xl border border-silver bg-white px-4 text-sm outline-none transition focus:border-[#435ee5] focus:ring-4 focus:ring-[#435ee5]/20"
      />
    </label>
  )
}

function Select({ label, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <select className="min-h-12 w-full rounded-2xl border border-silver bg-white px-4 text-sm outline-none transition focus:border-[#435ee5] focus:ring-4 focus:ring-[#435ee5]/20">
        <option>请选择</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}
