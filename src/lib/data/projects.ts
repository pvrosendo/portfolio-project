import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "1",
    title: "Sharkar",
    description:
      "Solução moderna e intuitiva para monitoramento de carros.",
    tags: ["React", "Go", "PostgreSQL", "Docker"],
    demoUrl: "https://www.sharkar-pv.com/",
    featured: true,
    status: "in-progress",
  },
  {
    id: "2",
    title: "Portfolio & Blog v2",
    description:
      "Segunda versão do site pessoal. Agora reescrita em React com TanStack.",
    tags: ["React", "TanStack Router", "Tailwind CSS", "TypeScript"],
    repoUrl: "https://github.com/pvrosendo/portfolio-project",
    demoUrl: "https://pvrosendo.is-a.dev/",
    featured: true,
    status: "active",
  },
  { //TODO: add in github.io and link here
    id: "3",
    title: "Portfolio & Blog v1",
    description:
      "Site pessoal com blog e projetos. Primeira versão construída em Angular.",
    tags: ["Angular", "TypeScript", "Bootstrap"],
    repoUrl: "https://github.com/pvrosendo/blog-and-portfolio",
    featured: true,
    status: "active",
  },
  {
    id: "4",
    title: "Monitoração de Materiais",
    description:
      "Projeto de monitoração do envelhecimento de materiais através de quadros de artísticos.",
    tags: ["C++", "ESP32", "Arduino", "Arduino Framework"],
    repoUrl: "https://github.com/pvrosendo/monitoracao-de-materiais",
    featured: true,
    status: "active",
  },
  {
    id: "5",
    title: "Wokwi ESP32 Projects",
    description:
      "Simulações de projetos ESP32 no Wokwi.",
    tags: ["Wokwi", "ESP32", "Arduino"],
    repoUrl: "https://github.com/pvrosendo/wokwi-projects",
    featured: true,
    status: "active",
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
