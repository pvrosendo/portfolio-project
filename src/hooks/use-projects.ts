import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { getFeaturedProjects, getProjectsByLocale } from "@/lib/data/projects"
import type { Project, SupportedLocale } from "@/lib/types"

function useCurrentLocale(): SupportedLocale {
  const { i18n } = useTranslation()
  return (i18n.language as SupportedLocale) || "pt-BR"
}

export function useProjects() {
  const locale = useCurrentLocale()
  return useQuery<Project[]>({
    queryKey: ["projects", locale],
    queryFn: async () => getProjectsByLocale(locale),
  })
}

export function useFeaturedProjects() {
  const locale = useCurrentLocale()
  return useQuery<Project[]>({
    queryKey: ["projects", "featured", locale],
    queryFn: async () => getFeaturedProjects(locale),
  })
}

