import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/sections/Hero'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { RecentPosts } from '@/components/sections/RecentPosts'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'

export const Route = createFileRoute('/')({ component: LandingPage })

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
