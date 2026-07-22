import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/sections/Hero'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { RecentPosts } from '@/components/sections/RecentPosts'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import {
  buildPageHead,
  buildPersonWebsiteJsonLd,
} from '@/lib/seo'

const HOME_TITLE = 'Paulo Vitor · O Códex'
const HOME_DESCRIPTION =
  'Paulo Vitor — Desenvolvedor de Software. Explorando as profundezas da engenharia de software e compartilhando tudo aquilo que foi compartilhado comigo.'

export const Route = createFileRoute('/')({
  head: () => {
    const { meta, links } = buildPageHead({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      path: '/',
    })
    return {
      meta,
      links,
      scripts: [
        {
          type: 'application/ld+json',
          children: buildPersonWebsiteJsonLd(),
        },
      ],
    }
  },
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
      <Hero />
      <div className="border-t border-[#1e3a4a]/40" />
      <AboutPreview />
      <div className="border-t border-[#1e3a4a]/40" />
      <RecentPosts />
      <div className="border-t border-[#1e3a4a]/40" />
      <FeaturedProjects />
    </>
  )
}
