import React from 'react'

import { Heading, Box, Text } from '@chakra-ui/react'

const NotFound: React.FC = () => {
  return (
    <Box>
      <Heading as='h2' size='4xl' textAlign='center' mb={2}>404</Heading>
      <Heading as='h3' size='lg' textAlign='center' mb={6}>Page Not Found</Heading>
      <Text textAlign='center'>ページが見つかりませんでした。</Text>
      <Text textAlign='center'>URLが変更・削除されたか、現在ご利用できない可能性があります。</Text>
    </Box>
  )
}
export default NotFound
