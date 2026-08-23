#!/usr/bin/env tsx
/**
 * generate-sitemap.ts
 * Generates public/sitemap.xml at build time.
 * Run via: pnpm generate-sitemap
 * Integrates with: pnpm build (via package.json script)
 */

import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE_URL = "https://blog.pvrosendo.is-a.dev";
const OUTPUT_PATH = resolve(__dirname, '../public/sitemap.xml')

// ─── Static routes ────────────────────────────────────────────────────────────

interface SitemapEntry {
  path: string
  lastmod?: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

const staticRoutes: SitemapEntry[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/blog', changefreq: 'weekly', priority: 0.9 },
]

// ─── Dynamic routes — blog posts ──────────────────────────────────────────────

// Import posts data inline (CommonJS-style for the script)
// We duplicate the slug/date data here to avoid bundler complexity in a plain script.
// Update this array whenever you add/remove posts.
interface PostMeta {
  slug: string
  locale: 'pt-BR' | 'en'
  publishedAt: string
}

const posts: PostMeta[] = [
  // pt-BR posts
  { slug: 'introducao-a-mensageria', locale: 'pt-BR', publishedAt: '2025-06-25' },
  { slug: 'content-delivery-network', locale: 'pt-BR', publishedAt: '2025-07-02' },
  { slug: 'hospedando-site-no-aws-s3', locale: 'pt-BR', publishedAt: '2025-07-10' },
  { slug: 'load-balancer', locale: 'pt-BR', publishedAt: '2025-07-12' },
  { slug: 'themes', locale: 'pt-BR', publishedAt: '2026-03-02' },
  { slug: 'intro-sharks', locale: 'pt-BR', publishedAt: '2026-03-18' },
  // en posts
  { slug: 'intro-to-messaging', locale: 'en', publishedAt: '2025-06-25' },
  { slug: 'content-delivery-network', locale: 'en', publishedAt: '2025-07-02' },
  { slug: 'hosting-site-on-aws-s3', locale: 'en', publishedAt: '2025-07-10' },
  { slug: 'load-balancer', locale: 'en', publishedAt: '2025-07-12' },
  { slug: 'themes', locale: 'en', publishedAt: '2026-03-02' },
  { slug: 'intro-sharks', locale: 'en', publishedAt: '2026-03-18' },
]

// ─── XML builders ─────────────────────────────────────────────────────────────

function buildAlternateLinks(path: string): string {
  return [
    `      <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${path}"/>`,
    `      <xhtml:link rel="alternate" hreflang="pt-BR" href="${SITE_URL}${path}"/>`,
    `      <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${path}"/>`,
  ].join('\n')
}

function buildUrlEntry(entry: SitemapEntry): string {
  const lastmod = entry.lastmod ?? new Date().toISOString().split('T')[0]
  return `  <url>
    <loc>${SITE_URL}${entry.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
${buildAlternateLinks(entry.path)}
  </url>`
}

function buildBlogPostEntry(post: PostMeta): string {
  const path = `/blog/${post.slug}`
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${post.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
${buildAlternateLinks(path)}
  </url>`
}

function generateSitemap(): string {
  const staticEntries = staticRoutes.map(buildUrlEntry).join('\n')

  // Deduplicate posts by slug (same slug in different locales shares the same URL)
  const uniqueSlugs = new Map<string, PostMeta>()
  for (const post of posts) {
    if (!uniqueSlugs.has(post.slug)) {
      uniqueSlugs.set(post.slug, post)
    } else {
      // Use the most recent publishedAt
      const existing = uniqueSlugs.get(post.slug)!
      if (post.publishedAt > existing.publishedAt) {
        uniqueSlugs.set(post.slug, post)
      }
    }
  }
  const postEntries = [...uniqueSlugs.values()].map(buildBlogPostEntry).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${staticEntries}
${postEntries}
</urlset>`
}

// ─── Write sitemap ────────────────────────────────────────────────────────────

const sitemap = generateSitemap()
writeFileSync(OUTPUT_PATH, sitemap, 'utf-8')
console.log(`✅ sitemap.xml generated at ${OUTPUT_PATH}`)
console.log(`   Routes: ${staticRoutes.length} static + ${posts.length} blog posts`)
