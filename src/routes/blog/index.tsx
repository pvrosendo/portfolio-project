import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { BlogCard } from "@/components/cards/BlogCard"
import { usePosts } from "@/hooks/use-posts"

export const Route = createFileRoute("/blog/")({ component: BlogPage })

function BlogPage() {
  const { t } = useTranslation("blog")
  const { data: posts, isLoading } = usePosts()
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = [...new Set(posts?.flatMap((p) => p.tags) ?? [])]
  const filtered = activeTag
    ? posts?.filter((p) => p.tags.includes(activeTag))
    : posts

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

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors ${
              activeTag === null
                ? "bg-witcher text-abyss"
                : "border border-[#1e3a4a] text-fog hover:text-parchment"
            }`}
          >
            {t("filterAll")}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors ${
                activeTag === tag
                  ? "bg-witcher text-abyss"
                  : "border border-[#1e3a4a] text-fog hover:text-parchment"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      {/* Posts list */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#1e3a4a] rounded-sm p-5 bg-deep h-44 animate-pulse"
            />
          ))}
        </div>
      ) : filtered && filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered
            .map((post) => <BlogCard key={post.id} post={post} />)
            .sort(
              (a, b) =>
                new Date(b.props.post.publishedAt).getTime() -
                new Date(a.props.post.publishedAt).getTime(),
            )}
        </div>
      ) : (
        <p className="text-fog font-mono text-sm">{t("noResults")}</p>
      )}
    </div>
  )
}
