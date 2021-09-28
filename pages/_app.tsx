import Page from 'components/Page'
import { AppProps } from 'next/app'
import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default MyApp
