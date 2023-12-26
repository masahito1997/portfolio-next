import React from 'react'

import { paginatorType, FirstPage, PreviousPage, NextPage, LastPage, NumberPager } from './page_operator'

const Paginator: React.FC<paginatorType> = (props) => {
  if (props.total <= props.limit) return <></>

  const numbers = Array(NumberPager.calcLastPageNumber(props.total, props.limit)).fill(0).map((_, i) => i + 1)
  return (
    <div className='flex justify-center w-full'>
      <div className='inline-flex'>
        <FirstPage {...props} />
        <PreviousPage {...props} />
        {numbers.map((number) => (
          <NumberPager number={number} key={number} {...props}></NumberPager>
        ))}
        <NextPage {...props} />
        <LastPage {...props} />
      </div>
    </div>
  )
}
export default Paginator
