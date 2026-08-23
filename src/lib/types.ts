export type SupportedLocale = "pt-BR" | "en";

export type TagSlug =
	| "system-design"
	| "cloud"
	| "ai"
	| "backend"
	| "frontend"
	| "tools"
	| "hobby"
	| "core concepts"
	| "languages"
	| "database"
	| "observability"
	| "data-structures"
	| "authentication"
	| "books"
	| "games"
	| "reviews"
	| "sharks"
	| "others";

export interface Post {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	tags: TagSlug[];
	publishedAt: string;
	readingTimeMin: number;
	coverImage?: string;
	locale: SupportedLocale;
}

export interface Tag {
	slug: TagSlug;
	labels: Record<SupportedLocale, string>;
}
