import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, posts } from '@/lib/posts'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) notFound()
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `/writing/${post.slug}`,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  const { Content } = post
  return (
    <main id="main" tabIndex={-1}>
      <header className="article-header">
        <Link href="/#writing" className="quiet-link">
          ← All writing
        </Link>
        <h1 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-secondary">{post.description}</p>
        <p className="mt-5 text-xs text-muted">By Julián David</p>
      </header>
      <article className="prose">
        <Content />
      </article>
    </main>
  )
}
