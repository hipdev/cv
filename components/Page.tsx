import React from 'react';
import Meta from './Meta';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/styles/generalStyles';

const theme = {
  shadowDark: '2px 1px 2px #c3c3c3',
  black: '#1b1f22',
  white: '#f1f1f1',
};

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          {this.props.children}
          <GlobalStyle theme={theme} />
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
