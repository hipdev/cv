import { performRequest } from 'lib/datocms/fetcher'
import { GET_POSTS } from 'lib/datocms/queries'
import { Post } from 'lib/types/posts'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

export default async function LandingLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  const { allPosts } = await performRequest({ query: GET_POSTS })

  return (
    <div className="flex">
      <div className="w-full bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
        <main>{props.children}</main>

        <footer className="text-center pt-10 md:pt-20 pb-10 px-5">
          <span className="text-3xl font-bold">JD</span>
          <p>
            MIT License -{' '}
            <a
              href="https://github.com/hipdev/cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>{' '}
            -{' '}
            <a
              href="https://julianux.com/_src"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Source with Vercel
            </a>
          </p>
        </footer>
      </div>

      <aside className="w-full hidden md:w-4/12 bg-zinc-300 text-black p-10 fixed right-0 h-screen">
        <a
          href="https://github.com/hipdev/cv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github repository"
          className="absolute hover:bg-black/90 transition-colors bg-black/80  rotate-45 w-40 flex justify-center -top-5 -right-14 h-20 items-end "
        >
          <AiFillGithub className="text-white text-4xl" />
        </a>
        <div>
          <h1 className="text-4xl font-bold">Latest posts</h1>

          <p className="mt-3">Future posts will be here</p>
          {allPosts.map((post: Post) => (
            <Link href={`/view/${post.id}`} key={post.id}>
              <p>{post.title}</p>

              {/* <StructuredTextWrapper content={post.content} /> */}
            </Link>
          ))}
        </div>
      </aside>
      {props.modal}
    </div>
  )
}
