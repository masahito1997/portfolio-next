import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Main from '../src/layout/main'

import Fonts from '../src/lib/font';

declare global {
  interface Window {
    dataLayer: Array<any>;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts/>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
)
}

export default MyApp
