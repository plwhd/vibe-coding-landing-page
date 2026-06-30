import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal
      className={`mb-8 md:mb-10 ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-qblue">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold leading-tight tracking-[-0.04em] text-ink md:text-[28px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-olive">{description}</p>
      )}
    </Reveal>
  )
}
