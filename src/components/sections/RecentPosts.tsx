import { Link } from "@tanstack/react-router"
import { BlogCard } from "@/components/cards/BlogCard"
import { useRecentPosts } from "@/hooks/use-posts"

export function RecentPosts() {
  const { data: posts, isLoading } = useRecentPosts(3)

  return (
    <section id="blog" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-xs text-[#4dd9ac] tracking-widest uppercase mb-2">
            <span className="text-[#c9a84c]">//</span> as crônicas
          </p>
          <h2 className="font-display text-3xl font-bold text-[#e8dcc8]">
            Últimas Publicações
          </h2>
        </div>
        <Link
          to="/blog"
          className="text-sm text-[#8899aa] hover:text-[#c9a84c] transition-colors font-mono hidden sm:block"
        >
          ver todas →
        </Link>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#1e3a4a] rounded-sm p-5 bg-[#111827] h-40 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {posts?.map((post) => <BlogCard key={post.id} post={post} />)}
        </div>
      )}

      <div className="mt-6 sm:hidden text-center">
        <Link
          to="/blog"
          className="text-sm text-[#8899aa] hover:text-[#c9a84c] transition-colors font-mono"
        >
          ver todas as crônicas →
        </Link>
      </div>
    </section>
  )
}
