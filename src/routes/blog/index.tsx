import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BlogCard } from "@/components/cards/BlogCard";
import { usePosts } from "@/hooks/use-posts";
import { TAGS } from "@/lib/data/tags";
import { buildPageHead } from "@/lib/seo";
import type { SupportedLocale, TagSlug } from "@/lib/types";

export const Route = createFileRoute("/blog/")({
	head: () => {
		const { meta, links } = buildPageHead({
			title: "As Crônicas · Paulo Vitor",
			description:
				"Registros de tudo aquilo que aprendi, experimentei e construí ao longo da jornada. Arquitetura, cloud, web e além.",
			path: "/blog",
		});
		return { meta, links };
	},
	component: BlogPage,
});

function BlogPage() {
	const { t, i18n } = useTranslation("blog");
	const locale = i18n.language as SupportedLocale;
	const { data: posts, isLoading } = usePosts();
	const [activeTag, setActiveTag] = useState<TagSlug | null>(null);

	const activeSlugs = new Set(posts?.flatMap((p) => p.tags) ?? []);
	const filtered = activeTag
		? posts?.filter((p) => p.tags.includes(activeTag))
		: posts;

	return (
		<section
			aria-label={t("title")}
			className="min-h-screen pt-24 pb-20 px-6 max-w-5xl mx-auto"
		>
			{/* Header */}
			<div className="mb-12">
				<p className="font-mono text-xs text-biolum tracking-widest uppercase mb-3">
					<span className="text-witcher">{"//"}</span> {t("pretitle")}
				</p>
				<h1 className="font-display text-4xl md:text-5xl font-black text-parchment mb-4">
					{t("title")}
				</h1>
				<p className="text-fog max-w-xl">{t("description")}</p>
			</div>

			{/* Tags Filter */}
			<fieldset
				className="flex flex-wrap gap-2 mb-10 border-none p-0 m-0"
				aria-label="Filtrar por tag"
			>
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
				{TAGS.map((tag) => {
					const isDisabled = !activeSlugs.has(tag.slug);
					return (
						<button
							key={tag.slug}
							type="button"
							disabled={isDisabled}
							onClick={() =>
								!isDisabled && setActiveTag(tag.slug)
							}
							className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors ${
								activeTag === tag.slug
									? "bg-witcher text-abyss"
									: isDisabled
										? "border border-[#1e3a4a] text-fog/40 cursor-not-allowed"
										: "border border-[#1e3a4a] text-fog hover:text-parchment"
							}`}
						>
							#{tag.labels[locale]}
						</button>
					);
				})}
			</fieldset>

			{/* Posts list */}
			{isLoading ? (
				<div
					className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
					aria-busy="true"
				>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton placeholders with no reordering
							key={i}
							className="border border-[#1e3a4a] rounded-sm p-5 bg-deep h-44 animate-pulse"
						/>
					))}
				</div>
			) : filtered && filtered.length > 0 ? (
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
		</section>
	);
}
