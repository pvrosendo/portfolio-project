import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import ptBRCommon from "@/locales/pt-BR/common.json"
import ptBRLanding from "@/locales/pt-BR/landing.json"
import ptBRBlog from "@/locales/pt-BR/blog.json"
import ptBRProjects from "@/locales/pt-BR/projects.json"

import enCommon from "@/locales/en/common.json"
import enLanding from "@/locales/en/landing.json"
import enBlog from "@/locales/en/blog.json"
import enProjects from "@/locales/en/projects.json"

export const defaultNS = "common"
export const supportedLanguages = ["pt-BR", "en"] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

export const resources = {
  "pt-BR": {
    common: ptBRCommon,
    landing: ptBRLanding,
    blog: ptBRBlog,
    projects: ptBRProjects,
  },
  en: {
    common: enCommon,
    landing: enLanding,
    blog: enBlog,
    projects: enProjects,
  },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt-BR",
    defaultNS,
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  })

export default i18n
