import React, { ReactNode } from "react";
import Link from 'next/link'

function AdminApp({ children }: { children: ReactNode }) {
  return (
    <>
      <header className='w-full bg-dark'>
        <nav className='w-full px-0 md:px-4 h-auto flex flex-row justify-start'>
          <div className='flex justify-center items-center flex-grow'>
            <Link href='./posts' className='hover:underline'>ブログ一覧</Link>
          </div>
        </nav>
      </header>
      <div className='mt-4'>
        {children}
      </div>
    </>
  )
}

export default AdminApp
