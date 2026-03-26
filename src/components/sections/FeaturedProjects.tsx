import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { useFeaturedProjects } from "@/hooks/use-projects"

export function FeaturedProjects() {
  const { t } = useTranslation("landing")
  const { data: projects, isLoading } = useFeaturedProjects()

  return (
    <section id="projetos" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-xs text-biolum tracking-widest uppercase mb-2">
            <span className="text-witcher">//</span>{" "}
            {t("featuredProjects.pretitle")}
          </p>
          <h2 className="font-display text-3xl font-bold text-parchment">
            {t("featuredProjects.title")}
          </h2>
        </div>
        <Link
          to="/projects"
          className="text-sm text-fog hover:text-witcher transition-colors font-mono hidden sm:block"
        >
          {t("featuredProjects.viewAll")}
        </Link>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#1e3a4a] rounded-sm p-5 bg-deep h-48 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <div className="mt-6 sm:hidden text-center">
        <Link
          to="/projects"
          className="text-sm text-fog hover:text-witcher transition-colors font-mono"
        >
          {t("featuredProjects.viewAllMobile")}
        </Link>
      </div>
    </section>
  )
}
