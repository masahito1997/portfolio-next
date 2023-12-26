import React from 'react'
import Head from 'next/head'

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
        <meta name="author" content="Masahito Osako" />
        <meta name="author" content="m11o" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
      </Head>

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
