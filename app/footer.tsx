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
          className="inline-flex h-8 items-center justify-center border-l border-divider px-3 text-xs font-bold text-text transition-colors duration-150 first:border-l-0 data-[checked=true]:text-bg"
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
          className="inline-flex h-8 w-9 items-center justify-center border-l border-divider text-text transition-colors duration-150 first:border-l-0 data-[checked=true]:text-bg"
        >
          <Icon className="h-[15px] w-[15px]" strokeWidth={2} />
        </button>
      ))}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto mt-16 flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t-2 border-divider px-5 py-5 min-[760px]:px-8">
      <span className="text-xs text-text/60">Welcome! · Bienvenido/a!</span>
      <div className="flex items-center gap-3">
        <div className="inline-flex overflow-hidden border border-divider">
          <LangSwitch />
        </div>
        <div className="inline-flex overflow-hidden border border-divider">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
