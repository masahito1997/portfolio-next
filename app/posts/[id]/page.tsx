import React from 'react'
import {Heading, Flex, Tag, Text, Box, OrderedList, ListItem, Table} from '@chakra-ui/react'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { Entry, EntryFields } from 'contentful'
import { useSearchParams, notFound } from 'next/navigation'

import contentfulClient from '../../../src/lib/contentful_client'
import markdownTheme from '../../../src/lib/markdown_theme'

type blogDetailProps = {
  title: string,
  description: string,
  tags: string[],
  markdown: string,
  updatedAt: string
}

const getBlog = async (id: string) => {

  return await contentfulClient.getEntry(id)
    .then((response: Entry<EntryFields.Object>) => {
      const { title, description, tags, markdown } = response.fields
      const updatedAt = new Date(response.sys.updatedAt).toLocaleDateString('ja-JP')

      return { title, description, tags, markdown, updatedAt }
    })
    .catch(err => {
      console.error(err)
      return { notFound: true, title: '', description: '', tags: [], markdown: '', updatedAt: '' }
    })
}

const BlogDetail = async () => {
  const searchParams = useSearchParams();
  if (!searchParams) return notFound();

  const id = searchParams.get('id')!;

  const { title, description, tags, markdown, updatedAt }: blogDetailProps = await getBlog(id);

  const customMarkdownTheme = {
    ...markdownTheme,
    p: (props: any) => <Text mb={4}>{props.children}</Text>,
    ol: (props: any) => <OrderedList mb={4}>{props.children}</OrderedList>,
    li: (props: any) => <ListItem mb={2}>{props.children}</ListItem>,
    table: (props: any) => <Table mb={4}>{props.children}</Table>
  }

  return (
    <>
      <Box mb={{ base: 10, md: 20 }}>
        <Heading as='h1' size='xl' mb={{ base: 2, md: 4 }}>{title}</Heading>
        <Flex justifyContent='space-between' alignItems='flex-end'>
          <Box>
            {tags.length ? (tags.map((tag) => <Tag key={tag} mx={1} my={1}>{tag}</Tag>)) : ''}
          </Box>
          <Text fontWeight='bold'>{updatedAt}</Text>
        </Flex>
      </Box>
      <ReactMarkdown components={ChakraUIRenderer(customMarkdownTheme)} remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
    </>
  )
}
export default BlogDetail
