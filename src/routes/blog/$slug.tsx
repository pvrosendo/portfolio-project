import { createFileRoute, notFound } from "@tanstack/react-router";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";
import { getPostBySlug } from "@/lib/data/posts";
import i18n from "@/lib/i18n";
import { buildBlogPostingJsonLd, buildPageHead } from "@/lib/seo";
import type { SupportedLocale } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const locale = (i18n.language as SupportedLocale) || "pt-BR";
		const post = getPostBySlug(params.slug, locale);
		if (!post) throw notFound();
		return post;
	},
	head: ({ loaderData: post }) => {
		if (!post) return {};
		const { meta, links } = buildPageHead({
			title: `${post.title} · Paulo Vitor`,
			description: post.excerpt,
			path: `/blog/${post.slug}`,
			image: post.coverImage,
			type: "article",
		});
		return {
			meta: [
				...meta,
				{
					property: "article:published_time",
					content: post.publishedAt,
				},
				{ property: "article:author", content: "Paulo Vitor Rosendo" },
				...post.tags.map((tag) => ({
					property: "article:tag",
					content: tag,
				})),
			],
			links,
			scripts: [
				{
					type: "application/ld+json",
					children: buildBlogPostingJsonLd(post),
				},
			],
		};
	},
	component: ArticlePage,
});

function ArticlePage() {
	const post = Route.useLoaderData();

	return (
		<article className="min-h-screen pt-24 pb-20 px-6 max-w-3xl mx-auto">
			<header>
				{/* Meta info */}
				<div className="flex items-center gap-3 mb-6">
					<time
						dateTime={post.publishedAt}
						className="font-mono text-xs text-fog"
					>
						{formatDate(post.publishedAt)}
					</time>
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
			</header>

			{/* Content */}
			<MarkdownContent content={post.content} />
		</article>
	);
}
