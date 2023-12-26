import React from 'react'
import Head from 'next/head'

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
        <meta name="author" content="m11o" />
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
