export type SupportedLocale = "pt-BR" | "en";

export interface Post {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	tags: string[];
	publishedAt: string;
	readingTimeMin: number;
	coverImage?: string;
	locale: SupportedLocale;
}

export interface Tag {
	label: string;
	slug: string;
}
