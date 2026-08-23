---
name: add-blog-post
description: >
  Skill para adicionar novos posts ao blog "O Códex" de pvrosendo.
  Ativa quando o usuário pede explicitamente para adicionar um post ou usa /add-post.
  Guia todo o fluxo: recebe rascunho PT-BR do Obsidian, ajusta o tom, gera tradução EN,
  cria os arquivos MD, registra em posts.ts, atualiza o sitemap e configura o SEO.
---

# add-blog-post — Skill de Criação de Posts

Esta skill automatiza o processo completo de adicionar um novo post ao blog **O Códex**
de pvrosendo. Siga os passos na ordem exata descrita abaixo.

---

## Pré-requisitos

Antes de executar esta skill, leia obrigatoriamente:

- [`pvrosendo-writing-voice`](../pvrosendo-writing-voice/SKILL.md) — tom, voz e estilo do autor
- [`AGENTS.md`](../../AGENTS.md) — convenções gerais do projeto

---

## Tags disponíveis

Os `TagSlug` válidos (definidos em `src/lib/types.ts`) são:

| Slug | Quando usar |
|---|---|
| `system-design` | Arquitetura, padrões de distribuição, escalabilidade |
| `cloud` | AWS, GCP, Azure, Vercel, serviços cloud |
| `ai` | Inteligência artificial, LLMs, modelos |
| `backend` | APIs, servidores, bancos de dados, mensageria |
| `frontend` | React, CSS, UI, componentes |
| `tools` | IDEs, extensões, ferramentas de dev |
| `hobby` | Posts pessoais, hobbies fora de tech |
| `core concepts` | Conceitos fundamentais de CS |
| `languages` | Linguagens de programação |
| `database` | SQL, NoSQL, ORMs, modelagem |
| `observability` | Logs, métricas, tracing, monitoramento |
| `data-structures` | Algoritmos, estruturas de dados |
| `authentication` | Auth, JWT, OAuth, sessões |
| `books` | Resenhas de livros |
| `games` | Games, entretenimento |
| `reviews` | Reviews de ferramentas ou produtos |
| `sharks` | Posts sobre tubarões (hobby específico do autor) |
| `others` | Qualquer coisa que não se encaixe acima |

---

## Fluxo de Execução

### Passo 1 — Coletar informações do usuário

Peça ao usuário (ou confirme se já fornecido):

1. **Conteúdo markdown** do rascunho (vindo do Obsidian, em PT-BR)
2. **Título** do post em PT-BR
3. **Data de publicação** no formato `YYYY-MM-DD`
4. **Excerpt** (frase curta de 1-2 linhas para o card do blog) — se o usuário não fornecer, sugira baseado no conteúdo

Se algum item estiver faltando, peça antes de continuar.

---

### Passo 2 — Sugerir tags e aguardar confirmação

Com base no conteúdo, selecione as tags mais adequadas da lista acima e **apresente ao usuário para confirmação**:

```
Baseado no conteúdo, sugiro as seguintes tags:
- `system-design`
- `backend`

Confirma, ou quer adicionar/remover alguma?
```

Aguarde confirmação antes de prosseguir.

---

### Passo 3 — Ajustar o texto PT-BR

Aplique o guia da skill `pvrosendo-writing-voice` ao rascunho:

- Ajuste o tom para casual-técnico (como explicar para um amigo)
- Adicione perguntas retóricas nas transições de seção
- Inclua analogias do mundo real antes de conceitos técnicos
- Preserve ou adicione humor auto-depreciativo quando cabível
- Use a estrutura de artigo técnico do guia (hook pessoal → conceito com analogia → como funciona → vantagens → conclusão pessoal)
- Use notação `=> item` para fluxos e processos
- Use `> [!NOTE]` para cenários concretos
- Feche com um sign-off pessoal curto (não um "Resumo" formal)

**Não altere** links de imagens, código, ou blocos técnicos.

---

### Passo 4 — Detectar imagens

Inspecione o markdown PT-BR ajustado em busca de referências a imagens (`![...](...)`).

**Se houver imagens:**

1. Determine o slug PT-BR do post (ver Passo 5)
2. Crie a pasta `public/assets/{slug-pt-BR}/` (se não existir)
3. Informe o usuário:

```
⚠️ Este post contém imagens. Criei a pasta:

  public/assets/{slug-pt-BR}/

Por favor, coloque os seguintes arquivos lá antes de fazer o deploy:
  - nome-da-imagem-1.png
  - nome-da-imagem-2.png

As referências no markdown já estão ajustadas para /assets/{slug-pt-BR}/nome.png
```

Ajuste os caminhos das imagens no markdown para seguir o padrão `/assets/{slug-pt-BR}/nome-do-arquivo.ext`.

---

### Passo 5 — Definir slugs

- **Slug PT-BR:** kebab-case do título em português
  - Ex: "Introdução à Mensageria" → `introducao-a-mensageria`
  - Remova acentos, substitua espaços por `-`, lowercase
- **Slug EN:** versão em inglês do slug PT-BR
  - Ex: `introducao-a-mensageria` → `intro-to-messaging`
  - Deve ser semântico e natural em inglês, não uma tradução literal letra por letra

---

### Passo 6 — Calcular ID e readingTime

- **ID:** verifique o maior `id` atual em `src/lib/data/posts.ts` e incremente 1
  - Verifique sempre no arquivo atual — não assuma o valor.
- **readingTimeMin:** `Math.ceil(palavras / 200)`
  - Conte as palavras do conteúdo PT-BR ajustado
  - Mínimo de 1 minuto

---

### Passo 7 — Gerar versão EN

Traduza o post ajustado para inglês seguindo o guia `pvrosendo-writing-voice`:

**Regras de tradução:**
- Mantenha tom casual — **nunca** inglês formal ou estéril
- Preserve perguntas retóricas e humor auto-depreciativo
- Nicknames como "gepeto" (ChatGPT) e "germínio" (Gemini): mantenha com clarificação parentética na primeira menção
- "Vlw, tmj!" → "Cheers!"
- "maneiro" → "cool" / "awesome"
- "pira" → "phase" / "obsession"
- Exemplos brasileiros específicos (quando culturalmente relevantes): adapte para contexto universal
- Caminhos de imagem: use `/assets/{slug-pt-BR}/` (pasta única compartilhada entre locales)

---

### Passo 8 — Criar os arquivos markdown

Crie os dois arquivos:

**`src/lib/data/posts/pt-BR/{slug-pt-BR}.md`**
— conteúdo PT-BR ajustado

**`src/lib/data/posts/en/{slug-en}.md`**
— conteúdo EN traduzido

---

### Passo 9 — Registrar em `src/lib/data/posts.ts`

Adicione os imports e os objetos de metadados seguindo o padrão existente.

Imports: adicione no bloco correspondente, mantendo ordem alfabética:

```typescript
// en posts
import {slugEn}ContentEn from "./posts/en/{slug-en}.md?raw";

// pt-BR posts
import {slugPtBR}ContentPtBR from "./posts/pt-BR/{slug-pt-BR}.md?raw";
```

Metadados em `postsPtBR[]`:

```typescript
{
    id: "{próximo-id}",
    slug: "{slug-pt-BR}",
    title: "{título PT-BR}",
    excerpt: "{excerpt PT-BR}",
    content: {slugPtBR}ContentPtBR,
    tags: [{tags confirmadas}],
    publishedAt: "{data}T00:00:00.000Z",
    readingTimeMin: {calculado},
    locale: "pt-BR",
},
```

Metadados em `postsEn[]`:

```typescript
{
    id: "{próximo-id}",
    slug: "{slug-en}",
    title: "{título EN}",
    excerpt: "{excerpt EN}",
    content: {slugEn}ContentEn,
    tags: [{tags confirmadas}],
    publishedAt: "{data}T00:00:00.000Z",
    readingTimeMin: {calculado},
    locale: "en",
},
```

---

### Passo 10 — Atualizar `scripts/generate-sitemap.ts`

Adicione as entradas no array `posts` no bloco correto:

```typescript
// pt-BR posts
{ slug: '{slug-pt-BR}', locale: 'pt-BR', publishedAt: '{data}' },

// en posts
{ slug: '{slug-en}', locale: 'en', publishedAt: '{data}' },
```

---

### Passo 11 — Verificar SEO

O SEO dos posts individuais é gerado automaticamente via `buildPageHead()` e `buildBlogPostingJsonLd()` usando os dados do post.

**Verifique antes de finalizar:**
- `excerpt` tem entre 100-160 caracteres (funciona como meta description)
- Se o post tiver uma imagem de capa principal, adicione ao objeto do post:
  ```typescript
  coverImage: "/assets/{slug-pt-BR}/imagem-principal.ext",
  ```
- O `title` é claro, descritivo e não genérico

Se o excerpt estiver fora dos limites, ajuste antes de salvar.

---

### Passo 12 — Rodar verificações

```bash
pnpm check
```

Corrija quaisquer erros de lint/type antes de considerar o post adicionado.

---

### Passo 13 — Confirmação final

Informe ao usuário:

```
✅ Post "{título}" adicionado com sucesso!

Arquivos criados:
  - src/lib/data/posts/pt-BR/{slug-pt-BR}.md
  - src/lib/data/posts/en/{slug-en}.md

Arquivos atualizados:
  - src/lib/data/posts.ts (imports + metadados)
  - scripts/generate-sitemap.ts

{se houver imagens}
⚠️ Lembre de colocar as imagens em public/assets/{slug-pt-BR}/:
  - {lista de imagens}

Para ver o post localmente: pnpm dev → http://localhost:3000/blog/{slug-pt-BR}
```

---

## Convenções de Nomenclatura

| Item | Padrão | Exemplo |
|---|---|---|
| Slug PT-BR | kebab-case sem acentos | `introducao-a-mensageria` |
| Slug EN | kebab-case em inglês | `intro-to-messaging` |
| Nome do arquivo MD | `{slug}.md` | `introducao-a-mensageria.md` |
| Variável de import | `{camelCaseSlug}ContentPtBR` | `mensageriaContentPtBR` |
| Pasta de assets | `public/assets/{slug-pt-BR}/` | `public/assets/load-balancer/` |

---

## Erros comuns a evitar

- ❌ Não criar dois slugs idênticos PT-BR e EN quando eles deveriam ser diferentes
- ❌ Não esquecer de adicionar em **ambos** os arrays (`postsPtBR` e `postsEn`)
- ❌ Não usar `any` em TypeScript — use os tipos de `src/lib/types.ts`
- ❌ Não omitir o comentário de grupo nos imports (`// pt-BR posts` / `// en posts`)
- ❌ Não copiar o rascunho bruto sem passar pelo ajuste de voz (Passo 3)
- ❌ Não esquecer de rodar `pnpm check` no final
