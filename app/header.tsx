import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { EMAIL } from './data'

export function Header() {
  return (
    <section className="px-5 pt-10 min-[760px]:px-8 min-[760px]:pt-[72px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 min-[760px]:grid-cols-[1.05fr_0.95fr] min-[760px]:grid-rows-2 min-[760px]:items-stretch min-[760px]:gap-x-14 min-[760px]:gap-y-2">
        <div className="order-1 min-[760px]:order-none min-[760px]:col-start-1 min-[760px]:row-start-1">
          <p className="mb-2.5 text-[13px] tracking-[0.12em] text-accent-700 uppercase">
            Hi, I&apos;m
          </p>
          <h1 className="text-[44px] tracking-[-0.02em] min-[760px]:text-[68px]">
            Gaston Ginestet
          </h1>
          <h2 className="mt-1.5 text-2xl font-normal tracking-[0.03em] text-text uppercase">
            Software Engineer
          </h2>
        </div>

        <div className="order-2 flex items-end justify-center min-[760px]:order-none min-[760px]:col-start-2 min-[760px]:row-start-1 min-[760px]:row-span-2">
          <Image
            src="/gaston-cutout.png"
            alt="Gaston Ginestet"
            width={1763}
            height={1849}
            className="h-auto w-full max-w-[420px] object-contain"
            priority
          />
        </div>

        <div className="order-3 min-[760px]:order-none min-[760px]:col-start-1 min-[760px]:row-start-2">
          <p className="mb-7 max-w-[46ch] text-base text-text/75">
            I build and maintain systems, from architecture to production,
            with strong experience in Ruby on Rails, and lean on AI tooling
            to ship faster without cutting corners.
          </p>

          <div className="mb-8 flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-3.5 shrink-0 bg-accent" />
              <span className="text-xs tracking-[0.08em] text-text uppercase">
                Ruby on Rails · 5+ years
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-3.5 shrink-0 bg-accent" />
              <span className="text-xs tracking-[0.08em] text-text uppercase">
                Buenos Aires, Argentina — Remote
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-1.5 bg-accent px-4 py-2 text-sm font-extrabold text-bg no-underline transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:text-black hover:shadow-sm active:translate-y-0"
            >
              Get in touch
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
            <a
              href="/gaston_ginestet_cv.pdf"
              download
              className="inline-flex items-center gap-1.5 border border-divider px-4 py-2 text-sm font-extrabold text-text no-underline transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:bg-text/[0.07] hover:shadow-sm active:translate-y-0 active:bg-text/[0.14]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
