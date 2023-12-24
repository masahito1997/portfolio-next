import React from 'react'
import {Box, ChakraProvider, ColorModeScript, Container} from "@chakra-ui/react";
import Header from "../src/components/header";
import { Metadata } from "next";
import theme from "../src/lib/theme";
import Fonts from "../src/lib/font";

const DEFAULT_TITLE = 'Homepage - Love Beautiful Code'
const DEFAULT_DESCRIPTION = 'Masahito Osako\'s Homepage'
const DEFAULT_KEYWORDS = ['']
export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: 'Masahit Osako' }, { name: 'm11o' }],
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang='ja'>
      <ChakraProvider theme={theme}>
        <Fonts />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <head>
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
        </head>

        <body>
          <Box as='main' pb={8}>
            <Container maxW='container.md' pt={2}>
              <Header />
              {children}
            </Container>
          </Box>
        </body>
      </ChakraProvider>
    </html>
  )
}
export default RootLayout