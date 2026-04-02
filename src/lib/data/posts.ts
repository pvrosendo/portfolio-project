import type { Post, SupportedLocale } from "@/lib/types"

// pt-BR posts
import messagingContentPtBR from "./posts/pt-BR/introducao-a-mensageria.md?raw"
import cdnContentPtBR from "./posts/pt-BR/cdn.md?raw"
import s3ContentPtBR from "./posts/pt-BR/hospedando-site-s3.md?raw"
import lbContentPtBR from "./posts/pt-BR/load-balancer.md?raw"
import sharkarContentPtBR from "./posts/pt-BR/sharkar.md?raw"
import themesContentPtBR from "./posts/pt-BR/themes.md?raw"
import introSharksContentPtBR from "./posts/pt-BR/shark-environment-correlation.md?raw"

// en posts
import messagingContentEn from "./posts/en/intro-to-messaging.md?raw"
import cdnContentEn from "./posts/en/cdn.md?raw"
import s3ContentEn from "./posts/en/hosting-site-s3.md?raw"
import lbContentEn from "./posts/en/load-balancer.md?raw"
import sharkarContentEn from "./posts/en/sharkar.md?raw"
import themesContentEn from "./posts/en/themes.md?raw"
import introSharksContentEn from "./posts/en/shark-environment-correlation.md?raw"

const postsPtBR: Post[] = [
  {
    id: "1",
    slug: "introducao-a-mensageria",
    title: "Introdução à Mensageria",
    excerpt:
      "Meus primeiros passos entendendo a importância da comunicação assíncrona entre sistemas.",
    content: messagingContentPtBR,
    tags: ["arquitetura", "back-end", "microsserviços", "mensageria"],
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
    tags: ["web", "redes", "infraestrutura", "cdn"],
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
    tags: ["aws", "cloud", "hospedagem", "infraestrutura"],
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
    tags: ["web", "redes", "infraestrutura"],
    publishedAt: "2025-07-12T00:00:00.000Z",
    readingTimeMin: 7,
    locale: "pt-BR",
  },
  // {
  //   id: "5",
  //   slug: "sharkar",
  //   title: "Como construi meu projeto: Sharkar",
  //   excerpt:
  //     "Como foi construir um projeto fullstack e implementá-lo em diferentes clouds.",
  //   content: sharkarContentPtBR,
  //   tags: ["projetos", "fullstack", "cloud"],
  //   publishedAt: "2025-07-15T00:00:00.000Z",
  //   readingTimeMin: 15,
  //   locale: "pt-BR",
  // },
  {
    id: "6",
    slug: "themes",
    title: "Recomendações de temas - VS Code",
    excerpt:
      "Temas que estou usando atualmente e outros que sugiro dar uma olhada.",
    content: themesContentPtBR,
    tags: ["Recomendações", "Temas", "tools"],
    publishedAt: "2026-03-02T00:00:00.000Z",
    readingTimeMin: 5,
    locale: "pt-BR",
  },
  {
    id: "7",
    slug: "intro-sharks",
    title: "Correlação do Ecossistema Marinho com os Tubarões",
    excerpt:
      "Dê uma olhada em como o ecossistema marinho impacta na vida dos tubarões.",
    content: introSharksContentPtBR,
    tags: ["tubarões", "hobbie"],
    publishedAt: "2026-03-18T00:00:00.000Z",
    readingTimeMin: 7,
    locale: "pt-BR",
  },
]

const postsEn: Post[] = [
  {
    id: "1",
    slug: "intro-to-messaging",
    title: "Introduction to Messaging",
    excerpt:
      "My first steps understanding the importance of asynchronous communication between systems.",
    content: messagingContentEn,
    tags: ["architecture", "back-end", "microservices", "messaging"],
    publishedAt: "2025-06-25T00:00:00.000Z",
    readingTimeMin: 10,
    locale: "en",
  },
  {
    id: "2",
    slug: "content-delivery-network",
    title: "CDN - Content Delivery Network",
    excerpt: "Understanding how websites load faster in different locations.",
    content: cdnContentEn,
    tags: ["web", "networks", "infrastructure", "cdn"],
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
    tags: ["aws", "cloud", "hosting", "infrastructure"],
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
    tags: ["web", "networks", "infrastructure"],
    publishedAt: "2025-07-12T00:00:00.000Z",
    readingTimeMin: 7,
    locale: "en",
  },
  // {
  //   id: "5",
  //   slug: "sharkar",
  //   title: "How I Built My Project: Sharkar",
  //   excerpt:
  //     "How I built a fullstack project and deployed it across different clouds.",
  //   content: sharkarContentEn,
  //   tags: ["projects", "fullstack", "cloud"],
  //   publishedAt: "2025-07-15T00:00:00.000Z",
  //   readingTimeMin: 15,
  //   locale: "en",
  // },
  {
    id: "6",
    slug: "themes",
    title: "Theme Recommendations - VS Code",
    excerpt:
      "Themes I'm currently using and others I suggest checking out.",
    content: themesContentEn,
    tags: ["Recommendations", "Themes", "tools"],
    publishedAt: "2026-03-02T00:00:00.000Z",
    readingTimeMin: 5,
    locale: "en",
  },
  {
    id: "7",
    slug: "intro-sharks",
    title: "Marine Ecosystem Correlation with Sharks",
    excerpt: "Take a look at how the marine ecosystem impacts shark life.",
    content: introSharksContentEn,
    tags: ["sharks", "hobby"],
    publishedAt: "2026-03-18T00:00:00.000Z",
    readingTimeMin: 7,
    locale: "en",
  },
]

export const posts: Record<SupportedLocale, Post[]> = {
  "pt-BR": postsPtBR,
  "en": postsEn,
}

export function getPostsByLocale(locale: SupportedLocale): Post[] {
  return posts[locale] ?? posts["pt-BR"]
}

export function getPostBySlug(
  slug: string,
  locale: SupportedLocale,
): Post | undefined {
  return getPostsByLocale(locale).find((p) => p.slug === slug)
}

export function getPostBySlugAnyLocale(slug: string): Post | undefined {
  return postsPtBR.find((p) => p.slug === slug) ?? postsEn.find((p) => p.slug === slug)
}

export function getRecentPosts(count = 3, locale: SupportedLocale): Post[] {
  return [...getPostsByLocale(locale)]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, count)
}
