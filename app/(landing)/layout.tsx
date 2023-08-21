export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>
        {children}

        <footer>JD</footer>
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
      </div>

      <aside>
        <div>
          <h1>Hey!</h1>
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
