import React from 'react'

import { Flex, Box, Heading, Text, Avatar, useBreakpointValue } from '@chakra-ui/react'

const Profile: React.FC = () => {
  const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' })

  return (
    <Flex justifyContent='space-between' alignItems='flex-start' flexDirection='row' px={{ base: 0, md: 5 }} py={2}>
      <Box w='100%'>
        <Heading as='h2' size='lg' fontFamily='heading'>Masahito Osako</Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }}>Backend Engineer / Frontend Engineer</Text>
      </Box>
      <Box>
        <Avatar size={avatarSize} showBorder src='/images/portfolio_icon1.jpg' />
      </Box>
    </Flex>
  )
}
export default Profile
