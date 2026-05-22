import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { languageOptions, translations } from './translations'

const defaultLanguage = 'ka'
const storageKey = 'undergroundgym-language'
const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const savedLanguage = window.localStorage.getItem(storageKey)

  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage
  }

  return defaultLanguage
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    const option = languageOptions.find((item) => item.code === language)

    document.documentElement.lang = option?.htmlLang || language
    window.localStorage.setItem(storageKey, language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages: languageOptions,
      t: translations[language] || translations[defaultLanguage],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
