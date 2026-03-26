import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { useProjects } from "@/hooks/use-projects"
import type { Project } from "@/lib/types"

export const Route = createFileRoute("/projects/")({ component: ProjectsPage })

function ProjectsPage() {
  const { t } = useTranslation("projects")
  const { data: projects, isLoading } = useProjects()
  const [activeStatus, setActiveStatus] = useState<Project["status"] | null>(
    null,
  )

  const statusKeys: Project["status"][] = ["active", "in-progress", "archived"]

  const filtered = activeStatus
    ? projects?.filter((p) => p.status === activeStatus)
    : projects

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs text-biolum tracking-widest uppercase mb-3">
          <span className="text-witcher">//</span> {t("pretitle")}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-black text-parchment mb-4">
          {t("title")}
        </h1>
        <p className="text-fog max-w-xl">{t("description")}</p>
      </div>

      {/* Status filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          type="button"
          onClick={() => setActiveStatus(null)}
          className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors ${
            activeStatus === null
              ? "bg-witcher text-abyss"
              : "border border-[#1e3a4a] text-fog hover:text-parchment"
          }`}
        >
          {t("filterAll")}
        </button>
        {statusKeys.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setActiveStatus(status)}
            className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors ${
              activeStatus === status
                ? "bg-witcher text-abyss"
                : "border border-[#1e3a4a] text-fog hover:text-parchment"
            }`}
          >
            {t(`status.${status}`)}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#1e3a4a] rounded-sm p-5 bg-deep h-48 animate-pulse"
            />
          ))}
        </div>
      ) : filtered && filtered.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-fog font-mono text-sm">{t("noResults")}</p>
      )}
    </div>
  )
}
