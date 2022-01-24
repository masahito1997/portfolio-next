import React from 'react'
import Head from 'next/head'

import { Box, Container } from '@chakra-ui/react'
import Header from '../components/header'

type MainProps = {
  children: React.ReactNode
}
const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Masahito Osako's homepage" />
        <meta name="author" content="Masahito Osako" />
        <meta name="author" content="masahito1997" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Masahito Osako's Homepage" />
        <meta property="og:type" content="website" />
        <title>Masahito Osako - Homepage</title>
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
