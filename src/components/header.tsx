'use client'

import React, {useState} from 'react'

import { Dancing_Script } from 'next/font/google'

import Link from 'next/link'

const dancingScriptFont = Dancing_Script({
  weight: '700',
  style: 'normal',
  display: 'swap',
  subsets: ['latin', 'latin-ext', 'vietnamese']
})

type HeaderLinkProps = {
  href: string,
  children?: React.ReactNode
  target?: string
}
const HeaderLink: React.FC<HeaderLinkProps> = ({ href, target = '_self', children }) => {
  return <Link href={href} passHref={target === '_blank'} className='p-2 hover:underline'>{children}</Link>
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const clickMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='w-full bg-dark'>
      <nav className='w-full px-0 md:px-4 h-auto flex flex-row-reverse md:flex-row justify-start'>
        <div className='hidden md:flex justify-end items-center flex-grow'>
          <HeaderLink href='/'>TOP</HeaderLink>
          <HeaderLink href='/works'>Works</HeaderLink>
          <HeaderLink href='/posts'>Blog</HeaderLink>
          <HeaderLink href='/resume'>Resume</HeaderLink>
          <HeaderLink href='https://github.com/m11o' target='_blank'>Github</HeaderLink>
        </div>
        <div className='block md:hidden relative'>
          <button onClick={clickMenuHandler}
                  className='flex justify-center items-center border rounded-md border-gray-600 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'} justify-end flex-col absolute top-12 right-0 w-48 border border-gray-500 rounded-lg bg-gray-700 p-2 z-50 drop-shadow-lg`}>
            <HeaderLink href='/'>TOP</HeaderLink>
            <HeaderLink href='/works'>Works</HeaderLink>
            <HeaderLink href='/posts'>Blog</HeaderLink>
            <HeaderLink href='/resume'>Resume</HeaderLink>
            <HeaderLink href='https://github.com/m11o' target='_blank'>Github</HeaderLink>
          </div>
        </div>
      </nav>
      <div>
        <h1 className={`text-center mt-20 md:mt-40 mb-20 font-bold text-3xl md:text-4xl ${dancingScriptFont.className}`}>
          Love Beautiful Code
        </h1>
      </div>
    </header>
  )
}

export default Header
