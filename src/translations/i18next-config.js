import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import globalES from './es/global_es.json'
import globalEN from './en/global_en.json'
import homeES from './es/home_es.json'
import homeEN from './en/home_en.json'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: ['Español', 'English'],
    interpolation: { escapeValue: false },
    returnObjects: 'true',
    resources: {
      Español: {
        global: globalES,
        home: homeES,
      },
      English: {
        global: globalEN,
        home: homeEN,
      },
    },
  })
