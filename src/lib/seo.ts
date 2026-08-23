import type { Post } from "@/lib/types";

// ─── Constants ────────────────────────────────────────────────────────────────

export const SITE_URL = "https://blog.pvrosendo.is-a.dev";
export const SITE_NAME = "O Códex";
export const SITE_AUTHOR = "Paulo Vitor Rosendo";
export const SITE_TWITTER = "@pvrosendo";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// ─── Types ────────────────────────────────────────────────────────────────────

interface MetaTag {
	name?: string;
	property?: string;
	content: string;
}

interface LinkTag {
	rel: string;
	href: string;
	hrefLang?: string;
}

// ─── Open Graph & Twitter ─────────────────────────────────────────────────────

export function buildOgMeta({
	title,
	description,
	url,
	image = DEFAULT_OG_IMAGE,
	type = "website",
}: {
	title: string;
	description: string;
	url: string;
	image?: string;
	type?: "website" | "article";
}): MetaTag[] {
	return [
		{ property: "og:type", content: type },
		{ property: "og:site_name", content: SITE_NAME },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:image", content: image },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:locale", content: "pt_BR" },
		{ property: "og:locale:alternate", content: "en_US" },
	];
}

export function buildTwitterMeta({
	title,
	description,
	image = DEFAULT_OG_IMAGE,
}: {
	title: string;
	description: string;
	image?: string;
}): MetaTag[] {
	return [
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:site", content: SITE_TWITTER },
		{ name: "twitter:creator", content: SITE_TWITTER },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
	];
}

// ─── Canonical & hreflang ─────────────────────────────────────────────────────

export function buildCanonicalLink(path: string): LinkTag {
	return { rel: "canonical", href: `${SITE_URL}${path}` };
}

export function buildHreflangLinks(path: string): LinkTag[] {
	const url = `${SITE_URL}${path}`;
	return [
		{ rel: "alternate", hrefLang: "x-default", href: url },
		{ rel: "alternate", hrefLang: "pt-BR", href: url },
		{ rel: "alternate", hrefLang: "en", href: url },
	];
}

// ─── SEO Head Builder (combines all) ─────────────────────────────────────────

export function buildPageHead({
	title,
	description,
	path,
	image,
	type = "website",
}: {
	title: string;
	description: string;
	path: string;
	image?: string;
	type?: "website" | "article";
}) {
	const url = `${SITE_URL}${path}`;
	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			...buildOgMeta({ title, description, url, image, type }),
			...buildTwitterMeta({ title, description, image }),
		],
		links: [buildCanonicalLink(path), ...buildHreflangLinks(path)],
	};
}

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

export function buildPersonWebsiteJsonLd() {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": `${SITE_URL}/#person`,
				name: SITE_AUTHOR,
				alternateName: "pvrosendo",
				url: SITE_URL,
				sameAs: [
					"https://github.com/pvrosendo",
					"https://linkedin.com/in/paulo-vitor-rosendo/",
				],
				jobTitle: "Software Developer",
				knowsAbout: [
					"Software Engineering",
					"Web Development",
					"Cloud Infrastructure",
					"Embedded Systems",
				],
			},
			{
				"@type": "Blog",
				"@id": `${SITE_URL}/#blog`,
				url: SITE_URL,
				name: SITE_NAME,
				description:
					"O Códex — Blog técnico sobre engenharia de software. Explorando as profundezas do desenvolvimento.",
				author: { "@id": `${SITE_URL}/#person` },
				inLanguage: ["pt-BR", "en"],
			},
		],
	});
}

export function buildBlogPostingJsonLd(post: Post) {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.excerpt,
		datePublished: post.publishedAt,
		dateModified: post.publishedAt,
		author: {
			"@type": "Person",
			"@id": `${SITE_URL}/#person`,
			name: SITE_AUTHOR,
		},
		publisher: {
			"@type": "Person",
			"@id": `${SITE_URL}/#person`,
			name: SITE_AUTHOR,
		},
		url: `${SITE_URL}/blog/${post.slug}`,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${SITE_URL}/blog/${post.slug}`,
		},
		keywords: post.tags.join(", "),
		timeRequired: `PT${post.readingTimeMin}M`,
		inLanguage: post.locale === "pt-BR" ? "pt-BR" : "en",
		...(post.coverImage
			? { image: post.coverImage }
			: { image: DEFAULT_OG_IMAGE }),
	});
}
