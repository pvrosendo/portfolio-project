import { useQuery } from "@tanstack/react-query"
import { getPostBySlug, getRecentPosts, posts } from "@/lib/data/posts"
import type { Post } from "@/lib/types"

export function usePosts() {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => posts,
  })
}

export function useRecentPosts(count = 3) {
  return useQuery<Post[]>({
    queryKey: ["posts", "recent", count],
    queryFn: async () => getRecentPosts(count),
  })
}

export function usePost(slug: string) {
  return useQuery<Post | undefined>({
    queryKey: ["posts", slug],
    queryFn: async () => getPostBySlug(slug),
    enabled: !!slug,
  })
}
