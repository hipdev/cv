import { AiFillGithub } from 'react-icons/ai'

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <div className="w-full md:w-8/12 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
        {children}

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

      <aside className="w-full hidden md:block md:w-4/12 bg-zinc-300 text-black p-10 fixed right-0 h-screen">
        <a
          href="https://github.com/hipdev/cv"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute hover:bg-black/90 transition-colors bg-black/80  rotate-45 w-40 flex justify-center -top-5 -right-14 h-20 items-end "
        >
          <AiFillGithub className="text-white text-4xl" />
        </a>
        <div>
          <h1 className="text-4xl font-bold">Latest posts</h1>

          <p className="mt-3">Future posts will be here</p>
        </div>
      </aside>
    </div>
  )
}
