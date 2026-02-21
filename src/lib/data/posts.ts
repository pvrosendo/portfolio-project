import type { Post } from "@/lib/types"

export const posts: Post[] = [
  {
    id: "1",
    slug: "o-que-aprendi-estudando-arquitetura-hexagonal",
    title: "O que aprendi estudando Arquitetura Hexagonal",
    excerpt:
      "Ports & Adapters, dependências invertidas e como isso mudou minha forma de pensar sobre design de software.",
    content: `
# O que aprendi estudando Arquitetura Hexagonal

A Arquitetura Hexagonal, também conhecida como Ports & Adapters, foi proposta por Alistair Cockburn com um objetivo claro: isolar o núcleo da aplicação do mundo exterior.

## O problema que ela resolve

Quantas vezes você já se pegou com testes acoplados ao banco de dados, ou com lógica de negócio misturada com detalhes de infraestrutura? Esse é exatamente o problema que a arquitetura hexagonal resolve.

## Ports e Adapters

A ideia central é simples:
- **Ports**: interfaces que definem como o mundo exterior se comunica com o núcleo
- **Adapters**: implementações concretas dessas interfaces

O núcleo da aplicação não sabe se está lidando com um banco PostgreSQL, um mock em memória ou um arquivo CSV. Ele só conhece as abstrações.

## O que mudou no meu código

Depois de adotar esse modelo, meus testes ficaram drasticamente mais rápidos e isolados. A lógica de negócio passou a ser testável sem subir nenhuma infraestrutura.

Compartilhando tudo aquilo que foi compartilhado comigo. 🐺
    `.trim(),
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
    content: `
# Explorando o Abismo do Rust

Assim como as profundezas do oceano, Rust guarda tesouros e perigos em igual proporção. Mas para quem está disposto a mergulhar, a recompensa é extraordinária.

## Por que Rust assusta?

O borrow checker. Simples assim. Ele quebra toda a intuição que você construiu em anos programando em linguagens com garbage collector.

## Mas vale a pena?

Sim. Quando você entende o modelo de ownership, percebe que o compilador está te protegendo de uma classe inteira de bugs que você nem sabia que estava cometendo.

## Começando do zero

Minha recomendação: comece pelo [The Rust Book](https://doc.rust-lang.org/book/). É gratuito, bem escrito e cobre tudo que você precisa.

Mergulhe fundo. A água é fria, mas você se acostuma. 🦈
    `.trim(),
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
    content: `
# PostgreSQL Indexes: o guia que eu precisava

Índices são uma das ferramentas mais poderosas e mal-compreendidas em bancos de dados relacionais.

## Por que indexes importam?

Uma query sem índice em uma tabela com milhões de registros faz um sequential scan. O banco lê cada linha, uma por uma. Com o índice certo, ele vai direto ao ponto.

## Os tipos principais

- **B-Tree**: o padrão. Funciona para a maioria dos casos (=, <, >, BETWEEN, LIKE com prefixo).
- **Hash**: apenas para igualdade (=). Mais rápido que B-Tree nesse caso específico.
- **GIN**: para arrays, JSONB e full-text search.
- **GiST**: para tipos geométricos e dados geoespaciais.

## Quando NÃO criar um índice

Tabelas pequenas, colunas com baixa cardinalidade e tabelas com muitos writes são casos onde o índice pode fazer mais mal do que bem.

EXPLAIN ANALYZE é seu melhor amigo. Sempre. 📊
    `.trim(),
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
    content: `
# Docker: do básico ao produção

"Funciona na minha máquina" é o inimigo de todo dev. Docker é a solução.

## O que é um container?

Um container é um processo isolado que carrega tudo que precisa para rodar: código, runtime, bibliotecas e configurações. Sem surpresas no deploy.

## O Dockerfile

\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "dist/index.js"]
\`\`\`

## Multi-stage builds

Use multi-stage builds para reduzir o tamanho da imagem final. Separe o ambiente de build do ambiente de produção.

## Docker Compose

Para desenvolvimento local, docker-compose é indispensável. Sobe banco, cache, filas e a aplicação com um único comando.

Containerize tudo. Você vai me agradecer. 🐋
    `.trim(),
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
