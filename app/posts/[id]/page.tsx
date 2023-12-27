import { Metadata } from 'next'

import contentfulClient from '../../../src/lib/contentful_client'
import {metadata as metadataBase} from "../../layout";
import NotFound from "../../not-found";
import BlogDetail from "./blogDetail";

// TODO: 記事のタイトルとdescriptionを登録できるようにする
export const metadata: Metadata = {
  ...metadataBase,
  title: '記事 - Love Beautiful Code',
  description: '記事'
}

type BlogProps = {
  params: {
    id: string
  }
}
const Blog = async (props: BlogProps) => {
  const { title, description, tags, markdown, updatedAt } = await getBlog(props.params.id)
  return <BlogDetail title={title} description={description} tags={tags} markdown={markdown} updatedAt={updatedAt} />
}
export default Blog;

type BlogType = {
  title: string;
  description?: string;
  tags: string[];
  markdown: string;
}

export const getBlog = async (id) => {
  return await contentfulClient.getEntry<BlogType>(id)
    .then((response) => {
      const { title, description, tags, markdown } = response.fields
      const updatedAt = new Date(response.sys.updatedAt).toLocaleDateString('ja-JP')

      return { title, description, tags, markdown, updatedAt }
    })
    .catch(err => {
      console.error(err)
      return NotFound();
    })
}
