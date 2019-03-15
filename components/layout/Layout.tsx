import Head from 'next/head';
import PropTypes from 'prop-types';
import LayoutStyles from './styles/LayoutStyles';

const Layout = ({ title, children }) => (
  <LayoutStyles>
    <Head>
      <title>{title}</title>
    </Head>

    {children}
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
