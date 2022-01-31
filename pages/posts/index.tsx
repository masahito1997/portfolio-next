import React from 'react'
import { Text, LinkBox, Heading, Flex, Box, Tag } from '@chakra-ui/react'
import Link from 'next/link'

import { EntryCollection, EntryFields } from 'contentful'

import { GetServerSideProps } from 'next'

import contentfulClient from '../../src/lib/contentful_client'
import HeadContent from '../../src/components/head_content'

type blogCardProps = {
  id: string,
  title: string,
  tags: string[],
  description?: string,
  updatedAt: string
}
const BlogCard: React.FC<blogCardProps> = ({ id, title, tags, description='', updatedAt }) => {
  const updatedAtDate = new Date(updatedAt)
  return (
    <LinkBox as='article' p={5} borderBottomWidth='1px' _hover={{
      borderWidth: '1px',
      rounded: 'md'
    }}>
      <Heading size='lg' as='h3' mb={3}>
        <Link href={`/posts/${id}`}>{title}</Link>
      </Heading>
      <Text fontSize='md' mb={2} noOfLines={[5, 3]}>{description}</Text>
      <Flex direction='row' justifyContent='space-between' alignItems='flex-end'>
        <Box>
          {tags.length ? tags.map((tag) => <Tag key={tag} mx={1} my={1}>{tag}</Tag>) : ''}
        </Box>
        <Text fontSize='sm' fontWeight='bold' px={4}>{updatedAtDate.toLocaleDateString('ja-JP')}</Text>
      </Flex>
    </LinkBox>
  )
}

type blogListType = {
  posts: blogCardProps[]
}
const BlogList: React.FC<blogListType> = ({ posts }) => {
  return (
    <>
      <HeadContent title='記事一覧 - Love Beautiful Code' description='記事一覧' />
      {posts.length ? (
        <>
          {posts.map(post => {
            const { id, title, description, updatedAt, tags } = post
            return <BlogCard key={id} id={id} title={title} description={description} tags={tags} updatedAt={updatedAt} />
          })
        }
        </>
      ) : (
        <Text fontSize='sm' color='gray.400' textAlign='center'>現在、表示できる記事が存在しません</Text>
      )}
    </>
  )
}
export default BlogList

export const getServerSideProps: GetServerSideProps = async () => {
  const query = {
    content_type: 'blog',
    limit: 10,
    order: '-sys.createdAt'
  }
  const items = await contentfulClient.getEntries(query)
    .then((response: EntryCollection<EntryFields.Object>) => response.items)
    .catch(err => console.error(err))

  if (!items) return { notFound: true }
  const posts = items.map(item => {
    const { id, updatedAt } = item.sys
    const { title, description, tags } = item.fields
    return { id, updatedAt, title, description, tags }
  })
  return { props: { posts: posts } }
}
