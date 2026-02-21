import type { Post } from "@/lib/types"

import hexagonalContent from "./posts/o-que-aprendi-estudando-arquitetura-hexagonal.md?raw"
import rustContent from "./posts/explorando-o-abismo-do-rust.md?raw"
import postgresContent from "./posts/postgresql-indexes-o-guia-que-eu-precisava.md?raw"
import dockerContent from "./posts/docker-do-basico-ao-producao.md?raw"

export const posts: Post[] = [
  {
    id: "1",
    slug: "o-que-aprendi-estudando-arquitetura-hexagonal",
    title: "O que aprendi estudando Arquitetura Hexagonal",
    excerpt:
      "Ports & Adapters, dependências invertidas e como isso mudou minha forma de pensar sobre design de software.",
    content: hexagonalContent,
    tags: ["arquitetura", "back-end", "design-de-software"],
    publishedAt: "2026-01-15T00:00:00.000Z",
    readingTimeMin: 6,
  },
  {
    id: "2",
    slug: "explorando-o-abismo-do-rust",
    title: "Explorando o Abismo do Rust",
    excerpt:
      "Minha jornada adentrando nas profundezas de uma das linguagens mais temidas e respeitadas do ecossistema dev.",
    content: rustContent,
    tags: ["rust", "linguagens", "sistemas"],
    publishedAt: "2026-02-01T00:00:00.000Z",
    readingTimeMin: 8,
  },
  {
    id: "3",
    slug: "postgresql-indexes-o-guia-que-eu-precisava",
    title: "PostgreSQL Indexes: o guia que eu precisava",
    excerpt:
      "Entendendo B-Tree, Hash, GIN e GiST — e quando usar cada um para não destruir a performance.",
    content: postgresContent,
    tags: ["postgresql", "banco-de-dados", "performance"],
    publishedAt: "2026-02-10T00:00:00.000Z",
    readingTimeMin: 10,
  },
  {
    id: "4",
    slug: "docker-do-basico-ao-producao",
    title: "Docker: do básico ao produção",
    excerpt:
      "Containers, imagens, volumes e redes — tudo que você precisa pra não sofrer com ambiente de desenvolvimento.",
    content: dockerContent,
    tags: ["docker", "devops", "infraestrutura"],
    publishedAt: "2026-02-18T00:00:00.000Z",
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
