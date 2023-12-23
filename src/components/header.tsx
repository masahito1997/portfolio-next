import React from 'react'

import { Box, Heading, Stack, useColorModeValue, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, useColorMode, Link as ChakraLink } from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import Link from 'next/link'

type HeaderLinkProps = {
  href: string,
  children?: React.ReactNode
  target?: string
}
const HeaderLink: React.FC<HeaderLinkProps> = ({ href, target = '_self', children }) => {
  return <ChakraLink href={href} p={2} isExternal={target === '_blank'}>{children}</ChakraLink>
}

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as='header' w='100%' bg={useColorModeValue('#ffffff40', 'gray.800')} >
      <Box as='nav' w='100%' px={{ base: 0, md: 8 }} h='auto' display='flex' flexDirection={{ base: 'row-reverse', md: 'row' }} justifyContent='flex-start'>
        <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} justifyContent='end' alignItems='center' flexGrow={1}>
          <HeaderLink href='/'>TOP</HeaderLink>
          <HeaderLink href='/works'>Works</HeaderLink>
          <HeaderLink href='/posts'>Blog</HeaderLink>
          <HeaderLink href='/resume'>Resume</HeaderLink>
          <HeaderLink href='https://github.com/m11o' target='_blank'>Github</HeaderLink>
        </Stack>
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu isLazy>
            <MenuButton icon={<HamburgerIcon />} as={IconButton} variant='outline' />
            <MenuList display='flex' justifyContent='flex-end' flexDirection='column'>
              <MenuItem as={HeaderLink} href='/'>TOP</MenuItem>
              <MenuItem as={HeaderLink} href='/works'>Works</MenuItem>
              <MenuItem as={HeaderLink} href='/posts'>Blogs</MenuItem>
              <MenuItem as={HeaderLink} href='/resume'>Resume</MenuItem>
              <MenuItem as={HeaderLink} href='https://github.com/m11o' target='_blank'>Github</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Button onClick={toggleColorMode} ml={{ base: 0, md: 2 }} mr={{ base: 2, md: 0 }}>
          {colorMode == 'dark' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
      <Box>
        <Heading as='h1' textAlign='center' mt={{ base: 20, md: 40 }} mb={20} fontFamily='header' fontWeight='bold'>Love Beautiful Code</Heading>
      </Box>
    </Box>
  )
}

export default Header
