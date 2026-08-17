'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useLanguage } from './language-context'
import type { Lang } from './translations'

const THEME_OPTIONS = [
  { label: 'Light', id: 'light', icon: SunIcon },
  { label: 'Dark', id: 'dark', icon: MoonIcon },
  { label: 'System', id: 'system', icon: MonitorIcon },
]

const LANG_OPTIONS: { label: string; id: Lang }[] = [
  { label: 'EN', id: 'en' },
  { label: 'ES', id: 'es' },
]

function LangSwitch() {
  const { lang, setLang } = useLanguage()

  return (
    <AnimatedBackground
      className="bg-accent"
      defaultValue={lang}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setLang(id as Lang)
      }}
    >
      {LANG_OPTIONS.map(({ label, id }) => (
        <button
          key={id}
          data-id={id}
          type="button"
          aria-label={`Switch to ${label}`}
          className="border-divider text-text data-[checked=true]:text-bg inline-flex h-8 items-center justify-center border-l px-3 text-xs font-bold transition-colors duration-150 first:border-l-0"
        >
          {label}
        </button>
      ))}
    </AnimatedBackground>
  )
}

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="bg-accent"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEME_OPTIONS.map(({ label, id, icon: Icon }) => (
        <button
          key={id}
          data-id={id}
          type="button"
          aria-label={`Switch to ${label} theme`}
          className="border-divider text-text data-[checked=true]:text-bg inline-flex h-8 w-9 items-center justify-center border-l transition-colors duration-150 first:border-l-0"
        >
          <Icon className="h-[15px] w-[15px]" strokeWidth={2} />
        </button>
      ))}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="border-divider mx-auto mt-16 flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t-2 px-5 py-5 min-[760px]:px-8">
      <span className="text-text/60 text-xs">Welcome! · Bienvenido/a!</span>
      <div className="flex items-center gap-3">
        <div className="border-divider inline-flex overflow-hidden border">
          <LangSwitch />
        </div>
        <div className="border-divider inline-flex overflow-hidden border">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
