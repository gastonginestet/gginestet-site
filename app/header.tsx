'use client'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { EMAIL } from './data'
import { useLanguage } from './language-context'

export function Header() {
  const { t } = useLanguage()

  return (
    <section className="px-5 pt-10 min-[760px]:px-8 min-[760px]:pt-[72px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 min-[760px]:grid-cols-[1.05fr_0.95fr] min-[760px]:grid-rows-2 min-[760px]:items-stretch min-[760px]:gap-x-14 min-[760px]:gap-y-2">
        <div className="order-1 min-[760px]:order-none min-[760px]:col-start-1 min-[760px]:row-start-1">
          <p className="text-accent-700 mb-2.5 text-[13px] tracking-[0.12em] uppercase">
            {t.kicker}
          </p>
          <h1 className="text-[44px] tracking-[-0.02em] min-[760px]:text-[68px]">
            Gaston Ginestet
          </h1>
          <h2 className="text-text mt-1.5 text-2xl font-normal tracking-[0.03em] uppercase">
            {t.role}
          </h2>
        </div>

        <div className="order-2 flex items-end justify-center min-[760px]:order-none min-[760px]:col-start-2 min-[760px]:row-span-2 min-[760px]:row-start-1">
          <Image
            src="/gaston-profile.png"
            alt="Gaston Ginestet"
            width={1800}
            height={2053}
            className="h-auto w-full max-w-[420px] object-contain"
            priority
          />
        </div>

        <div className="order-3 min-[760px]:order-none min-[760px]:col-start-1 min-[760px]:row-start-2">
          <p className="text-text/75 mb-5 max-w-[46ch] text-base">
            {t.tagline}
          </p>

          <div className="border-divider mb-5 inline-flex items-center gap-2 border px-2.5 py-1.5">
            <span className="bg-accent h-[7px] w-[7px] shrink-0 rounded-full" />
            <span className="text-text text-xs tracking-[0.06em] uppercase">
              {t.freelanceBadge}
            </span>
          </div>

          <div className="mb-8 flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <span className="bg-accent h-0.5 w-3.5 shrink-0" />
              <span className="text-text text-xs tracking-[0.08em] uppercase">
                {t.fact1}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="bg-accent h-0.5 w-3.5 shrink-0" />
              <span className="text-text text-xs tracking-[0.08em] uppercase">
                {t.fact2}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.ctaGetInTouchSubject)}`}
              className="group bg-accent text-bg inline-flex items-center gap-1.5 px-4 py-2 text-sm font-extrabold no-underline transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:text-black hover:shadow-sm active:translate-y-0"
            >
              {t.ctaGetInTouch}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
            <a
              href="/gaston_ginestet_cv.pdf"
              download
              className="border-divider text-text hover:bg-text/[0.07] active:bg-text/[0.14] inline-flex items-center gap-1.5 border px-4 py-2 text-sm font-extrabold no-underline transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
            >
              {t.ctaDownloadCV}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
