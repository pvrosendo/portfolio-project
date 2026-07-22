import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useRouteContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { NotFound } from '../components/NotFound'
import { Analytics } from '@vercel/analytics/react'
import appCss from '../styles.css?url'
import { SITE_NAME, DEFAULT_OG_IMAGE } from '../lib/seo'

import '../lib/i18n'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Fallback title/description — each route overrides these
      { title: SITE_NAME },
      { name: 'description', content: 'Paulo Vitor — Desenvolvedor de Software. Explorando as profundezas da engenharia de software.' },
      // Fallback OG — each route overrides these
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:image', content: DEFAULT_OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      // Twitter Card fallback
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { queryClient } = useRouteContext({ from: '__root__' })
  const { i18n } = useTranslation()

  return (
    <html lang={i18n.language || 'pt-BR'}>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main id="main-content" role="main">{children}</main>
          <Footer />
          <TanStackDevtools
            config={{ position: 'bottom-right' }}
            plugins={[
              { name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> },
              TanStackQueryDevtools,
            ]}
          />
          <Analytics />
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  )
}
