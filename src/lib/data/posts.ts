import type { Post } from "@/lib/types"

import messagingContent from "./posts/introducao-a-mensageria.md?raw"
import cdnContent from "./posts/cdn.md?raw"
import s3Content from "./posts/hospedando-site-s3.md?raw"
import lbContent from "./posts/load-balancer.md?raw"
import sharkarContent from "./posts/sharkar.md?raw"
import themesContent from "./posts/themes.md?raw"
import IntroSharksContent from "./posts/shark-environment-correlation.md?raw"

export const posts: Post[] = [
  {
    id: "1",
    slug: "introducao-a-mensageria",
    title: "Introdução à Mensageria",
    excerpt:
      "Meus primeiros passos entendendo a importância da comunicação assíncrona entre sistemas.",
    content: messagingContent,
    tags: ["arquitetura", "back-end", "microsserviços", "mensageria"],
    publishedAt: "2025-06-25T00:00:00.000Z",
    readingTimeMin: 10,
  },
  {
    id: "2",
    slug: "content-delivery-network",
    title: "CDN - Content Delivery Network",
    excerpt:
      "Entendendo como os sites chegam mais rápidos em diversos lugares diferentes.",
    content: cdnContent,
    tags: ["web", "redes", "infraestrutura", "cdn"],
    publishedAt: "2025-07-02T00:00:00.000Z",
    readingTimeMin: 8,
  },
  {
    id: "3",
    slug: "hospedando-site-no-aws-s3",
    title: "Hospedando site no AWS S3",
    excerpt:
      "Hospedando um site no ar de maneira simples e direta.",
    content: s3Content,
    tags: ["aws", "cloud", "hospedagem", "infraestrutura"],
    publishedAt: "2025-07-10T00:00:00.000Z",
    readingTimeMin: 10,
  },
  {
    id: "4",
    slug: "load-balancer",
    title: "Load Balancer (Balanceador de Carga)",
    excerpt:
      "Introdução bem legal sobre balanceamento de carga.",
    content: lbContent,
    tags: ["web", "redes", "infraestrutura"],
    publishedAt: "2025-07-12T00:00:00.000Z",
    readingTimeMin: 7,
  },
  {
    id: "5",
    slug: "sharkar",
    title: "Como construi meu projeto: Sharkar",
    excerpt:
      "Como foi construir um projeto fullstack e implementá-lo em diferentes clouds.",
    content: sharkarContent,
    tags: ["projetos", "fullstack", "cloud"],
    publishedAt: "2025-07-15T00:00:00.000Z",
    readingTimeMin: 15,
  },
  {
    id: "6",
    slug: "themes",
    title: "Recomendações de temas - VS Code",
    excerpt:
      "Temas que estou usando atualmente e outros que sugiro dar uma olhada.",
    content: themesContent,
    tags: ["Recomendações", "Temas", "tools"],
    publishedAt: "2026-03-02T00:00:00.000Z",
    readingTimeMin: 5,
  },
  {
    id: "7",
    slug: "intro-sharks",
    title: "Correlação do Ecossistema Marinho com os Tubarões",
    excerpt:
      "Dê uma olhada em como o ecossistema marinho impacta na vida dos tubarões.",
    content: IntroSharksContent,
    tags: ["tubarões", "hobbie"],
    publishedAt: "2026-03-18T00:00:00.000Z",
    readingTimeMin: 7,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getRecentPosts(count = 3): Post[] {
  return [...posts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, count)
}
