import type { NextPage } from 'next'

import { Box } from '@chakra-ui/react'
import Profile from '../src/components/home/profile'
import Work from '../src/components/home/work'
import Bio from '../src/components/home/bio'
import Skill from '../src/components/home/skill'
import Love from '../src/components/home/love'

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <Profile />
        <Work />
        <Bio />
        <Skill />
        <Love />
      </Box>
    </>
  )
}
export default Home
