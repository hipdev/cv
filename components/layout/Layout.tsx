import Head from 'next/head'
import PropTypes from 'prop-types'
import styles from './Layout.module.scss'

const Layout = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
    </Head>

    <div className={styles.content}>
      {children}

      <footer>JD</footer>
      <p className={styles.copy}>
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
      <div className={styles.fixed}>
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

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  title: 'Julián David CV',
}

export default Layout
