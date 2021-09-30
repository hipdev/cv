import Jobs from './Jobs'
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

      <Jobs />

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
