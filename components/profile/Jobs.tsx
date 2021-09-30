import { useState } from 'react'
import PureModal from 'react-pure-modal'
import 'react-pure-modal/dist/react-pure-modal.min.css'
import styles from './Profile.module.scss'

const Jobs: React.FC = () => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <PureModal
        width="90%"
        header="Mi Cupo Stats"
        isOpen={modal}
        closeButton="x"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false)
          return true
        }}
      >
        <img src="/mi-cupo.png" />
      </PureModal>
      ;
      <div className={styles.jobs}>
        <h4>Projects / Jobs</h4>
        <div className={styles.gridTwo}>
          <div className={styles.year}>2011</div>
          <p>
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
          </p>
        </div>
        <div className={styles.gridTwo}>
          <div className={styles.year}>2012 - 2018</div>
          <p>
            Grandpa /{' '}
            <i>
              CEO, I created a software agency with my brother, we had a
              product, it was called Cottz, a platform for hospital quotes.
            </i>
          </p>
        </div>

        <div className={styles.gridTwo}>
          <div className={styles.year}>2019</div>
          <p>
            <a href="https://sapco.co/" target="_blank" rel="noreferrer">
              Sapco
            </a>{' '}
            / <i>FullStack dev - ReactJs, GraphQL, Yoga, Prisma, MongoDB.</i>
          </p>
        </div>
        <div className={styles.gridTwo}>
          <div className={styles.year}>2020 - August 2021</div>
          <p>
            <a
              href="https://networkhouse.live/"
              target="_blank"
              rel="noreferrer"
            >
              ModelNetwork SAS
            </a>{' '}
            /<i> Lead Developer - Next.js, Styled Components / FaunaDB.</i>
          </p>
        </div>

        <div className={styles.gridTwo}>
          <div className={styles.year}>Freelance work</div>
          <p>
            <a href="https://mi-cupo.com" target="_blank" rel="noreferrer">
              Mi Cupo
            </a>
            <i>
              Next.js/ TailwindCSS, appointment event system for local churches{' '}
              <span
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => setModal(true)}
              >
                heavily used
              </span>
            </i>
          </p>
        </div>

        <div className={styles.gridTwo}>
          <div className={styles.year}>March 2021 - Present</div>
          <p>
            <a href="https://mi-cupo.com" target="_blank" rel="noreferrer">
              Tinta Love
            </a>
            <i>
              Next.js/ TailwindCSS / Supabase, working in a marketplace for
              artists and tattoo studios.
            </i>
          </p>
        </div>
      </div>
    </>
  )
}

export default Jobs
