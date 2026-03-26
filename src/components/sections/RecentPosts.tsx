import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { BlogCard } from "@/components/cards/BlogCard"
import { useRecentPosts } from "@/hooks/use-posts"

export function RecentPosts() {
  const { t } = useTranslation("landing")
  const { data: posts, isLoading } = useRecentPosts(3)

  return (
    <section id="blog" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-xs text-biolum tracking-widest uppercase mb-2">
            <span className="text-witcher">//</span> {t("recentPosts.pretitle")}
          </p>
          <h2 className="font-display text-3xl font-bold text-parchment">
            {t("recentPosts.title")}
          </h2>
        </div>
        <Link
          to="/blog"
          className="text-sm text-fog hover:text-witcher transition-colors font-mono hidden sm:block"
        >
          {t("recentPosts.viewAll")}
        </Link>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#1e3a4a] rounded-sm p-5 bg-deep h-40 animate-pulse"
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
          className="text-sm text-fog hover:text-witcher transition-colors font-mono"
        >
          {t("recentPosts.viewAllMobile")}
        </Link>
      </div>
    </section>
  )
}
