import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "1",
    title: "Sharkar",
    description:
      "API REST para gerenciamento de análises e avistamentos de tubarões. Construída com foco em performance e escalabilidade.",
    tags: ["Go", "PostgreSQL", "REST API", "Docker"],
    repoUrl: "https://github.com/pvgrs/sharkar",
    featured: true,
    status: "active",
  },
  {
    id: "2",
    title: "Portfolio & Blog",
    description:
      "Site pessoal com blog e showcase de projetos. Primeira versão construída em Angular, agora reescrita em React com TanStack.",
    tags: ["React", "TanStack Router", "Tailwind CSS", "TypeScript"],
    repoUrl: "https://github.com/pvgrs/portfolio-project",
    featured: true,
    status: "active",
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
