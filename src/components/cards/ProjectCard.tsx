import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/types"

const statusConfig = {
  active: { label: "Ativo", color: "text-[#4dd9ac] bg-[#4dd9ac]/10" },
  "in-progress": {
    label: "Em progresso",
    color: "text-[#c9a84c] bg-[#c9a84c]/10",
  },
  archived: { label: "Arquivado", color: "text-[#8899aa] bg-[#8899aa]/10" },
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status]

  return (
    <div className="group border border-[#1e3a4a] rounded-sm p-5 bg-[#111827] hover:border-[#c9a84c]/50 transition-all duration-200 flex flex-col gap-4">
      {/* Cabeçalho */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-[#e8dcc8] group-hover:text-[#c9a84c] transition-colors leading-snug">
          {project.title}
        </h3>
        <span
          className={cn(
            "shrink-0 px-2 py-0.5 text-xs font-mono rounded-sm",
            status.color,
          )}
        >
          {status.label}
        </span>
      </div>

      {/* Descrição */}
      <p className="text-[#8899aa] text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags de tecnologia */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono bg-[#1e3a4a]/60 text-[#8899aa] rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-1 border-t border-[#1e3a4a]">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#8899aa] hover:text-[#c9a84c] transition-colors"
            aria-label={`Repositório de ${project.title}`}
          >
            <Github size={14} />
            <span>Repositório</span>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#8899aa] hover:text-[#4dd9ac] transition-colors"
            aria-label={`Demo de ${project.title}`}
          >
            <ExternalLink size={14} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  )
}
