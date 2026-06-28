import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal
      className={`mb-8 md:mb-12 ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-qblue">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-ink md:text-[2.75rem] md:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
