import '../styles/globals.css'

import {Metadata} from "next";
import { M_PLUS_Rounded_1c } from 'next/font/google'

import { ReactNode } from "react";

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['400', '700'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin', 'latin-ext', 'vietnamese']
})

const DEFAULT_TITLE = 'Homepage - Love Beautiful Code'
const DEFAULT_DESCRIPTION = 'Masahito Osako\'s Homepage'
const DEFAULT_KEYWORDS = ['']
export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: 'Masahit Osako' }, { name: 'm11o' }],
}

function MyApp({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body>
        <main className={`pb-8 flex justify-center bg-dark text-slate-200 ${mPlusRounded1c.className}`}>
          <div className='max-w-4xl md:min-w-4xl p-4'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

export default MyApp
