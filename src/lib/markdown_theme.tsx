import React from 'react'
import { Heading } from "@chakra-ui/react";
import { Components } from 'react-markdown'
import { HeadingProps } from 'react-markdown/lib/ast-to-react'

type headingThemeProps = {
  level: number,
  children?: React.ReactNode
}
const headingTheme: React.FC<headingThemeProps> = (props, as) => {
  const { level, children } = props
  const sizes = ['xl', 'lg', 'md', 'sm', 'xs', 'xs']
  let marginTop
  if (['h1', 'h2'].includes(as)) {
    marginTop = 10
  } else if (['h3', 'h4'].includes(as)) {
    marginTop = 6
  } else {
    marginTop = 4
  }
  return (
    <Heading
      mb={4}
      mt={marginTop}
      size={sizes[level-1]}
      as={as}
      pb={as === 'h2' ? 2 : 0}
      borderBottomWidth={as === 'h2' ? 1 : 0}
    >
      {children}
    </Heading>
  )
}

const markdownTheme: Components = {
  h1: (props: HeadingProps) => headingTheme(props, 'h1'),
  h2: (props: HeadingProps) => headingTheme(props, 'h2'),
  h3: (props: HeadingProps) => headingTheme(props, 'h3'),
  h4: (props: HeadingProps) => headingTheme(props, 'h4'),
  h5: (props: HeadingProps) => headingTheme(props, 'h5'),
  h6: (props: HeadingProps) => headingTheme(props, 'h6'),
}
export default markdownTheme
