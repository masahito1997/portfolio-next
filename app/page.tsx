import type { NextPage } from 'next'

import Profile from '../src/components/home/profile'
import Work from '../src/components/home/work'
import Bio from '../src/components/home/bio'
import Skill from '../src/components/home/skill'
import Love from '../src/components/home/love'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Profile />
        <Work />
        <Bio />
        <Skill />
        <Love />
      </div>
    </>
  )
}
export default Home
