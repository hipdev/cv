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
          <p className="text-white/60">
            I learned to program as a delivery man on my motorcycle in 2011,
            then I taught my younger brother, today he{' '}
            <a
              href="https://twitter.com/luis_fades"
              target="_blank"
              rel="noreferrer"
            >
              works{' '}
            </a>
            for Vercel and it is my greatest pride, I also taught a cousin and 4
            other friends, we started a company that lasted 5 years,
            occasionally I teach people to program for free, maybe I'll finish
            making a Youtube channel, who knows, I'm kind of shy.
          </p>
          <p className="text-white/60">
            I like to learn and then teach, that's me.
          </p>
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
            Interest
          </h3>
          <p>
            My family, hip hop, tattoos, stories, comedy and the little things
            that truly matter with my people.
          </p>
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
