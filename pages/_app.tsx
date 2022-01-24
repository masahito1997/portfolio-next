import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Main from '../src/layout/main'

import theme from '../src/lib/theme';
import Fonts from '../src/lib/font';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
