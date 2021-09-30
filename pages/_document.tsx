import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es" style={{ background: '#030308' }}>
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="style"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
