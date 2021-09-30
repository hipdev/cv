import styles from './Profile.module.scss'
import Skills from './Skills'

const Profile: React.FC = () => {
  console.warn('Hi, will be great to talk :) --> (+57) 317 735 86 56')
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <div>
          <h3>Julián David</h3>
          <span>FullStack developer</span>
        </div>
        <div className="jus-end">
          <img src="/me.jpg" title="Julián Álvarez" />
        </div>
      </div>

      <Skills />

      <div className={styles.jobs}>
        <h4>Projects / Jobs</h4>
        <div className={styles.gridTwo}>
          <div>2011</div>
          <div>
            <a
              href="https://lasfincasdelcafe.com"
              target="_blank"
              rel="noreferrer"
            >
              LasFincasDelCafe
            </a>
            /{' '}
            <i>
              My first web project, still working for that client, even after 11
              years, made with PHP and MySQL
            </i>
          </div>
        </div>
        <div className={styles.gridTwo}>
          <div>2012 - 2018</div>
          <div>
            Grandpa / <i>CEO, created my own sofware company.</i>
          </div>
        </div>

        <div className={styles.gridTwo}>
          <div>2019</div>
          <div>
            Sapco /{' '}
            <i>FullStack dev - ReactJs, GraphQL, Yoga, Prisma, MongoDB.</i>
          </div>
        </div>
        <div className={styles.gridTwo}>
          <div>2020 - August 2021</div>
          <div>
            ModelNetwork SAS
            <i>Lead Developer - Next.js, TailwindCSS.</i>
          </div>
        </div>
        <div className={styles.gridTwo}>
          <div>Freelance work</div>
          <div>
            <a href="https://mi-cupo.com" target="_blank" rel="noreferrer">
              Mi Cupo
            </a>
            <i>
              Next.js/ TailwindCSS, appointment event system for local churches
            </i>
          </div>
        </div>
      </div>

      <div className={styles.background}>
        <h4>Background</h4>

        <details>
          <summary>I like teaching...</summary>
          <p>
            I learned to program as a deliveryman on my motorcycle in 2011, then
            I taught my younger brother, today he works for Vercel and it is my
            greatest pride, also my cousin and 4 other friends, we started a
            company that lasted 5 years, occasionally I teach people to program
            for free, maybe I'll finish making a youtube channel, who knows, I'm
            kind of shy.
          </p>
          <p>I like to learn and apply as a team, that's me.</p>
        </details>
      </div>

      <div className={styles.studies}>
        <div>
          <h4>Related</h4>
          <div>
            <p>
              Github: <a>Hip Dev</a>
            </p>
            <p>
              Personal project: <a>Tinta Love</a>
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
    </div>
  )
}

export default Profile
