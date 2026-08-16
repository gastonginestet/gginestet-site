'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { TRANSLATIONS, type Lang, type TranslationSet } from './translations'

const LANG_STORAGE_KEY = 'lang'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: TranslationSet
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY)
    if (stored === 'en' || stored === 'es') setLangState(stored)
  }, [])

  function setLang(next: Lang) {
    setLangState(next)
    window.localStorage.setItem(LANG_STORAGE_KEY, next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
