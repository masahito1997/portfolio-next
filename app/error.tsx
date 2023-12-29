'use client'

import React from 'react'
import Header from "../src/components/header";

const custom500: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <h2 className='text-6xl text-center mb-2'>500</h2>
        <h3 className='text-xl text-center mb-6'>Opps, Something is wrong</h3>
      </div>
    </>
  )
}
export default custom500
