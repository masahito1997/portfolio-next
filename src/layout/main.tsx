import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Header from '../components/header'

type MainProps = {
  children: React.ReactNode
}
const Main: React.FC<MainProps> = ({ children }) => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID as string
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Masahito Osako" />
        <meta name="author" content="m11o" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        onReady={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(key: string, value: string | Date){window.dataLayer.push([key, value]);}
          gtag('js', new Date());
          gtag('config', GA_ID);
        }}
      />

      <main className='pb-8 flex justify-center bg-dark text-slate-200 font-body'>
        <div className='max-w-4xl p-4'>
          <Header />
          {children}
        </div>
      </main>
    </>
  )
}
export default Main
