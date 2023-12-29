import React from 'react'
import Header from "../src/components/header";

const custom404: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <h2 className='text-6xl text-center mb-2'>405</h2>
        <h3 className='text-xl text-center mb-6'>Page Not Found</h3>
        <p className='text-center'>ページが見つかりませんでした。</p>
        <p className='text-center'>URLが変更・削除されたか、現在ご利用できない可能性があります。</p>
      </div>
    </>
  )
}
export default custom404
