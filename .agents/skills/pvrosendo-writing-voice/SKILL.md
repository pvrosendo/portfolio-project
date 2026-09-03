---
name: pvrosendo-writing-voice
description: >
  Captures the writing tone, voice, and style of pvrosendo's blog posts.
  Use this skill whenever creating new blog posts/articles OR translating existing
  posts between pt-BR and English. Ensures all content matches the author's
  authentic, casual-technical voice.
---

# pvrosendo — Writing Voice & Style Guide

This skill documents the author's writing style as observed across all existing blog posts. Apply it consistently when **creating new articles** or **translating existing ones**.

---

## Core Voice Characteristics

### 1. Casual-Technical Hybrid

The author writes like a knowledgeable friend explaining something over coffee — not like a textbook or formal documentation. Technical depth is present but always grounded in approachable, everyday language.

**Do:**
- Use colloquial phrasing even when explaining complex topics
- Mix technical terms with casual transitions
- Write as if talking to a peer, not lecturing a student
- Pass technical concepts in a light, simple way ("conteúdo técnico de forma light")
- Insert casual personal reactions or self-aware humor in italic blockquotes (`> *...*`)

**Don't:**
- Sound stiff, corporate, academic, or overly formal
- Dump excessive textbook jargon, Latin names, or academic minutiae when a simpler explanation works better
- Over-explain obvious things or create robotic ASCII diagrams for non-code topics
- Use passive voice more than necessary

---

### 2. Personal "I" Narrative

The author uses first-person extensively and isn't shy about sharing their own experience, confusion, or journey. Posts often start with a personal anecdote or context.

**Examples from existing posts:**
- *"Algo que me confundiu bastante e talvez seja a dúvida de outros..."* → *"Something that confused me quite a bit — and might confuse others too..."*
- *"Eu tive essa pira com Tubarões e o motivo é completamente idiota."* → *"I went through this phase with sharks, and the reason is completely ridiculous."*
- *"Apesar de achar muito maneiro, sempre fui bem ruim em front-end..."* → *"Despite finding it really cool, I was always pretty bad at front-end..."*

---

### 3. Rhetorical Questions as Transitions

The author frequently uses rhetorical questions to simulate a dialogue with the reader. These act as section transitions and keep engagement high.

**Pattern:**
> *"But why not act before the problem happens, instead of waiting for it to occur before taking action?"*

> *"Ok, I get it, but how would this work in practice?"*

> *"You might wonder: since it's the single point, if it goes down does the application break? Let's look at that below:"*

When writing or translating, preserve or introduce these natural dialogue hooks at section breaks.

---

### 4. Self-Deprecating Humor

The author uses light, self-aware humor — especially about their own mistakes or learning curve. Never sarcastic or mean, always warm.

**Examples:**
- Steps 9 & 10 in the S3 tutorial: *"After that, do two pirouettes and three backflips. Kidding. After that, just access your site and it'll be up and running."*
- On the RDS cost mistake: *"who hasn't? I always saw people talking about this and even trying to avoid it happening to me, it didn't help at all"*
- On their first prototype: *"it was literally an index.html with a form that wasn't even centered."*
- On Xcode themes: *"Looking at it now, I genuinely wonder how I liked it — being totally honest."*

---

### 5. Casual Nicknames and Expressions

The author gives playful nicknames to tools and has recurring informal expressions. These are part of their authentic voice.

| PT-BR expression | English equivalent |
|---|---|
| "gepeto" (ChatGPT) | "gepeto" (keep as-is, add "(ChatGPT)" on first mention) |
| "germínio" (Gemini) | "germínio" (keep as-is, add "(Gemini)" on first mention) |
| "Vlw, tmj!" | "Cheers!" |
| "É isso" | "That's it" |
| "pira" (obsession/phase) | "phase" or "obsession" |
| "basicasso" | "very basic" (emphasize with italics: *very* basic) |
| "dahora" | "solid" / "cool" / "really good" |
| "maneiro" | "cool" / "awesome" |
| "de prontidão" | "promptly" / "right away" |

---

### 6. Numbered & Visual Examples With Callouts

The author loves making things concrete with real-world analogies before going technical. They use `> [!NOTE]` callouts to present scenarios.

**Pattern used across posts:**
```
> [!NOTE]
> Scenario: [concrete, relatable example before explaining the technical concept]
```

Follow this pattern: **analogy or story first → then the technical detail**.

---

### 7. Arrow Flow Diagrams in Text

For explaining flows and processes, the author uses a distinctive `=>` arrow notation in plain text lists:

```
- => Client sends the request to the load balancer;
- => It analyzes the request and forwards it to an available server
- => The server processes the request and sends the response to the client.
```

Preserve this exact style when describing system flows, architectures, or step-by-step processes.

---

### 8. Real Analogies Before Abstractions

Every technical concept is introduced through a real-world analogy:

| Technical concept | Analogy used |
|---|---|
| Load Balancer | Restaurant manager distributing customers to waiters |
| Message Broker | ACK/NACK = confirmation receipt for a task |
| CDN Edge Server | Local warehouse so UK users don't need to fetch from the US |
| Pub/Sub messaging | Mall loudspeaker — multiple security guards hear it simultaneously |
| Queue messaging | Support ticket — once picked up, it disappears |

When creating new content, always introduce the concept with a grounded, human analogy before diving into technical detail.

---

### 9. Admitting Uncertainty and Learning in Public

The author openly shares when they didn't know something, made a mistake, or is still learning. This vulnerability is core to the voice.

**Examples:**
- *"Little did I know there would be even more problems when implementing the Load Balancer..."*
- *"The more you study, the more you realize how little you know."*
- *"I never imagined I'd build something like that."*

New posts should reflect this learning-in-public mindset when relevant.

---

### 10. Section Sign-offs

Posts often end with a short, warm wrap-up — not a formal "summary" heading, but a brief personal sign-off.

**Examples:**
- *"That's it — hope you find a theme that becomes your new favorite."*
- *"Cheers!"*
- *"I brought these points up because they're very interesting for observing how..."*

Avoid abrupt endings. Always close with a personal note that ties back to the intro's motivation.

---

## Writing for PT-BR vs. English

### PT-BR Posts (original voice)
- Keep expressions like "vlw, tmj!", "maneiro", "pira", informal contractions
- Use Brazilian-specific examples when relevant (Porto de Suape, bucket names, etc.)
- Sentence rhythm is looser and more conversational

### English Translations (adapted voice)
- **Do NOT** produce formal or sterile English — maintain casual tone
- Preserve self-deprecating humor, rhetorical questions, and informal flow
- Convert Brazilian expressions to natural English equivalents (see table in §5)
- Keep nicknames like "gepeto" and "germínio" with parenthetical clarification on first mention
- "Vlw, tmj!" → "Cheers!"
- Do NOT over-translate idioms into stiff English — find the casual English equivalent

---

## Structure Patterns

### New Technical Articles

```markdown
[Optional image / illustration]

## Brief Personal Hook or Problem Setup
> [Short note or framing of why this matters]

## Understanding the [Concept]
[Real-world analogy first]
[Then technical explanation]

## How It Works
[=> Arrow flow if applicable]

### Sub-sections with Examples
> [!NOTE]
> [Concrete scenario]

## Advantages / When to use
[Bulleted list with brief explanations]

## When NOT to use (if applicable)
[Brief counterexample]

## Conclusion
[Short personal reflection, not a formal summary]

## References (if applicable)
```

### Project Journey Posts (like Sharkar)

```markdown
[Personal motivation — why the project exists]

## The Idea
[Personal story / casual origin]

## Stages / Versions
[Chronological with version tags: v0.0.0, v1.0.0, etc.]

### vX.X.X - [Name]: [Subtitle]
[What changed, what was learned, honest mistakes included]

#### Conclusion
[Brief takeaway before next version]
```

---

## Reference Posts

See the full post files in `src/lib/data/posts/` for complete implementations in both languages.

| Post file | Why it's a good reference |
|---|---|
| `load-balancer.md` | Best example of analogy → technical → flow diagram pattern |
| `introducao-a-mensageria.md` / `intro-to-messaging.md` | Best example of problem-first narrative with rhetorical questions |
| `sharkar.md` | Best example of personal journey / project writeup voice |
| `themes.md` | Best example of casual recommendation / list-style post |
| `shark-environment-correlation.md` | Best example of hobby/non-technical post with the same voice |
