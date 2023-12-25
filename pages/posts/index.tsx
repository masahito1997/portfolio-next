import React from 'react'
import Link from 'next/link'

import { EntryCollection, EntryFields } from 'contentful'

import { GetServerSideProps } from 'next'

import contentfulClient from '../../src/lib/contentful_client'
import HeadContent from '../../src/components/head_content'
import Paginator from '../../src/components/pagination/paginator'

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
    <article className='p-5 border-b relative hover:bg-gray-700/40'>
      <h3 className='text-2xl mb-3'>
        <Link href={`/posts/${id}`} className='before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-0'>{title}</Link>
      </h3>
      <p className='text-md line-clamp-5 md:line-clamp-3'>{description}</p>
      <div className='flex justify-between items-baseline mt-4'>
        <div>
          {tags.length && tags.map((tag) => <span key={tag} className='rounded bg-gray-400/20 text-gray-300 px-2 py-1 text-xs mr-2 mb-1'>{tag}</span>)}
        </div>
        <p className='text-sm font-bold px-4'>{updatedAtDate.toLocaleDateString('ja-JP')}</p>
      </div>
    </article>
  )
}

type blogListType = {
  posts: blogCardProps[],
  total: number,
  currentPage: number,
  limit: number
}
const BlogList: React.FC<blogListType> = ({ posts, total, currentPage, limit }) => {
  return (
    <>
      <HeadContent title='記事一覧 - Love Beautiful Code' description='記事一覧' />
      {posts.length ? (
        <>
          {posts.map(post => {
            const { id, title, description, updatedAt, tags } = post
            return <BlogCard key={id} id={id} title={title} description={description} tags={tags} updatedAt={updatedAt} />
          })}
          <div className='mt-8'>
            <Paginator path='/posts' total={total} currentPage={currentPage} limit={limit} />
          </div>
        </>
      ) : (
        <p className='text-gray-400 text-center text-md'>現在、表示できる記事が存在しません</p>
      )}
    </>
  )
}
export default BlogList

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const CONTENT_LIMIT = 10
  const page = Number(query?.page || 1)
  const contentfulQuery = {
    content_type: 'blog',
    limit: CONTENT_LIMIT,
    order: '-sys.createdAt',
    skip: (page - 1) * CONTENT_LIMIT
  }
  const response = await contentfulClient.getEntries(contentfulQuery)
    .then((response: EntryCollection<EntryFields.Object>) => response)
    .catch(err => console.error(err))
  const items = response?.items
  const total = response?.total
  if (!items) return { notFound: true }
  const posts = items.map(item => {
    const { id, updatedAt } = item.sys
    const { title, description, tags } = item.fields
    return { id, updatedAt, title, description, tags }
  })
  return { props: { posts: posts, currentPage: page, total, limit: CONTENT_LIMIT } }
}
