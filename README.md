# O Códex

Blog com identidade visual temática.

## Sobre o projeto

Esse é um blog pessoal com uma identidade visual que se inspira em três pilares: *The Witcher 3*, *tubarões/abismo oceânico* e *computação*.

O tema chama-se **"O Códex"** — uma mistura de dark fantasy, profundezas do oceano e estética tech.

## Stack

| Tecnologia | Função |
|---|---|
| [React 19](https://react.dev) | UI |
| [TanStack Start](https://tanstack.com/start) | Framework SSR (Server-Side Rendering) |
| [TanStack Router](https://tanstack.com/router) | Roteamento com file-based routing |
| [TanStack Query](https://tanstack.com/query) | Gerenciamento de estado assíncrono |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilização utility-first |
| [Vite](https://vite.dev) | Build tool |
| [Nitro](https://nitro.unjs.io/) | Engine de deploy (Vercel) |
| [Biome](https://biomejs.dev) | Linter + Formatter |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática |
| [Lucide React](https://lucide.dev) | Ícones |
| [i18next](https://www.i18next.com/) | Internacionalização (i18n) |
| [React Markdown](https://github.com/remarkjs/react-markdown) | Renderização de conteúdo |

## Estrutura do projeto

```
src/
├── routes/
│   ├── __root.tsx          # Layout raiz: HTML, Navbar, Footer, providers
│   ├── index.tsx           # Landing page
│   ├── blog/
│   │   ├── index.tsx       # Listagem de posts ("As Crônicas")
│   │   └── $slug.tsx       # Artigo individual
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navbar com scroll-spy e back-button
│   │   └── Footer.tsx
│   ├── sections/           # Seções da landing page
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── cards/
│   ├── markdown/           # Renderizador de markdown customizado
│   └── ui/                 # Componentes de UI reaproveitáveis (Shadcn/Atomic)
│
├── hooks/
│   └── use-posts.ts        # TanStack Query hooks para posts
│
├── lib/
│   ├── types.ts            # Interfaces TypeScript: Post, Tag
│   ├── utils.ts            # Helpers variados
│   ├── seo.ts              # Utilitários robustos de SEO
│   ├── i18n.ts             # Configuração do i18next
│   └── data/
│       ├── posts.ts        # Metadados dos posts
│       └── posts/          # Markdown dos posts em PT-BR e EN
│
├── locales/                # Arquivos JSON de tradução (i18n)
│
└── styles.css              # Tailwind + tema customizado "O Códex"
```

## Rotas

| Rota | Página | Tema in-universe |
|---|---|---|
| `/` | Landing page | O Prólogo |
| `/blog` | Listagem de artigos | As Crônicas |
| `/blog/:slug` | Artigo individual | A Crônica |

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