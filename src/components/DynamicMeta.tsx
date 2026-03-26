import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export function DynamicMeta() {
  const { t, i18n } = useTranslation("landing")

  useEffect(() => {
    document.title = t("meta.title")

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", t("meta.description"))
    }

    document.documentElement.lang = i18n.language || "pt-BR"
  }, [t, i18n.language])

  return null
}
