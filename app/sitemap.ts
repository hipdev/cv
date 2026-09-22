import type { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://julianux.com' },
    ...posts.map(({ slug }) => ({ url: `https://julianux.com/writing/${slug}` })),
  ]
}
