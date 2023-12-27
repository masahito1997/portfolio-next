import { Metadata } from 'next'

import contentfulClient from '../../../src/lib/contentful_client'
import {metadata as metadataBase} from "../../layout";
import BlogDetail from "./blogDetail";
import {notFound} from "next/navigation";

// TODO: 記事のタイトルとdescriptionを登録できるようにする
export const metadata: Metadata = {
  ...metadataBase,
  title: '記事 - Love Beautiful Code',
  description: '記事'
}

const getBlog = async (id: string) => {
  return await contentfulClient.getEntry<BlogType>(id).then((response) => {
    const { title, description, tags, markdown } = response.fields
    const updatedAt = new Date(response.sys.updatedAt).toLocaleDateString('ja-JP')

    return { title, description, tags, markdown, updatedAt }
  }).catch(err => {
    console.error(err)
    return undefined
  })
}

type BlogProps = {
  params: {
    id: string
  }
}
const Blog = async (props: BlogProps) => {
  const blogObject = await getBlog(props.params.id)

  if (!blogObject) {
    notFound();
  }

  const { title, description, tags, markdown, updatedAt } = blogObject;
  return <BlogDetail title={title} description={description} tags={tags} markdown={markdown} updatedAt={updatedAt} />
}
export default Blog;

type BlogType = {
  title: string;
  description?: string;
  tags: string[];
  markdown: string;
}
