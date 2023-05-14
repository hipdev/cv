'use client'

import { useState } from 'react'
import PureModal from 'react-pure-modal'
import 'react-pure-modal/dist/react-pure-modal.min.css'
import styles from '../../page.module.scss'

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
        <img src="/cupo.png" />
      </PureModal>

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
              My first web project, still working for that client, even after 12
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
              product, it was called{' '}
              <a
                href="https://www.youtube.com/watch?v=Iu6VZ-5BYjE&ab_channel=ParqueE"
                target="_blank"
                rel="noreferrer"
              >
                Cottz.
              </a>
              A platform for hospital quotes.
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
            <b>ModelNetwork SAS</b>:
            <i> Lead Developer - Next.js, Styled Components / FaunaDB.</i>
          </p>
        </div>

        <div className={styles.gridTwo}>
          <div className={styles.year}>Freelance work</div>
          <p>
            <strong>Mi Cupo: </strong>
            <i>
              Next.js / TailwindCSS, appointment event system for local churches
              during the pandemic, it was{' '}
              <span
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => setModal(true)}
              >
                heavily used.
              </span>
            </i>
          </p>
        </div>

        <div className={styles.gridTwo}>
          <div className={styles.year}>March 2021 - Octuber 2021</div>
          <p>
            <a href="https://tintalove.com" target="_blank" rel="noreferrer">
              Tinta Love
            </a>
            <i>
              Next.js/ TailwindCSS / Supabase, working in a marketplace for
              artists and tattoo studios.
            </i>
          </p>
        </div>
        <div className={styles.gridTwo}>
          <div className={styles.year}>Octuber 2021 - April 2023</div>
          <p>
            <a href="https://wander.com" target="_blank" rel="noreferrer">
              Wander
            </a>
            <i>Lead Web developer: Next.js / TailwindCSS/ DatoCMS / GraphQL.</i>{' '}
            <br /> I was in charge of the Wander website version. I feel very
            proud to have built this website with a great team behind.
          </p>
        </div>
      </div>
    </>
  )
}

export default Jobs
