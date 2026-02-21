# Copilot Instructions — Portfolio Pessoal (pvgrs)

## Sobre o projeto

Site pessoal de Paulo Vitor (PV) — desenvolvedor back-end apaixonado por engenharia de software.
Este é um site de portfolio e blog pessoal com identidade visual única e temática.

**Repositório:** `portfolio-project/`
**Stack:** React 19 + TanStack Start (SSR) + TanStack Router + TanStack Query + Tailwind v4 + Shadcn/ui + Biome + Vite

---

## Identidade Visual — "O Códex"

O site tem uma estética **dark, atmosférica e personalizada** que foge do portfolio genérico.
A inspiração vem de três pilares da personalidade do autor:

1. **The Witcher 3** — dark fantasy, medieval-eslavic, atmosfera pesada, dourado como contraste
2. **Tubarões / Abismo Oceânico** — azuis profundos, bioluminescência, o desconhecido como fascínio
3. **Computação/Tech** — terminal, monospace, comentários de código como elementos decorativos

### Paleta de Cores (CSS custom properties em `styles.css`)

```css
--color-abyss:     #0a0d14   /* background principal */
--color-deep:      #111827   /* cards e superfícies elevadas */
--color-current:   #1e3a4a   /* bordas, hover states */
--color-witcher:   #c9a84c   /* amarelo Witcher — accent primário */
--color-biolum:    #4dd9ac   /* verde-água bioluminescente — accent secundário */
--color-fog:       #8899aa   /* texto muted/secundário */
--color-parchment: #e8dcc8   /* texto principal sobre fundos escuros */
```

### Tipografia

- **Headings / Display:** `Cinzel` (Google Fonts) — clima medieval/épico
- **Body:** `Inter` — legibilidade moderna
- **Code / Detalhe:** `JetBrains Mono` — elementos técnicos

---

## Arquitetura & Estrutura de Pastas

```
src/
  routes/
    __root.tsx          # Layout raiz: Navbar + Footer + QueryClientProvider
    index.tsx           # Landing page (hero + seções de preview)
    blog/
      index.tsx         # Blog listing — "As Crônicas"
      $slug.tsx         # Artigo individual
    projects/
      index.tsx         # Projects listing — "Os Contratos"

  components/
    layout/
      Navbar.tsx        # Scroll-spy na landing; back-button em sub-páginas
      Footer.tsx
    sections/           # Seções da landing page (uma por arquivo)
      Hero.tsx
      AboutPreview.tsx
      RecentPosts.tsx
      FeaturedProjects.tsx
    cards/
      ProjectCard.tsx   # Card estilo "ficha de contrato"
      BlogCard.tsx      # Card estilo "entrada de crônica"
    markdown/
      MarkdownContent.tsx  # Renderizador de markdown com tema do Códex
    ui/                 # Shadcn/ui (gerado automaticamente — não editar manualmente)

  hooks/
    use-posts.ts        # TanStack Query hook para posts
    use-projects.ts     # TanStack Query hook para projetos

  lib/
    types.ts            # Tipos TypeScript: Post, Project, Tag
    utils.ts            # cn(), formatDate(), slugify()
    data/
      posts.ts          # Metadados dos posts + imports do conteúdo .md
      posts/            # Conteúdo dos posts em markdown (um arquivo por post)
      projects.ts       # Array estático de projetos

  styles.css            # Tailwind v4 + tema customizado + estilos de alerts markdown
```

---

## Rotas e Páginas

| Rota | Descrição | Thema in-universe |
|------|-----------|-------------------|
| `/` | Landing page | "O Prólogo" |
| `/blog` | Listing de artigos | "As Crônicas" |
| `/blog/$slug` | Artigo individual | "A Crônica" |
| `/projects` | Listing de projetos | "Os Contratos" / "O Bestiário" |

---

## Convenções de Código

- **Formatter/Linter:** Biome (não ESLint/Prettier)
- **Imports:** usar alias `@/` para `src/` (configurado em tsconfig e vite)
- **Componentes:** PascalCase, um componente por arquivo
- **Hooks:** prefixo `use-`, kebab-case no nome do arquivo
- **Tipos:** definidos em `src/lib/types.ts`, sem `any`
- **Estilização:** Tailwind classes diretamente no JSX; `cn()` de `@/lib/utils` para condicionais
- **Ícones:** `lucide-react`
- **Formulários:** `react-hook-form` + `zod`
- **Sem CSS modules** — apenas Tailwind + estilos globais em `styles.css`

---

## Tipos Principais

```typescript
// src/lib/types.ts

export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string        // markdown ou HTML
  tags: string[]
  publishedAt: string    // ISO date string
  readingTimeMin: number
  coverImage?: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]         // tecnologias usadas
  repoUrl?: string
  demoUrl?: string
  coverImage?: string
  featured: boolean
  status: 'active' | 'archived' | 'in-progress'
}

export interface Tag {
  label: string
  slug: string
}
```

---

## Detalhes das Seções

### Hero (landing)
- Fundo: `bg-abyss` com partículas CSS animadas (névoa ou bioluminescência)
- Heading em Cinzel: nome/slogan impactante
- Subtítulo em monospace: `> desenvolvedor back-end & explorador de profundezas`
- Dois CTAs: "As Crônicas" → `/blog` e "Os Contratos" → `/projects`
- Background decorativo: silhueta sutil temática (tubarão, lobo Witcher, ou símbolo)

### Navbar
- Na landing (`/`): links de scroll-spy para seções (`#blog`, `#projects`, `#about`)
- Em sub-páginas: botão "← Voltar" + logo "PV" centralizado ou à esquerda
- Sticky top, fundo semi-transparente com `backdrop-blur`
- Cor: transparente → `bg-deep/90` ao rolar

### Blog Cards ("As Crônicas")
- Data de publicação estilizada (formato bonito, ex: "20 Fev 2026")
- Trecho do post
- Tags como badges com cor `--color-biolum`
- Hover: borda dourada `--color-witcher`

### Project Cards ("Os Contratos")
- Título do projeto + descrição curta
- Stack de tecnologias como tags
- Status badge (`active`, `in-progress`, `archived`)
- Links para repo e demo (ícones Lucide)
- Hover: efeito de "revelar" com leve glow

### Contact — "Enviar um Corvo"
- Email do autor + links GitHub e LinkedIn
- Copy temático: algo como "Precisa de um desenvolvedor para o próximo contrato?"
- Ícones Lucide para redes sociais

---

## Dados Estáticos e Blog

Os posts vivem em dois lugares separados:
- `src/lib/data/posts/*.md` — conteúdo de cada post em markdown puro
- `src/lib/data/posts.ts` — metadados (`id`, `slug`, `title`, `excerpt`, `tags`, `publishedAt`, `readingTimeMin`) + import do `.md` via `?raw`
- `src/lib/data/projects.ts` — array de `Project[]`

O conteúdo `.md` é importado como string pelo Vite (`import content from './posts/slug.md?raw'`) sem nenhum plugin extra.

**Para criar um novo post:**
1. Crie `src/lib/data/posts/meu-slug.md`
2. Em `posts.ts`, adicione `import content from './posts/meu-slug.md?raw'` e um objeto no array

Os hooks (`use-posts.ts`, `use-projects.ts`) usam TanStack Query com `queryFn` que retorna esses dados, facilitando a migração futura para uma API real sem mudar os componentes.

### Markdown

O componente `MarkdownContent` (`src/components/markdown/MarkdownContent.tsx`) renderiza o conteúdo dos posts com:
- **`react-markdown`** — parser principal
- **`remark-gfm`** — tabelas, strikethrough, task lists, links automáticos
- **`rehype-highlight`** + **`highlight.js`** — syntax highlighting (tema `github-dark`)
- **`remark-github-blockquote-alert`** — alertas estilo GitHub (`> [!NOTE]`, `> [!WARNING]`, etc.)

Os alertas suportados são: `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`.

---

## Informações do Autor (para usar nos textos)

- **Nome:** Paulo Vitor
- **Handle:** PV / pvgrs
- **Profissão:** Desenvolvedor back-end
- **Paixões:** Engenharia de software, The Witcher 3, tubarões, computação em geral
- **Lema/copy sugerido:** "Compartilhando tudo aquilo que foi compartilhado comigo"
- **Idioma do site:** Português (pt-BR)

---

## Notas para o Copilot

- O tema escuro é o **padrão** — não há toggle de tema claro/escuro inicialmente
- Priorizar **atmosfera e personalidade** sobre minimalismo genérico
- Animações devem ser **sutis** e não prejudicar performance (`prefers-reduced-motion` respeitado)
- O site deve ser **mobile-first** e totalmente responsivo
- Textos de UI em **pt-BR** (exceto termos técnicos universais como "GitHub", "tags", etc.)
- Não usar Bootstrap — apenas Tailwind + Shadcn/ui
- TanStack Start está configurado com SSR — aproveitar `loader` nas rotas quando possível

---

## Regra de Documentação

**Toda implementação ou alteração relevante no projeto deve ser registrada no `INSTRUCTIONS_FILE.md`.**

Ao implementar uma feature, instalar um pacote, refatorar um componente ou mudar uma convenção, adicione ou atualize a seção correspondente no `INSTRUCTIONS_FILE.md`. O arquivo serve como relatório técnico e material de estudo — deve refletir o estado atual do projeto.

Exemplos do que documentar:
- Novo pacote instalado → adicionar seção explicando o pacote, como ele foi integrado e por que foi escolhido
- Novo componente criado → documentar sua responsabilidade, props e padrões usados
- Convenção alterada → atualizar a seção relevante e marcar a mudança
- "Próximos Passos" concluídos → marcar como ✅ Feito com ~~strikethrough~~
