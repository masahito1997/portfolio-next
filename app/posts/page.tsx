import React, {useEffect} from 'react'
import { Text, LinkBox, Heading, Flex, Box, Tag } from '@chakra-ui/react'
import Link from 'next/link'

import { EntryCollection, EntryFields } from 'contentful'

import contentfulClient from '../../src/lib/contentful_client'
import Paginator from '../../src/components/pagination/paginator'
import {useSearchParams} from "next/navigation";
import {Metadata} from "next";

type blogCardProps = {
  id: string,
  title: string,
  tags: string[],
  description?: string,
  updatedAt: string
}

const POSTS_PER_PAGE = 10

const getPosts = async (currentPage?: number) => {
  const page = Number(currentPage || 1)
  const contentfulQuery = {
    content_type: 'blog',
    limit: POSTS_PER_PAGE,
    order: '-sys.createdAt',
    skip: (page - 1) * POSTS_PER_PAGE
  }

  const response = await contentfulClient.getEntries(contentfulQuery)
    .then((response: EntryCollection<EntryFields.Object>) => response)
    .catch(err => console.error(err))
  const items = response?.items
  if (!items) return { posts: [], total: 0, currentPage: page }

  const total = response?.total

  const posts = items.map(item => {
    const { id, updatedAt } = item.sys
    const { title, description, tags } = item.fields
    return { id, updatedAt, title, description, tags }
  })
  return { posts, total, currentPage: page }
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

export const metadata: Metadata = {
  title: '記事一覧 - Love Beautiful Code',
  description: '記事一覧'
}

const BlogList = async () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1);
  const { posts, total } = await getPosts(currentPage)

  return (
    <>
      {posts.length ? (
        <>
          {posts.map(post => {
            const { id, title, description, updatedAt, tags } = post
            return <BlogCard key={id} id={id} title={title} description={description} tags={tags} updatedAt={updatedAt} />
          })}
          <Box mt={8}>
            <Paginator path='/posts' total={total} currentPage={currentPage} limit={POSTS_PER_PAGE} />
          </Box>
        </>
      ) : (
        <Text fontSize='sm' color='gray.400' textAlign='center'>現在、表示できる記事が存在しません</Text>
      )}
    </>
  )
}
export default BlogList
