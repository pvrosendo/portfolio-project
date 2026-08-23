# AGENTS.md — Blog de Paulo Vitor

## Sobre o Projeto

Blog com identidade visual temática chamada **"O Códex"**.

- **URL:** https://blog.pvrosendo.is-a.dev
- **Deploy:** Vercel via Nitro (`nitro/vite` plugin)
- **Package Manager:** pnpm

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | React 19 + TanStack Start (SSR) |
| Routing | TanStack Router (file-based) |
| Data Fetching | TanStack Query |
| Styling | Tailwind CSS v4 + Shadcn/ui (new-york style) |
| Linter/Formatter | Biome (NÃO ESLint/Prettier) |
| Bundler | Vite 7 |
| Linguagem | TypeScript (strict mode) |
| i18n | i18next + react-i18next (pt-BR / en) |
| Ícones | lucide-react |
| Formulários | react-hook-form + zod |
| Markdown | react-markdown + remark-gfm + rehype-highlight + remark-github-blockquote-alert |
| Deploy | Nitro (auto-detect Vercel) |

---

## Identidade Visual — "O Códex"

O site tem estética **dark, atmosférica e personalizada** inspirada em três pilares:

1. **The Witcher 3** — dark fantasy, medieval-eslavo, dourado como contraste
2. **Tubarões / Abismo Oceânico** — azuis profundos, bioluminescência
3. **Computação/Tech** — terminal, monospace, comentários de código como decoração

### Paleta de Cores

```
abyss:     #0a0d14   → background principal
deep:      #111827   → cards e superfícies elevadas
current:   #1e3a4a   → bordas, hover states
witcher:   #c9a84c   → accent primário (dourado Witcher)
biolum:    #4dd9ac   → accent secundário (verde bioluminescente)
fog:       #8899aa   → texto muted/secundário
parchment: #e8dcc8   → texto principal sobre fundos escuros
```

### Tipografia

- **Headings:** `Cinzel` (Google Fonts) — clima medieval/épico
- **Body:** `Inter` — legibilidade moderna
- **Code:** `JetBrains Mono` — elementos técnicos

### Regras de Design

- Tema escuro é o **padrão** (não há toggle light/dark)
- Animações **sutis**, respeitando `prefers-reduced-motion`
- Mobile-first, totalmente responsivo
- Priorizar **atmosfera e personalidade** sobre minimalismo genérico

---

## Arquitetura & Estrutura de Pastas

```
src/
  routes/                    # TanStack Router (file-based routing)
    __root.tsx               # Layout raiz: Navbar + Footer + QueryClientProvider
    index.tsx                # Landing page
    blog/
      index.tsx              # Blog listing — "As Crônicas"
      $slug.tsx              # Artigo individual
  components/
    layout/                  # Navbar, Footer
    sections/                # Seções da landing page (Hero, AboutPreview, etc.)
    cards/                   # BlogCard
    markdown/                # MarkdownContent — renderizador com tema do Códex
    ui/                      # Shadcn/ui (Atomic Design: atoms → molecules → organisms)
      atoms/                 # Componentes primitivos (button, input, label, etc.)
      molecules/             # Composições simples (card, badge, tooltip, etc.)
      organisms/             # Componentes complexos (dialog, sidebar, tabs, etc.)
      index.ts               # Barrel exports

  hooks/                     # Custom hooks (use-posts, use-mobile)

  integrations/
    tanstack-query/          # QueryClient setup e devtools

  lib/
    types.ts                 # Tipos TypeScript: Post, Tag
    utils.ts                 # cn(), formatDate(), slugify()
    seo.ts                   # Helpers de SEO: OG tags, JSON-LD, canonical, hreflang
    i18n.ts                  # Configuração i18next
    data/
      posts.ts               # Metadados dos posts + imports do .md via ?raw
      posts/                 # Conteúdo markdown dos posts (pt-BR/ e en/)

  locales/                   # Traduções i18next
    pt-BR/                   # common.json, landing.json, blog.json
    en/                      # common.json, landing.json, blog.json

  styles.css                 # Tailwind v4 + tema customizado + estilos de alerts

scripts/
  generate-sitemap.ts        # Gera public/sitemap.xml no build (roda via tsx)
```

---

## Convenções de Código

### Gerais

- **Imports:** sempre usar alias `@/` para `src/` (configurado em tsconfig + vite)
- **Componentes:** PascalCase, um componente por arquivo
- **Hooks:** prefixo `use-`, kebab-case no nome do arquivo
- **Tipos:** definidos em `src/lib/types.ts`, **sem `any`**
- **Estilização:** classes Tailwind diretamente no JSX; `cn()` de `@/lib/utils` para condicionais
- **Sem CSS modules** — apenas Tailwind + estilos globais em `styles.css`

### Biome

O projeto usa **Biome** (não ESLint/Prettier):

- Indent: tabs
- Quotes: double quotes (`"`)
- Regras: recommended
- Escopo: apenas `src/**`, `.vscode/**`, `index.html`, `vite.config.ts`
- Ignorados: `routeTree.gen.ts`, `styles.css`

### Shadcn/ui

- Estilo: `new-york`
- Componentes em `@/components/ui/` organizado por Atomic Design
- **Nunca editar componentes Shadcn/ui manualmente** — usar `pnpm dlx shadcn@latest add <component>` ou `make ui <component>`
- Barrel exports em `@/components/ui/index.ts`

### TypeScript

- Strict mode habilitado
- `noUnusedLocals` e `noUnusedParameters` ativos
- Target: ES2022
- Module: ESNext com bundler resolution

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Dev server na porta 3000 |
| `pnpm build` | Gera sitemap + build de produção |
| `pnpm preview` | Preview do build de produção |
| `pnpm test` | Roda testes (vitest) |
| `pnpm lint` | Lint com Biome |
| `pnpm format` | Format com Biome |
| `pnpm check` | Check completo com Biome |
| `make ui <name>` | Adiciona componente Shadcn/ui |

---

## Internacionalização (i18n)

- Idiomas suportados: `pt-BR` (padrão/fallback) e `en`
- Detecção: `localStorage` → `navigator`
- Namespaces: `common`, `landing`, `blog`
- Arquivos de tradução: `src/locales/{pt-BR,en}/*.json`
- Textos de UI em **pt-BR** por padrão (exceto termos técnicos universais)

---

## Blog — Dados e Conteúdo

### Estrutura

Posts vivem em dois lugares separados:

1. **Conteúdo markdown:** `src/lib/data/posts/{pt-BR,en}/*.md`
2. **Metadados:** `src/lib/data/posts.ts` — importa o `.md` via `?raw`

### Criar um Novo Post

1. Crie o arquivo markdown em `src/lib/data/posts/{locale}/meu-slug.md`
2. Em `src/lib/data/posts.ts`, adicione o import `?raw` e o objeto de metadados
3. Atualize `scripts/generate-sitemap.ts` com o novo slug/data no array `posts`

### Markdown Features

O componente `MarkdownContent` suporta:

- GFM (tabelas, strikethrough, task lists)
- Syntax highlighting via highlight.js (tema `github-dark`)
- Alertas GitHub: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`

---

## SEO

O projeto tem SEO robusto implementado em `src/lib/seo.ts`:

- **`buildPageHead()`** — combina title, description, OG, Twitter, canonical e hreflang
- **JSON-LD** — Person, WebSite, BlogPosting, SoftwareSourceCode
- **Sitemap** — gerado automaticamente no build via `scripts/generate-sitemap.ts`
- Cada rota define seu próprio `head()` com meta tags específicas

---

## Regras para o Agente

### Código

- Rodar `pnpm check` antes de considerar qualquer alteração como concluída
- Não introduzir dependências sem justificativa clara
- Respeitar os patterns existentes (hooks com TanStack Query, dados estáticos em `lib/data/`, etc.)
- Não modificar arquivos gerados: `routeTree.gen.ts`, componentes em `ui/` (usar CLI do Shadcn)
- Manter compatibilidade com SSR (TanStack Start) — evitar `window`/`document` fora de `useEffect`

### Escrita e Conteúdo

- Para posts/artigos, **sempre** consultar o skill `pvrosendo-writing-voice` antes de escrever
- Tom: casual-técnico, primeira pessoa, humor auto-depreciativo, analogias antes de abstrações
- Traduções EN devem manter o tom casual — nunca produzir inglês formal/estéril

### Deploy

- Deploy via Vercel + Nitro — o Nitro detecta automaticamente o ambiente
- Build script depende de `tsx` (devDependency) para gerar o sitemap
- Nunca instalar dependências apenas globalmente — tudo deve estar no `package.json`
