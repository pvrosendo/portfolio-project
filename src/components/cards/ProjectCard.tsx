import { ExternalLink, Github } from "lucide-react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation("projects")

  const statusColors: Record<Project["status"], string> = {
    active: "text-[#4dd9ac] bg-[#4dd9ac]/10",
    "in-progress": "text-[#c9a84c] bg-[#c9a84c]/10",
    archived: "text-[#8899aa] bg-[#8899aa]/10",
  }

  return (
    <div className="group border border-[#1e3a4a] rounded-sm p-5 bg-deep hover:border-witcher/50 transition-all duration-200 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-parchment group-hover:text-witcher transition-colors leading-snug">
          {project.title}
        </h3>
        <span
          className={cn(
            "shrink-0 px-2 py-0.5 text-xs font-mono rounded-sm",
            statusColors[project.status],
          )}
        >
          {t(`status.${project.status}`)}
        </span>
      </div>

      {/* Description */}
      <p className="text-fog text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono bg-[#1e3a4a]/60 text-fog rounded-sm"
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
            className="flex items-center gap-1.5 text-xs text-fog hover:text-witcher transition-colors"
            aria-label={`${t("repository")} - ${project.title}`}
          >
            <Github size={14} />
            <span>{t("repository")}</span>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-fog hover:text-biolum transition-colors"
            aria-label={`${t("demo")} - ${project.title}`}
          >
            <ExternalLink size={14} />
            <span>{t("demo")}</span>
          </a>
        )}
      </div>
    </div>
  )
}
