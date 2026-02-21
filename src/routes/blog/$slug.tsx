import { createFileRoute, notFound } from "@tanstack/react-router"
import { formatDate } from "@/lib/utils"
import { getPostBySlug } from "@/lib/data/posts"

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug)
    if (!post) throw notFound()
    return post
  },
  component: ArticlePage,
})

function ArticlePage() {
  const post = Route.useLoaderData()

  return (
    <article className="min-h-screen pt-24 pb-20 px-6 max-w-3xl mx-auto">
      {/* Meta info */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-[#8899aa]">
          {formatDate(post.publishedAt)}
        </span>
        <span className="text-[#1e3a4a]">·</span>
        <span className="font-mono text-xs text-[#4dd9ac]">
          {post.readingTimeMin} min de leitura
        </span>
      </div>

      {/* Title */}
      <h1 className="font-display text-3xl md:text-5xl font-black text-[#e8dcc8] leading-tight mb-6">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="text-lg text-[#8899aa] border-l-2 border-[#c9a84c] pl-4 mb-8 italic leading-relaxed">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-[#1e3a4a]">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono bg-[#1e3a4a]/60 text-[#4dd9ac] rounded-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="prose-codex">
        {post.content.split("\n").map((line, i) => {
          if (line.startsWith("# "))
            return (
              <h1
                key={i}
                className="font-display text-2xl font-bold text-[#e8dcc8] mt-10 mb-4"
              >
                {line.slice(2)}
              </h1>
            )
          if (line.startsWith("## "))
            return (
              <h2
                key={i}
                className="font-display text-xl font-semibold text-[#c9a84c] mt-8 mb-3"
              >
                {line.slice(3)}
              </h2>
            )
          if (line.startsWith("- "))
            return (
              <li
                key={i}
                className="text-[#8899aa] ml-4 leading-relaxed list-disc"
              >
                {line.slice(2)}
              </li>
            )
          if (line.trim() === "") return <br key={i} />
          return (
            <p key={i} className="text-[#8899aa] leading-relaxed mb-2">
              {line}
            </p>
          )
        })}
      </div>
    </article>
  )
}
