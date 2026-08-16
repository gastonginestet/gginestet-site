'use client'
import { ArrowUpRight } from 'lucide-react'
import { WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from './data'
import { useLanguage } from './language-context'
import { OffTheClockCarousel } from './off-the-clock-carousel'
import { FreelanceForm } from './freelance-form'

const STACK = ['Ruby on Rails', 'PostgreSQL', 'React', 'Heroku', 'Claude', 'Cursor']

const tagClassName =
  'inline-flex items-center border border-accent px-2.5 py-[3px] text-[11px] tracking-[0.02em] text-accent no-underline transition-[background-color,color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-accent hover:text-bg'

function Tag({
  href,
  children,
}: {
  href?: string
  children: React.ReactNode
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={tagClassName}
      >
        {children}
      </a>
    )
  }
  return <span className={tagClassName}>{children}</span>
}

function ButtonLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 border border-divider px-4 py-2 text-sm font-extrabold text-text no-underline transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:bg-text/[0.07] hover:shadow-sm active:translate-y-0 active:bg-text/[0.14]"
    >
      {children}
      <ArrowUpRight
        className="h-3 w-3 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </a>
  )
}

export default function Personal() {
  const { lang, t } = useLanguage()

  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 pb-16 min-[760px]:px-8 min-[760px]:pb-24">
      <section className="mt-14">
        <h3 className="mb-4 text-[25px]">{t.stackHeading}</h3>
        <div className="flex flex-wrap gap-2">
          {STACK.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </section>

      <hr className="my-10 h-0.5 border-0 bg-divider" />

      <section>
        <h3 className="mb-4 text-[25px]">{t.workHeading}</h3>
        <div>
          {WORK_EXPERIENCE.map((job) => {
            const copy = job[lang]
            return (
              <div
                key={job.id}
                className="grid grid-cols-1 gap-1.5 border-b border-divider py-5 min-[760px]:grid-cols-[140px_1fr] min-[760px]:gap-6"
              >
                <div className="text-xs tracking-[0.05em] text-text/55 uppercase">
                  {job.start} — {job.end}
                </div>
                <div>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[17px] font-extrabold text-text no-underline hover:underline"
                  >
                    {copy.title} {t.atLabel} {job.company}
                  </a>
                  {copy.location && (
                    <div className="mt-1 text-[13px] text-text/60">
                      {copy.location}
                    </div>
                  )}
                  {job.projects && (
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {job.projects.map((project) => (
                        <Tag key={project.name} href={project.link}>
                          {project.name}
                        </Tag>
                      ))}
                    </div>
                  )}
                  {copy.description && (
                    <div className="mt-2.5">
                      {copy.description.map((line, index) => (
                        <p key={index} className="mb-1.5 text-[13px] text-text/75">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="mb-4 text-[25px]">{t.communityHeading}</h3>
        <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
          <li className="text-[15px] text-text/85">
            {t.communityTalkLabel}{' '}
            <a
              href="https://ruby.com.ar/meetup/2025_04.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              De cero contexto a full upgrade — Ruby Argentina Meetup (Abril
              2025)
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-10 h-0.5 border-0 bg-divider" />

      <section className="grid grid-cols-1 items-center gap-5 p-8 min-[760px]:grid-cols-2">
        <div>
          <h3 className="mb-4 text-[25px]">{t.offClockHeading}</h3>
          <p className="max-w-[46ch] text-[15px] text-text/85">
            {t.offClockText}
          </p>
        </div>
        <OffTheClockCarousel />
      </section>

      <hr className="my-10 h-0.5 border-0 bg-divider" />

      <section className="grid grid-cols-1 gap-6 p-8 min-[760px]:grid-cols-2 min-[760px]:gap-10">
        <div>
          <h3 className="mb-4 text-[25px]">{t.freelanceHeading}</h3>
          <p className="mb-6 max-w-[60ch] text-[15px] text-text/85">
            {t.freelanceText}
          </p>
          <FreelanceForm />
        </div>

        <div className="border-t border-divider pt-6 min-[760px]:border-t-0 min-[760px]:border-l min-[760px]:pt-0 min-[760px]:pl-10">
          <h3 className="mb-4 text-xs tracking-[0.08em] text-text/60 uppercase">
            {t.canHelpWith}
          </h3>
          <ul className="m-0 mb-7 flex list-none flex-col gap-3.5 p-0">
            {t.freelanceServices.map((service) => (
              <li
                key={service}
                className="flex items-baseline gap-2.5 text-[15px] text-text"
              >
                <span className="h-0.5 w-3.5 shrink-0 -translate-y-1 bg-accent" />
                {service}
              </li>
            ))}
          </ul>

          <h3 className="mb-3 text-[25px]">{t.connectHeading}</h3>
          <p className="mb-4 text-[15px] text-text/85">
            {t.connectText} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <div className="flex flex-wrap gap-2.5">
            {SOCIAL_LINKS.map((link) => (
              <ButtonLink key={link.label} href={link.link}>
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
