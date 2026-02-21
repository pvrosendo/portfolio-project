import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { BlogCard } from "@/components/cards/BlogCard"
import { usePosts } from "@/hooks/use-posts"

export const Route = createFileRoute("/blog/")({ component: BlogPage })

function BlogPage() {
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
        <p className="font-mono text-xs text-[#4dd9ac] tracking-widest uppercase mb-3">
          <span className="text-[#c9a84c]">//</span> as crônicas
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-black text-[#e8dcc8] mb-4">
          Arquivo de Crônicas
        </h1>
        <p className="text-[#8899aa] max-w-xl">
          Registros de tudo aquilo que aprendi, experimentei e construí ao
          longo da jornada.
        </p>
      </div>

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors ${
              activeTag === null
                ? "bg-[#c9a84c] text-[#0a0d14]"
                : "border border-[#1e3a4a] text-[#8899aa] hover:text-[#e8dcc8]"
            }`}
          >
            todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors ${
                activeTag === tag
                  ? "bg-[#c9a84c] text-[#0a0d14]"
                  : "border border-[#1e3a4a] text-[#8899aa] hover:text-[#e8dcc8]"
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
              className="border border-[#1e3a4a] rounded-sm p-5 bg-[#111827] h-44 animate-pulse"
            />
          ))}
        </div>
      ) : filtered && filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-[#8899aa] font-mono text-sm">
          Nenhuma crônica encontrada.
        </p>
      )}
    </div>
  )
}
