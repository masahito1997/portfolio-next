import React from 'react'
import Head from 'next/head'

type HeadContentType = {
  title?: string,
  description?: string
  tags?: string[]
}
const DEFAULT_TITLE = 'Homepage - Love Beautiful Code'
const DEFAULT_DESCRIPTION = 'Masahito Osako\'s Homepage'
const DEFAULT_TAGS = ['']
const HeadContent: React.FC<HeadContentType> = ({ title, description, tags }) => {
  if (!title) title = DEFAULT_TITLE
  if (!description) description = DEFAULT_DESCRIPTION
  if (!tags || tags.length) tags = DEFAULT_TAGS

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} />
      <meta name="tags" content={tags.join()} />
    </Head>
  )
}
export default HeadContent
