export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <div className="w-8/12 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
        {children}

        <footer className="text-center pt-20 pb-10">
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

      <aside className="w-4/12 bg-zinc-300 text-black p-10 fixed right-0 h-screen">
        <div>
          <h1 className="text-4xl font-bold">Latest posts</h1>
          <div>
            <p>
              <strong>Phone:</strong> (+ 57) 317 735 86 56
            </p>
          </div>
          <div>
            <p>
              <strong>Email:</strong>
              julianfullstackdev@gmail.com
            </p>
          </div>
          <div>
            <p>
              <strong>City:</strong>
              Envigado - Colombia
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}
