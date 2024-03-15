import Jobs from './components/client/jobs'
import Skills from './components/client/skills'

export default function Page() {
  return (
    <div className="flex flex-col p-10 px-10 md:px-20 pt-10">
      <div className="flex justify-between mb-10 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold">Julián David</h3>
          <span className="font-medium text-base md:text-lg mt-2 text-white/80">
            Product developer
          </span>
        </div>
        <div className="h-40 md:h-60 relative">
          <img
            src="/me.jpg"
            title="Julián David"
            width={150}
            height={267}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <Skills />

      <Jobs />

      <div>
        <h3 className="text-2xl font-semibold mb-3 md:mb-5 mt-7 md:mt-10">
          Background
        </h3>

        <details>
          <summary>I like teaching...</summary>
          <div className="text-white/60 space-y-3 mt-2">
            <p>
              I learned to program while working as a delivery man on my
              motorcycle back in 2011. Since then, I've had the joy of passing
              on my knowledge to my younger brother, who now{' '}
              <a
                href="https://twitter.com/luis_fades"
                target="_blank"
                rel="noreferrer"
              >
                works
              </a>{' '}
              for Vercel – a source of immense pride for me.
            </p>
            <p>
              {' '}
              Additionally, I've taught a cousin and four other friends, and
              together we even started a company that thrived for five years.
              Though the company eventually closed its doors, I still find joy
              in occasionally teaching programming for free.{' '}
            </p>
            <p>
              Perhaps one day, I'll gather the courage to start a YouTube
              channel to share my knowledge, though I must admit, I'm a bit shy.
              Learning and teaching go hand in hand for me – it's what defines
              me.
            </p>
          </div>
        </details>
      </div>

      <div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 md:mb-5 mt-7 md:mt-10">
            Related
          </h3>
          <div>
            <p>
              <span className="text-white/60">Github: </span>
              <a
                href="https://github.com/hipdev"
                target="_blank"
                rel="noreferrer"
              >
                Hip Dev
              </a>
            </p>
            <p>
              <span className="text-white/60">LinkedIn: </span>
              <a
                href="https://linkedin.com/in/hipdev"
                target="_blank"
                rel="noreferrer"
              >
                Julián David
              </a>
            </p>
            <p>
              <span className="text-white/60">Current side project: </span>
              <a href="https://www.uhh.club" target="_blank" rel="noreferrer">
                Uhh!
              </a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 md:mb-5 mt-7 md:mt-10">
            Contact info
          </h3>
          <p>
            <strong>Email:</strong> julianfullstackdev@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
