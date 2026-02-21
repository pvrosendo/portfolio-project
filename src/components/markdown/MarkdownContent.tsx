import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import type { Components } from "react-markdown"

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-display text-2xl font-bold text-parchment mt-10 mb-4 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-xl font-semibold text-witcher mt-8 mb-3 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-lg font-semibold text-parchment/90 mt-6 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-fog leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-biolum underline underline-offset-2 hover:text-biolum/80 transition-colors"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="text-parchment font-semibold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-fog/90 italic">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-5 space-y-1 list-disc marker:text-witcher">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-5 space-y-1 list-decimal marker:text-witcher">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-fog leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-witcher pl-4 my-6 italic text-fog/80">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-current my-8 opacity-20" />,
  // biome-ignore lint/suspicious/noExplicitAny: react-markdown types require any here
  code: ({ inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code
          className="font-mono text-sm bg-deep px-1.5 py-0.5 rounded text-biolum border border-current/10"
          {...props}
        >
          {children}
        </code>
      )
    }
    return (
      <code className={`font-mono text-sm ${className ?? ""}`} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="my-6 rounded-md border border-current/10 bg-deep overflow-x-auto p-4 text-sm leading-relaxed">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-current/20">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="py-2 px-4 text-left font-semibold text-parchment">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-2 px-4 text-fog border-b border-current/10">
      {children}
    </td>
  ),
}

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose-codex">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </Markdown>
    </div>
  )
}
