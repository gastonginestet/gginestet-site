import { ArrowUpRight } from 'lucide-react'
import { WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from './data'

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
  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 pb-16 min-[760px]:px-8 min-[760px]:pb-24">
      <section className="mt-14">
        <h3 className="mb-4 text-[25px]">Stack</h3>
        <div className="flex flex-wrap gap-2">
          {STACK.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </section>

      <hr className="my-10 h-0.5 border-0 bg-divider" />

      <section>
        <h3 className="mb-4 text-[25px]">Work Experience</h3>
        <div>
          {WORK_EXPERIENCE.map((job) => (
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
                  {job.title} at {job.company}
                </a>
                {job.location && (
                  <div className="mt-1 text-[13px] text-text/60">
                    {job.location}
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
                {job.description && (
                  <div className="mt-2.5">
                    {job.description.map((line, index) => (
                      <p key={index} className="mb-1.5 text-[13px] text-text/75">
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="mb-4 text-[25px]">Off the Clock</h3>
        <p className="max-w-[60ch] text-[15px] text-text/85">
          When I&apos;m not writing code, I&apos;m out hunting for a good
          coffee spot, going for a run, or picking up a new sport like
          snowboarding or surfing (or trying to not fall). Currently
          training for an upcoming trail race and a half marathon.
        </p>
      </section>

      <hr className="my-10 h-0.5 border-0 bg-divider" />

      <section>
        <h3 className="mb-4 text-[25px]">Community Contributions</h3>
        <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
          <li className="text-[15px] text-text/85">
            Talk:{' '}
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

      <section>
        <h3 className="mb-4 text-[25px]">Connect</h3>
        <p className="mb-5 text-[15px] text-text/85">
          Feel free to contact me at{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <div className="flex flex-wrap gap-2.5">
          {SOCIAL_LINKS.map((link) => (
            <ButtonLink key={link.label} href={link.link}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </section>
    </main>
  )
}
