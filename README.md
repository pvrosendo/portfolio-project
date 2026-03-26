# O Códex

Site pessoal — portfolio e blog com identidade visual temática.

## Sobre o projeto

Esse é um site pessoal com duas funções principais: **demo de projetos** e **blog pessoal**. A identidade visual se inspira em três pilares: *The Witcher 3*, *tubarões/abismo oceânico* e *computação*.

O tema chama-se **"O Códex"** — uma mistura de dark fantasy, profundezas do oceano e estética tech.

## Stack

| Tecnologia | Função |
|---|---|
| [React 19](https://react.dev) | UI |
| [TanStack Start](https://tanstack.com/start) | Framework SSR (Server-Side Rendering) |
| [TanStack Router](https://tanstack.com/router) | Roteamento com file-based routing |
| [TanStack Query](https://tanstack.com/query) | Gerenciamento de estado assíncrono |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilização utility-first |
| [Shadcn/ui](https://ui.shadcn.com) | Componentes de UI base |
| [Vite](https://vite.dev) | Build tool |
| [Biome](https://biomejs.dev) | Linter + Formatter |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática |
| [Lucide React](https://lucide.dev) | Ícones |

## Estrutura do projeto

```
src/
├── routes/
│   ├── __root.tsx          # Layout raiz: HTML, Navbar, Footer, providers
│   ├── index.tsx           # Landing page
│   ├── blog/
│   │   ├── index.tsx       # Listagem de posts ("As Crônicas")
│   │   └── $slug.tsx       # Artigo individual
│   └── projects/
│       └── index.tsx       # Listagem de projetos ("Os Contratos")
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navbar com scroll-spy e back-button
│   │   └── Footer.tsx
│   ├── sections/           # Seções da landing page
│   │   ├── Hero.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── RecentPosts.tsx
│   │   └── FeaturedProjects.tsx
│   ├── cards/
│   │   ├── BlogCard.tsx
│   │   └── ProjectCard.tsx
│   ├── ui/                 # Shadcn/ui
│   └── NotFound.tsx        # Página 404 temática
│
├── hooks/
│   ├── use-posts.ts        # TanStack Query hooks para posts
│   └── use-projects.ts     # TanStack Query hooks para projetos
│
├── lib/
│   ├── types.ts            # Interfaces TypeScript: Post, Project, Tag
│   ├── utils.ts            # cn(), formatDate(), slugify()
│   └── data/
│       ├── posts.ts        # Dados estáticos de posts
│       └── projects.ts     # Dados estáticos de projetos
│
└── styles.css              # Tailwind + tema customizado "O Códex"
```

## Rotas

| Rota | Página | Tema in-universe |
|---|---|---|
| `/` | Landing page | O Prólogo |
| `/blog` | Listagem de artigos | As Crônicas |
| `/blog/:slug` | Artigo individual | A Crônica |
| `/projects` | Listagem de projetos | Os Contratos |

## Tema visual

### Paleta de cores

| Nome | Hex | Uso |
|---|---|---|
| `abyss` | `#0a0d14` | Background principal |
| `deep` | `#111827` | Cards e superfícies elevadas |
| `current` | `#1e3a4a` | Bordas, hover states |
| `witcher` | `#c9a84c` | Accent primário (dourado) |
| `biolum` | `#4dd9ac` | Accent secundário (verde-água) |
| `fog` | `#8899aa` | Texto muted/secundário |
| `parchment` | `#e8dcc8` | Texto principal |

### Tipografia

- **Cinzel** — headings, display (clima épico/medieval)
- **Inter** — corpo do texto
- **JetBrains Mono** — código, labels técnicas