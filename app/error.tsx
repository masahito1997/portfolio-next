'use client'

import React from 'react'

import { Box, Heading } from '@chakra-ui/react'

const Error: React.FC = () => {
  return (
    <Box>
      <Heading as='h2' size='4xl' textAlign='center' mb={2}>500</Heading>
      <Heading as='h3' size='lg' textAlign='center' mb={6}>Opps, Something is wrong</Heading>
    </Box>
  )
}
export default Error
