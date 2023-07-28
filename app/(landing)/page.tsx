import Jobs from './components/client/Jobs'
import Skills from './components/client/Skills'
import styles from './page.module.scss'

export default function Page() {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <div>
          <h3>Julián David</h3>
          <span>FullStack developer</span>
        </div>
        <div className="jus-end">
          <img src="/me.jpg" title="Julián David" width={150} height={267} />
        </div>
      </div>

      <Skills />

      <Jobs />

      <div className={styles.background}>
        <h4>Background</h4>

        <details>
          <summary>I like teaching...</summary>
          <p>
            I learned to program as a deliveryman on my motorcycle in 2011, then
            I taught my younger brother, today he{' '}
            <a
              href="https://twitter.com/luis_fades"
              target="_blank"
              rel="noreferrer"
            >
              works
            </a>
            for Vercel and it is my greatest pride, also my cousin and 4 other
            friends, we started a company that lasted 5 years, occasionally I
            teach people to program for free, maybe I'll finish making a youtube
            channel, who knows, I'm kind of shy.
          </p>
          <p>I like to learn and apply as a team, that's me.</p>
        </details>
      </div>

      <div className={styles.studies}>
        <div>
          <h4>Related</h4>
          <div>
            <p>
              Github:{' '}
              <a
                href="https://github.com/hipdev"
                target="_blank"
                rel="noreferrer"
              >
                Hip Dev
              </a>
            </p>
            <p>
              Personal project:{' '}
              <a href="https://tintalove.com" target="_blank" rel="noreferrer">
                Tinta Love
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.interests}>
        <div>
          <h4>Interest</h4>
          <p>
            Cats, musicholic, tattoos, stories, comedy and the little things
            that truly matter.
          </p>
        </div>
      </div>
      <div className={styles.interests}>
        <div>
          <h4>Contact info</h4>
          <p>
            <strong>Email:</strong> julianfullstackdev@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> (+57) 317 735 86 56
          </p>
        </div>
      </div>
    </div>
  )
}
