import Head from 'next/head';
import PropTypes from 'prop-types';
import LayoutStyles from './styles/LayoutStyles';

const Layout = ({ title, children }) => (
  <LayoutStyles>
    <Head>
      <title>{title}</title>
    </Head>

    <div className="content">
      {children}

      <footer>JÁ</footer>
      <p className="copy">
        MIT License -{' '}
        <a
          href="https://gitlab.com/julianfullstackdev/cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </p>
    </div>

    <aside>
      <div className="fixed">
        <h1>Hi,</h1>
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
            Medellín - Colombia
          </p>
        </div>

        <h2>Thank you!</h2>
      </div>
    </aside>
  </LayoutStyles>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: 'Julián Álvarez CV',
};

export default Layout;
