import { createFileRoute, notFound } from "@tanstack/react-router"
import { formatDate } from "@/lib/utils"
import { getPostBySlug } from "@/lib/data/posts"
import { MarkdownContent } from "@/components/markdown/MarkdownContent"
import i18n from "@/lib/i18n"
import type { SupportedLocale } from "@/lib/types"

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const locale = (i18n.language as SupportedLocale) || "pt-BR"
    const post = getPostBySlug(params.slug, locale)
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
        <span className="font-mono text-xs text-fog">
          {formatDate(post.publishedAt)}
        </span>
        <span className="text-[#1e3a4a]">·</span>
        <span className="font-mono text-xs text-biolum">
          {post.readingTimeMin} min de leitura
        </span>
      </div>

      {/* Title */}
      <h1 className="font-display text-3xl md:text-5xl font-black text-parchment leading-tight mb-6">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="text-lg text-fog border-l-2 border-witcher pl-4 mb-8 italic leading-relaxed">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-[#1e3a4a]">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono bg-[#1e3a4a]/60 text-biolum rounded-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <MarkdownContent content={post.content} />
    </article>
  )
}
