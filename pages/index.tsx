import type { NextPage } from 'next'

import { Box } from '@chakra-ui/react'
import Profile from '../src/components/home/profile'
import Work from '../src/components/home/work'
import Bio from '../src/components/home/bio'
import Skill from '../src/components/home/skill'
import Love from '../src/components/home/love'

import HeadContent from '../src/components/head_content'

const Home: NextPage = () => {
  return (
    <>
      <HeadContent />
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
