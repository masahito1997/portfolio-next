import React from 'react'
import { Components } from 'react-markdown'

const markdownTheme: Components = {
  h1: ({ children }: any) => <h1 className='mb-4 mt-10 text-2xl pb-0 border-b-0'>{children}</h1>,
  h2: ({ children }: any) => <h2 className='mb-8 mt-10 text-xl'><span className='pb-2 border-white border-b'>{children}</span></h2>,
  h3: ({ children }: any) => <h3 className='mb-4 mt-8 text-lg pb-0 border-b-0'>{children}</h3>,
  h4: ({ children }: any) => <h4 className='mb-4 mt-8 text-md pb-0 border-b-0'>{children}</h4>,
  h5: ({ children }: any) => <h5 className='mb-4 mt-6 text-sm pb-0 border-b-0'>{children}</h5>,
  h6: ({ children }: any) => <h6 className='mb-4 mt-6 text-xs pb-0 border-b-0'>{children}</h6>,
  table: ({ children }: any) => <table className='w-full border-collapse border-white'>{children}</table>,
  tr: ({ children }: any) => <tr className='border-collapse border-white border-b'>{children}</tr>,
  td: ({ children }: any) => <td className='py-4 px-10'>{children}</td>,
  ul: ({ children }: any) => <ul className='list-none ml-4 pl-4 mb-2'>{children}</ul>,
}
export default markdownTheme
