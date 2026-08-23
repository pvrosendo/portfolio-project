import type { SupportedLocale, Tag, TagSlug } from "@/lib/types";

export const TAGS: Tag[] = [
	{
		slug: "system-design",
		labels: { "pt-BR": "System Design", en: "System Design" },
	},
	{
		slug: "cloud",
		labels: { "pt-BR": "Cloud", en: "Cloud" },
	},
	{
		slug: "ai",
		labels: { "pt-BR": "IA", en: "AI" },
	},
	{
		slug: "backend",
		labels: { "pt-BR": "Back-end", en: "Back-end" },
	},
	{
		slug: "frontend",
		labels: { "pt-BR": "Front-end", en: "Front-end" },
	},
	{
		slug: "tools",
		labels: { "pt-BR": "Tools", en: "Tools" },
	},
	{
		slug: "hobby",
		labels: { "pt-BR": "Hobby", en: "Hobby" },
	},
	{
		slug: "core concepts",
		labels: { "pt-BR": "Fundamentos", en: "Core Concepts" },
	},
	{
		slug: "languages",
		labels: { "pt-BR": "Linguagens", en: "Languages" },
	},
	{
		slug: "database",
		labels: { "pt-BR": "Banco de Dados", en: "Database" },
	},
	{
		slug: "observability",
		labels: { "pt-BR": "Observabilidade", en: "Observability" },
	},
	{
		slug: "data-structures",
		labels: { "pt-BR": "Estruturas de Dados", en: "Data Structures" },
	},
	{
		slug: "authentication",
		labels: { "pt-BR": "Autenticação", en: "Authentication" },
	},
	{
		slug: "books",
		labels: { "pt-BR": "Livros", en: "Books" },
	},
	{
		slug: "games",
		labels: { "pt-BR": "Jogos", en: "Games" },
	},
	{
		slug: "reviews",
		labels: { "pt-BR": "Reviews", en: "Reviews" },
	},
	{
		slug: "sharks",
		labels: { "pt-BR": "Tubarões", en: "Sharks" },
	},
	{
		slug: "others",
		labels: { "pt-BR": "Outros", en: "Others" },
	},
];

export function getTagBySlug(slug: TagSlug): Tag | undefined {
	return TAGS.find((t) => t.slug === slug);
}

export function getTagLabel(slug: TagSlug, locale: SupportedLocale): string {
	return getTagBySlug(slug)?.labels[locale] ?? slug;
}
