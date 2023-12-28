import { EntryCollection, EntryFields } from 'contentful'

import { Metadata } from 'next'

import { metadata as metadataBase } from '../layout'
import contentfulClient from '../../src/lib/contentful_client'
import Paginator from '../../src/components/pagination/paginator'
import BlogCard from "./blogCard";
import {notFound} from "next/navigation";
import Header from "../../src/components/header";

export const metadata: Metadata = {
  ...metadataBase,
  title: '記事一覧 - Love Beautiful Code',
  description: '記事一覧'
}
type Blog = {
  id: string,
  title: string,
  tags: string[],
  description?: string,
  updatedAt: string
}

const getBlogs = async (page: number) => {
  const CONTENT_LIMIT = 10
  const contentfulQuery = {
    content_type: 'blog',
    limit: CONTENT_LIMIT,
    order: '-sys.createdAt',
    skip: (page - 1) * CONTENT_LIMIT
  }

  const response: EntryCollection<EntryFields.Object<Blog>> = await contentfulClient.getEntries(contentfulQuery)
  if (response.errors) {
    console.log(response.errors);
    return undefined;
  }

  const items = response.items
  const total = response.total
  const posts = items.map(item => {
    const { id, updatedAt } = item.sys
    const { title, description, tags } = item.fields
    return { id, updatedAt, title, description, tags }
  })
  return { posts, total, limit: CONTENT_LIMIT }
}

type BlogListProps = {
  searchParams: {
    page: string;
  }
}
const BlogList = async (props: BlogListProps) => {
  const searchParams = props.searchParams;
  const page = Number(searchParams.page || '1')
  const blogListObject = await getBlogs(page)
  if (!blogListObject) {
    notFound();
  }

  const { posts, total, limit } = blogListObject;

  return (
    <>
      <Header />
      {posts && posts.length ? (
        <>
          {posts.map(post => {
            const { id, title, description, updatedAt, tags } = post
            return <BlogCard key={id} id={id} title={title} description={description} tags={tags} updatedAt={updatedAt} />
          })}
          <div className='mt-8'>
            <Paginator path='/posts' total={total} currentPage={page} limit={limit} />
          </div>
        </>
      ) : (
        <p className='text-gray-400 text-center text-md'>現在、表示できる記事が存在しません</p>
      )}
    </>
  )
}
export default BlogList
