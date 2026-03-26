import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import {
  getPostBySlug,
  getRecentPosts,
  getPostsByLocale,
} from "@/lib/data/posts"
import type { Post, SupportedLocale } from "@/lib/types"

function useCurrentLocale(): SupportedLocale {
  const { i18n } = useTranslation()
  return (i18n.language as SupportedLocale) || "pt-BR"
}

export function usePosts() {
  const locale = useCurrentLocale()
  return useQuery<Post[]>({
    queryKey: ["posts", locale],
    queryFn: async () => getPostsByLocale(locale),
  })
}

export function useRecentPosts(count = 3) {
  const locale = useCurrentLocale()
  return useQuery<Post[]>({
    queryKey: ["posts", "recent", count, locale],
    queryFn: async () => getRecentPosts(count, locale),
  })
}

export function usePost(slug: string) {
  const locale = useCurrentLocale()
  return useQuery<Post | undefined>({
    queryKey: ["posts", slug, locale],
    queryFn: async () => getPostBySlug(slug, locale),
    enabled: !!slug,
  })
}
