import type { Post, SupportedLocale } from "@/lib/types";

// en posts
import battleRoyaleContentEn from "./posts/en/battle-royale.md?raw";
import carrieContentEn from "./posts/en/carrie.md?raw";
import cdnContentEn from "./posts/en/cdn.md?raw";
import fullDarkContentEn from "./posts/en/full-dark-no-stars.md?raw";
import s3ContentEn from "./posts/en/hosting-site-s3.md?raw";
import messagingContentEn from "./posts/en/intro-to-messaging.md?raw";
import itContentEn from "./posts/en/it.md?raw";
import lbContentEn from "./posts/en/load-balancer.md?raw";
import planetOfTheApesContentEn from "./posts/en/planet-of-the-apes.md?raw";
import sharkAnatomyContentEn from "./posts/en/shark-anatomy.md?raw";
import sharkBehaviorContentEn from "./posts/en/shark-behavior.md?raw";
import introSharksContentEn from "./posts/en/shark-environment-correlation.md?raw";
import sharkEvolutionContentEn from "./posts/en/shark-evolution-and-reproduction.md?raw";
import sharkSensesContentEn from "./posts/en/shark-senses.md?raw";
import sharkTaxonomyContentEn from "./posts/en/shark-taxonomy.md?raw";
import sharksAndHumansContentEn from "./posts/en/sharks-and-humans.md?raw";
import godfatherContentEn from "./posts/en/the-godfather.md?raw";
import longWalkContentEn from "./posts/en/the-long-walk.md?raw";
import themesContentEn from "./posts/en/themes.md?raw";

// pt-BR posts
import longWalkContentPtBR from "./posts/pt-BR/a-longa-marcha.md?raw";
import sharkAnatomyContentPtBR from "./posts/pt-BR/anatomia-dos-tubaroes.md?raw";
import battleRoyaleContentPtBR from "./posts/pt-BR/battle-royale.md?raw";
import carrieContentPtBR from "./posts/pt-BR/carrie.md?raw";
import cdnContentPtBR from "./posts/pt-BR/cdn.md?raw";
import sharkBehaviorContentPtBR from "./posts/pt-BR/comportamento-dos-tubaroes.md?raw";
import fullDarkContentPtBR from "./posts/pt-BR/escuridao-total-sem-estrelas.md?raw";
import sharkEvolutionContentPtBR from "./posts/pt-BR/evolucao-e-reproducao-dos-tubaroes.md?raw";
import s3ContentPtBR from "./posts/pt-BR/hospedando-site-s3.md?raw";
import messagingContentPtBR from "./posts/pt-BR/introducao-a-mensageria.md?raw";
import itContentPtBR from "./posts/pt-BR/it-a-coisa.md?raw";
import lbContentPtBR from "./posts/pt-BR/load-balancer.md?raw";
import planetOfTheApesContentPtBR from "./posts/pt-BR/o-planeta-dos-macacos.md?raw";
import godfatherContentPtBR from "./posts/pt-BR/o-poderoso-chefao.md?raw";
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
		slug: "it-a-coisa",
		title: "It: A Coisa — O Mal Sob a Superfície de Derry",
		excerpt:
			"Do terror clássico de monstro à odisseia sobre infância, amizade e o peso da memória: minha experiência lendo o calhamaço do King.",
		content: itContentPtBR,
		tags: ["books", "hobby"],
		publishedAt: "2025-08-17T00:00:00.000Z",
		readingTimeMin: 9,
		locale: "pt-BR",
	},
	{
		id: "6",
		slug: "escuridao-total-sem-estrelas",
		title: "Escuridão Total sem Estrelas — Os Limites da Moral Humana",
		excerpt:
			"Quatro novelas viscerais e perturbadoras explorando o que existe de mais sombrio e cruel no ser humano, sem fantasias.",
		content: fullDarkContentPtBR,
		tags: ["books", "hobby"],
		publishedAt: "2025-09-09T00:00:00.000Z",
		readingTimeMin: 21,
		locale: "pt-BR",
	},
	{
		id: "7",
		slug: "a-longa-marcha",
		title: "A Longa Marcha — O Desgaste Psicológico Passo a Passo",
		excerpt:
			"Cem garotos caminhando sem parar até a morte: como uma premissa simples sustenta uma das leituras mais tensas e sufocantes do autor.",
		content: longWalkContentPtBR,
		tags: ["books", "hobby"],
		publishedAt: "2025-10-12T00:00:00.000Z",
		readingTimeMin: 9,
		locale: "pt-BR",
	},
	{
		id: "8",
		slug: "carrie",
		title: "Carrie — Fanatismo Religioso e a Destruição de Uma Cidade",
		excerpt:
			"Estrutura documental impecável, abuso doméstico sufocante e uma explosão de caos que varreu muito mais do que um baile de formatura.",
		content: carrieContentPtBR,
		tags: ["books", "hobby"],
		publishedAt: "2025-11-16T00:00:00.000Z",
		readingTimeMin: 8,
		locale: "pt-BR",
	},
	{
		id: "9",
		slug: "o-planeta-dos-macacos",
		title: "O Planeta dos Macacos — A Sátira Científica e o Duplo Choque",
		excerpt:
			"Uma sátira brilhante à soberba humana, a comodidade que emburrece e um dos desfechos mais geniais da história da ficção científica.",
		content: planetOfTheApesContentPtBR,
		tags: ["books", "hobby"],
		publishedAt: "2026-01-20T00:00:00.000Z",
		readingTimeMin: 8,
		locale: "pt-BR",
	},
	{
		id: "10",
		slug: "battle-royale",
		title: "Battle Royale — Brutalidade, Romance e Sobrevivência Sem Freio",
		excerpt:
			"Quarenta e dois alunos forçados a lutar até a morte em uma ilha: ritmo frenético, paranoia destrutiva e sobrevivência sem freio.",
		content: battleRoyaleContentPtBR,
		tags: ["books", "hobby"],
		publishedAt: "2026-02-14T00:00:00.000Z",
		readingTimeMin: 8,
		locale: "pt-BR",
	},
	{
		id: "11",
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
		id: "12",
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
		id: "13",
		slug: "o-poderoso-chefao",
		title: "O Poderoso Chefão — Sangue, Honra e a Teia dos Corleone",
		excerpt:
			"Lendo o clássico de Mario Puzo totalmente às cegas: alternâncias temporais ricas, o submundo da máfia e a corrupção trágica de uma alma.",
		content: godfatherContentPtBR,
		tags: ["books", "hobby"],
		publishedAt: "2026-04-06T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "pt-BR",
	},
	{
		id: "14",
		slug: "anatomia-dos-tubaroes",
		title: "Anatomia dos Tubarões: O Predador Desossado",
		excerpt:
			"Como a cartilagem, dentes em esteira rolante e fígados gigantes cheios de óleo criaram predadores sem ossos imbatíveis.",
		content: sharkAnatomyContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-04-24T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "pt-BR",
	},
	{
		id: "15",
		slug: "sentidos-dos-tubaroes",
		title: "Os Sentidos dos Tubarões: Radar Vivo e Eletrorrecepção",
		excerpt:
			"Do olfato estéreo às ampolas de Lorenzini: como os tubarões enxergam, ouvem e sentem campos bioelétricos na escuridão do oceano.",
		content: sharkSensesContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-05-13T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
	{
		id: "16",
		slug: "comportamento-dos-tubaroes",
		title: "Comportamento dos Tubarões: Além do Mito da Máquina Assassina",
		excerpt:
			"Hierarquia social, curiosidade, cooperação e sono: desmontando de vez o mito de que tubarões são máquinas assassinas sem cérebro.",
		content: sharkBehaviorContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-06-02T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
	{
		id: "17",
		slug: "evolucao-e-reproducao-dos-tubaroes",
		title: "Evolução e Reprodução dos Tubarões: 450 Milhões de Anos no Topo",
		excerpt:
			"Mais antigos que as árvores e que os anéis de Saturno: entenda como a seleção K e 450 milhões de anos de evolução moldaram os tubarões.",
		content: sharkEvolutionContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-06-21T00:00:00.000Z",
		readingTimeMin: 6,
		locale: "pt-BR",
	},
	{
		id: "18",
		slug: "taxonomia-dos-tubaroes",
		title: "A Árvore Genealógica dos Tubarões: As 8 Ordens Explicadas",
		excerpt:
			"De relíquias do abismo com 7 guelras a gigantes filtradores: o guia completo para entender as 8 ordens viventes de tubarões.",
		content: sharkTaxonomyContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-07-16T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "pt-BR",
	},
	{
		id: "19",
		slug: "tubaroes-e-humanos",
		title: "Tubarões e Humanos: Estatísticas, Mitos e o Verdadeiro Predador",
		excerpt:
			"O que as estatísticas do ISAF realmente revelam sobre ataques, o impacto da histeria do filme Tubarão e a tragédia do shark finning.",
		content: sharksAndHumansContentPtBR,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-08-08T00:00:00.000Z",
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
		slug: "it",
		title: "It — The Evil Lurking Beneath Derry",
		excerpt:
			"From classic monster terror to an epic odyssey about childhood, friendship, and memory: my experience with King's massive tome.",
		content: itContentEn,
		tags: ["books", "hobby"],
		publishedAt: "2025-08-17T00:00:00.000Z",
		readingTimeMin: 9,
		locale: "en",
	},
	{
		id: "6",
		slug: "full-dark-no-stars",
		title: "Full Dark, No Stars — The Fringes of Human Morality",
		excerpt:
			"Four visceral, deeply unsettling novellas confronting the darkest and cruelest corners of human nature without supernatural filters.",
		content: fullDarkContentEn,
		tags: ["books", "hobby"],
		publishedAt: "2025-09-09T00:00:00.000Z",
		readingTimeMin: 21,
		locale: "en",
	},
	{
		id: "7",
		slug: "the-long-walk",
		title: "The Long Walk — The Psychological Toll, Step by Step",
		excerpt:
			"One hundred boys walking without stopping until only one lives: how a simple premise delivers one of King's most gripping reads.",
		content: longWalkContentEn,
		tags: ["books", "hobby"],
		publishedAt: "2025-10-12T00:00:00.000Z",
		readingTimeMin: 9,
		locale: "en",
	},
	{
		id: "8",
		slug: "carrie",
		title: "Carrie — Religious Fanaticism and the Annihilation of a Town",
		excerpt:
			"Impeccable documentary structure, suffocating domestic abuse, and an explosion of chaos that leveled far more than a prom gym.",
		content: carrieContentEn,
		tags: ["books", "hobby"],
		publishedAt: "2025-11-16T00:00:00.000Z",
		readingTimeMin: 8,
		locale: "en",
	},
	{
		id: "9",
		slug: "planet-of-the-apes",
		title: "Planet of the Apes — Sci-Fi Satire and the Double Shock",
		excerpt:
			"A brilliant satire on human hubris, intellectual complacency, and one of the finest double plot twists in science fiction history.",
		content: planetOfTheApesContentEn,
		tags: ["books", "hobby"],
		publishedAt: "2026-01-20T00:00:00.000Z",
		readingTimeMin: 8,
		locale: "en",
	},
	{
		id: "10",
		slug: "battle-royale",
		title: "Battle Royale — Relentless Brutality, Romance, and Survival",
		excerpt:
			"Forty-two students forced to fight to the death on an island: blistering pacing, weaponized paranoia, and relentless survival.",
		content: battleRoyaleContentEn,
		tags: ["books", "hobby"],
		publishedAt: "2026-02-14T00:00:00.000Z",
		readingTimeMin: 8,
		locale: "en",
	},
	{
		id: "11",
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
		id: "12",
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
		id: "13",
		slug: "the-godfather",
		title: "The Godfather — Blood, Honor, and the Corleone Web",
		excerpt:
			"Reading Mario Puzo's classic completely blind: rich interwoven timelines, mafia worldbuilding, and the tragic corruption of a soul.",
		content: godfatherContentEn,
		tags: ["books", "hobby"],
		publishedAt: "2026-04-06T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "en",
	},
	{
		id: "14",
		slug: "shark-anatomy",
		title: "Shark Anatomy: The Boneless Predator",
		excerpt:
			"How cartilage, a conveyor belt of teeth, and giant oil-filled livers shaped boneless predators that rule the oceans.",
		content: sharkAnatomyContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-04-24T00:00:00.000Z",
		readingTimeMin: 10,
		locale: "en",
	},
	{
		id: "15",
		slug: "shark-senses",
		title: "Shark Senses: Living Radar and Electroreception in the Ocean",
		excerpt:
			"From stereo smell to the ampullae of Lorenzini: how sharks track, hear, and feel micro-electric fields in the ocean.",
		content: sharkSensesContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-05-13T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
	{
		id: "16",
		slug: "shark-behavior",
		title: "Shark Behavior: Beyond the Brainless Killing Machine Myth",
		excerpt:
			"Social hierarchy, curiosity, cooperative hunting, and sleep: busting the myth that sharks are just mindless eating machines.",
		content: sharkBehaviorContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-06-02T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
	{
		id: "17",
		slug: "shark-evolution-and-reproduction",
		title: "Shark Evolution and Reproduction: 450 Million Years at the Top",
		excerpt:
			"Older than trees and Saturn's rings: how K-selected reproduction and 450 million years of evolution shaped modern sharks.",
		content: sharkEvolutionContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-06-21T00:00:00.000Z",
		readingTimeMin: 6,
		locale: "en",
	},
	{
		id: "18",
		slug: "shark-taxonomy",
		title: "The Shark Family Tree: All 8 Living Orders Explained",
		excerpt:
			"From seven-gilled deep-sea relicts to giant filter feeders: the ultimate breakdown of all 8 living shark orders.",
		content: sharkTaxonomyContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-07-16T00:00:00.000Z",
		readingTimeMin: 7,
		locale: "en",
	},
	{
		id: "19",
		slug: "sharks-and-humans",
		title: "Sharks and Humans: Statistics, Myths, and the True Predator",
		excerpt:
			"What ISAF data actually tells us about shark encounters, the Jaws mass hysteria, and the silent massacre of shark finning.",
		content: sharksAndHumansContentEn,
		tags: ["hobby", "sharks"],
		publishedAt: "2026-08-08T00:00:00.000Z",
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
