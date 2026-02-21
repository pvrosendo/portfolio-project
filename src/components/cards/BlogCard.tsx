import { Link } from "@tanstack/react-router"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group block border border-[#1e3a4a] rounded-sm p-5 bg-[#111827] hover:border-[#c9a84c] transition-all duration-200 hover:bg-[#111827]/80"
    >
      {/* Date and reading time */}
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-[#8899aa]">
          {formatDate(post.publishedAt)}
        </span>
        <span className="text-[#1e3a4a]">·</span>
        <span className="font-mono text-xs text-[#4dd9ac]">
          {post.readingTimeMin} min
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-[#e8dcc8] group-hover:text-[#c9a84c] transition-colors mb-2 leading-snug">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[#8899aa] text-sm leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono bg-[#1e3a4a]/60 text-[#4dd9ac] rounded-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
