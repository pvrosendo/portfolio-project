import { useQuery } from "@tanstack/react-query"
import { getFeaturedProjects, projects } from "@/lib/data/projects"
import type { Project } from "@/lib/types"

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => projects,
  })
}

export function useFeaturedProjects() {
  return useQuery<Project[]>({
    queryKey: ["projects", "featured"],
    queryFn: async () => getFeaturedProjects(),
  })
}
