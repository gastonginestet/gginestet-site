'use client'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { EMAIL } from './data'
import { useLanguage } from './language-context'

const inputClassName =
  'w-full border border-divider bg-surface px-2.5 py-2 text-sm text-text outline-none transition-colors duration-150 ease-out hover:border-text/45 focus-visible:border-accent'

const labelClassName = 'mb-1.5 block text-xs text-text/70'

export function FreelanceForm() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Freelance project inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className={labelClassName}>{t.formNameLabel}</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClassName}
        />
      </div>
      <div>
        <label className={labelClassName}>{t.formEmailLabel}</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClassName}
        />
      </div>
      <div>
        <label className={labelClassName}>{t.formMessageLabel}</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClassName} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-1.5 self-start bg-accent px-4 py-2 text-sm font-extrabold text-bg no-underline transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:text-black hover:shadow-sm active:translate-y-0"
      >
        {t.freelanceCta}
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      </button>
    </form>
  )
}
