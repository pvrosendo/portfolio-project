import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "1",
    title: "Learn Sharks",
    description:
      "Site interativo para descobrir mais sobre os tubarões.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Canvas 2D"],
    demoUrl: "https://learn-sharks.vercel.app/",
    featured: true,
    status: "active",
  },
  {
    id: "2",
    title: "Preferred car",
    description:
      "Solução moderna e intuitiva para monitoramento de carros.",
    tags: ["React", "TanStack", "Tailwind CSS", "TypeScript", "Go", "MongoDB"],
    //demoUrl: "https://www.sharkar-pv.com/",
    featured: true,
    status: "in-progress",
  },
  {
    id: "3",
    title: "Portfolio & Blog v2",
    description:
      "Segunda versão do site pessoal. Agora reescrita em React com TanStack.",
    tags: ["React", "TanStack", "Tailwind CSS", "TypeScript"],
    repoUrl: "https://github.com/pvrosendo/portfolio-project",
    demoUrl: "https://pvrosendo.is-a.dev/",
    featured: true,
    status: "active",
  },
  {
    id: "4",
    title: "Portfolio & Blog v1",
    description:
      "Site pessoal com blog e projetos. Primeira versão construída em Angular.",
    tags: ["Angular", "TypeScript", "Bootstrap"],
    repoUrl: "https://github.com/pvrosendo/blog-and-portfolio",
    featured: true,
    status: "archived",
  },
  {
    id: "5",
    title: "Materials Visor",
    description:
      "Projeto de monitoração do envelhecimento de materiais através de quadros de artísticos.",
    tags: ["C++", "ESP32", "Arduino", "Arduino Framework"],
    repoUrl: "https://github.com/pvrosendo/monitoracao-de-materiais",
    featured: true,
    status: "active",
  },
  {
    id: "6",
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
