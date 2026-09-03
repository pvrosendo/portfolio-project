import type { Post, SupportedLocale } from "@/lib/types";

// en posts
import cdnContentEn from "./posts/en/cdn.md?raw";
import s3ContentEn from "./posts/en/hosting-site-s3.md?raw";
import messagingContentEn from "./posts/en/intro-to-messaging.md?raw";
import lbContentEn from "./posts/en/load-balancer.md?raw";
import sharkAnatomyContentEn from "./posts/en/shark-anatomy.md?raw";
import sharkBehaviorContentEn from "./posts/en/shark-behavior.md?raw";
import introSharksContentEn from "./posts/en/shark-environment-correlation.md?raw";
import sharkEvolutionContentEn from "./posts/en/shark-evolution-and-reproduction.md?raw";
import sharkSensesContentEn from "./posts/en/shark-senses.md?raw";
import sharkTaxonomyContentEn from "./posts/en/shark-taxonomy.md?raw";
import sharksAndHumansContentEn from "./posts/en/sharks-and-humans.md?raw";
import themesContentEn from "./posts/en/themes.md?raw";

// pt-BR posts
import sharkAnatomyContentPtBR from "./posts/pt-BR/anatomia-dos-tubaroes.md?raw";
import cdnContentPtBR from "./posts/pt-BR/cdn.md?raw";
import sharkBehaviorContentPtBR from "./posts/pt-BR/comportamento-dos-tubaroes.md?raw";
import sharkEvolutionContentPtBR from "./posts/pt-BR/evolucao-e-reproducao-dos-tubaroes.md?raw";
import s3ContentPtBR from "./posts/pt-BR/hospedando-site-s3.md?raw";
import messagingContentPtBR from "./posts/pt-BR/introducao-a-mensageria.md?raw";
import lbContentPtBR from "./posts/pt-BR/load-balancer.md?raw";
import sharkSensesContentPtBR from "./posts/pt-BR/sentidos-dos-tubaroes.md?raw";
import introSharksContentPtBR from "./posts/pt-BR/shark-environment-correlation.md?raw";
import sharkTaxonomyContentPtBR from "./posts/pt-BR/taxonomia-dos-tubaroes.md?raw";
import themesContentPtBR from "./posts/pt-BR/themes.md?raw";
import sharksAndHumansContentPtBR from "./posts/pt-BR/tubaroes-e-humanos.md?raw";

const postsPtBR: Post[] = [
	{
		id: "1",
		slug: "introducao-a-mensageria",
		title: "Introdução à Mensageria",
		excerpt:
			"Meus primeiros passos entendendo a importância da comunicação assíncrona entre sistemas.",
		content: messagingContentPtBR,
		tags: ["system-design", "backend"],
		publishedAt: "2025-06-25T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "pt-BR",
	},
	{
		id: "2",
		slug: "content-delivery-network",
		title: "CDN - Content Delivery Network",
		excerpt:
			"Entendendo como os sites chegam mais rápidos em diversos lugares diferentes.",
		content: cdnContentPtBR,
		tags: ["system-design", "backend"],
		publishedAt: "2025-07-02T00:00:00.000Z",
		readingTimeMin: 8,
		locale: "pt-BR",
	},
	{
		id: "3",
		slug: "hospedando-site-no-aws-s3",
		title: "Hospedando site no AWS S3",
		excerpt: "Hospedando um site no ar de maneira simples e direta.",
		content: s3ContentPtBR,
		tags: ["cloud"],
		publishedAt: "2025-07-10T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "pt-BR",
	},
	{
		id: "4",
		slug: "load-balancer",
		title: "Load Balancer (Balanceador de Carga)",
		excerpt: "Introdução bem legal sobre balanceamento de carga.",
		content: lbContentPtBR,
		tags: ["system-design", "backend"],
		publishedAt: "2025-07-12T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
	{
		id: "5",
		slug: "themes",
		title: "Recomendações de temas - VS Code",
		excerpt:
			"Temas que estou usando atualmente e outros que sugiro dar uma olhada.",
		content: themesContentPtBR,
		tags: ["tools"],
		publishedAt: "2026-03-02T00:00:00.000Z",
		readingTimeMin: 5,
		locale: "pt-BR",
	},
	{
		id: "6",
		slug: "intro-sharks",
		title: "Correlação do Ecossistema Marinho com os Tubarões",
		excerpt:
			"Dê uma olhada em como o ecossistema marinho impacta na vida dos tubarões.",
		content: introSharksContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-03-18T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
	{
		id: "7",
		slug: "anatomia-dos-tubaroes",
		title: "Anatomia dos Tubarões: O Predador Desossado",
		excerpt:
			"Como a cartilagem, dentes em esteira rolante e fígados gigantes cheios de óleo criaram predadores sem ossos imbatíveis.",
		content: sharkAnatomyContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-04-02T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "pt-BR",
	},
	{
		id: "8",
		slug: "sentidos-dos-tubaroes",
		title: "Os Sentidos dos Tubarões: Radar Vivo e Eletrorrecepção",
		excerpt:
			"Do olfato estéreo às ampolas de Lorenzini: como os tubarões enxergam, ouvem e sentem campos bioelétricos na escuridão do oceano.",
		content: sharkSensesContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-04-16T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
	{
		id: "9",
		slug: "comportamento-dos-tubaroes",
		title: "Comportamento dos Tubarões: Além do Mito da Máquina Assassina",
		excerpt:
			"Hierarquia social, curiosidade, cooperação e sono: desmontando de vez o mito de que tubarões são máquinas assassinas sem cérebro.",
		content: sharkBehaviorContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-04-30T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
	{
		id: "10",
		slug: "evolucao-e-reproducao-dos-tubaroes",
		title: "Evolução e Reprodução dos Tubarões: 450 Milhões de Anos no Topo",
		excerpt:
			"Mais antigos que as árvores e que os anéis de Saturno: entenda como a seleção K e 450 milhões de anos de evolução moldaram os tubarões.",
		content: sharkEvolutionContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-05-14T00:00:00.000Z",
		readingTimeMin: 6,
		locale: "pt-BR",
	},
	{
		id: "11",
		slug: "taxonomia-dos-tubaroes",
		title: "A Árvore Genealógica dos Tubarões: As 8 Ordens Explicadas",
		excerpt:
			"De relíquias do abismo com 7 guelras a gigantes filtradores: o guia completo para entender as 8 ordens viventes de tubarões.",
		content: sharkTaxonomyContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-05-28T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
	{
		id: "12",
		slug: "tubaroes-e-humanos",
		title: "Tubarões e Humanos: Estatísticas, Mitos e o Verdadeiro Predador",
		excerpt:
			"O que as estatísticas do ISAF realmente revelam sobre ataques, o impacto da histeria do filme Tubarão e a tragédia do shark finning.",
		content: sharksAndHumansContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-06-11T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
];

const postsEn: Post[] = [
	{
		id: "1",
		slug: "intro-to-messaging",
		title: "Introduction to Messaging",
		excerpt:
			"My first steps understanding the importance of asynchronous communication between systems.",
		content: messagingContentEn,
		tags: ["system-design", "backend"],
		publishedAt: "2025-06-25T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "en",
	},
	{
		id: "2",
		slug: "content-delivery-network",
		title: "CDN - Content Delivery Network",
		excerpt:
			"Understanding how websites load faster in different locations.",
		content: cdnContentEn,
		tags: ["system-design"],
		publishedAt: "2025-07-02T00:00:00.000Z",
		readingTimeMin: 8,
		locale: "en",
	},
	{
		id: "3",
		slug: "hosting-site-on-aws-s3",
		title: "Hosting a Website on AWS S3",
		excerpt: "Hosting a website in a simple and straightforward way.",
		content: s3ContentEn,
		tags: ["cloud"],
		publishedAt: "2025-07-10T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "en",
	},
	{
		id: "4",
		slug: "load-balancer",
		title: "Load Balancer",
		excerpt: "A nice introduction to load balancing.",
		content: lbContentEn,
		tags: ["system-design", "cloud", "backend"],
		publishedAt: "2025-07-12T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
	{
		id: "5",
		slug: "themes",
		title: "Theme Recommendations - VS Code",
		excerpt:
			"Themes I'm currently using and others I suggest checking out.",
		content: themesContentEn,
		tags: ["tools"],
		publishedAt: "2026-03-02T00:00:00.000Z",
		readingTimeMin: 5,
		locale: "en",
	},
	{
		id: "6",
		slug: "intro-sharks",
		title: "Marine Ecosystem Correlation with Sharks",
		excerpt: "Take a look at how the marine ecosystem impacts shark life.",
		content: introSharksContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-03-18T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
	{
		id: "7",
		slug: "shark-anatomy",
		title: "Shark Anatomy: The Boneless Predator",
		excerpt:
			"How cartilage, a conveyor belt of teeth, and giant oil-filled livers shaped boneless predators that rule the oceans.",
		content: sharkAnatomyContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-04-02T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "en",
	},
	{
		id: "8",
		slug: "shark-senses",
		title: "Shark Senses: Living Radar and Electroreception in the Ocean",
		excerpt:
			"From stereo smell to the ampullae of Lorenzini: how sharks track, hear, and feel micro-electric fields in the ocean.",
		content: sharkSensesContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-04-16T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
	{
		id: "9",
		slug: "shark-behavior",
		title: "Shark Behavior: Beyond the Brainless Killing Machine Myth",
		excerpt:
			"Social hierarchy, curiosity, cooperative hunting, and sleep: busting the myth that sharks are just mindless eating machines.",
		content: sharkBehaviorContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-04-30T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
	{
		id: "10",
		slug: "shark-evolution-and-reproduction",
		title: "Shark Evolution and Reproduction: 450 Million Years at the Top",
		excerpt:
			"Older than trees and Saturn's rings: how K-selected reproduction and 450 million years of evolution shaped modern sharks.",
		content: sharkEvolutionContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-05-14T00:00:00.000Z",
		readingTimeMin: 6,
		locale: "en",
	},
	{
		id: "11",
		slug: "shark-taxonomy",
		title: "The Shark Family Tree: All 8 Living Orders Explained",
		excerpt:
			"From seven-gilled deep-sea relicts to giant filter feeders: the ultimate breakdown of all 8 living shark orders.",
		content: sharkTaxonomyContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-05-28T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
	{
		id: "12",
		slug: "sharks-and-humans",
		title: "Sharks and Humans: Statistics, Myths, and the True Predator",
		excerpt:
			"What ISAF data actually tells us about shark encounters, the Jaws mass hysteria, and the silent massacre of shark finning.",
		content: sharksAndHumansContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-06-11T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
];

export const posts: Record<SupportedLocale, Post[]> = {
	"pt-BR": postsPtBR,
	en: postsEn,
};

export function getPostsByLocale(locale: SupportedLocale): Post[] {
	return posts[locale] ?? posts["pt-BR"];
}

export function getPostBySlug(
	slug: string,
	locale: SupportedLocale,
): Post | undefined {
	return getPostsByLocale(locale).find((p) => p.slug === slug);
}

export function getPostBySlugAnyLocale(slug: string): Post | undefined {
	return (
		postsPtBR.find((p) => p.slug === slug) ??
		postsEn.find((p) => p.slug === slug)
	);
}

export function getRecentPosts(count = 3, locale: SupportedLocale): Post[] {
	return [...getPostsByLocale(locale)]
		.sort(
			(a, b) =>
				new Date(b.publishedAt).getTime() -
				new Date(a.publishedAt).getTime(),
		)
		.slice(0, count);
}
