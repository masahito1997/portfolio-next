import React from 'react'
import Head from 'next/head'

import { Box, Container } from '@chakra-ui/react'
import Header from '../components/header'

type MainProps = {
  children: React.ReactNode
}
const Main: React.FC<MainProps> = ({ children }) => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Masahito Osako" />
        <meta name="author" content="masahito1997" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />

        { /* TODO: なぜかコンポーネント化したものを使用するとうまく表示されない */ }
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `
        }} />
      </Head>

      <Box as='main' pb={8}>
        <Container maxW='container.md' pt={2}>
          <Header />
          {children}
        </Container>
      </Box>
    </>
  )
}
export default Main
