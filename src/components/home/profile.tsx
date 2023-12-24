import React from 'react'

const Profile: React.FC = () => {
  return (
    <div className='flex justify-between items-start flex-row px-0 md:px-5 py-2'>
      <div className='w-full'>
        <h2 className='text-3xl font-bold'>Masahito Osako</h2>
        <p className='font-sm md:font-md mt-1'>
          Backend Engineer
          <span className='mx-1 md:mx-2'>/</span>
          <br className='block md:hidden' />
          Frontend Engineer
        </p>
      </div>
      <div>
        <span className='inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32'>
          <img className='w-full h-full rounded-full object-cover' src='/images/portfolio_icon1.jpg' />
        </span>
      </div>
    </div>
  )
}
export default Profile
