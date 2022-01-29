import React from 'react'
import Head from 'next/head'

type HeadContentType = {
  title?: string,
  description?: string
  keywords?: string[]
}
const DEFAULT_TITLE = 'Homepage - Love Beautiful Code'
const DEFAULT_DESCRIPTION = 'Masahito Osako\'s Homepage'
const DEFAULT_KEYWORDS = ['']
const HeadContent: React.FC<HeadContentType> = ({ title, description, keywords }) => {
  if (!title) title = DEFAULT_TITLE
  if (!description) description = DEFAULT_DESCRIPTION
  if (!keywords || !keywords.length) keywords = DEFAULT_KEYWORDS

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join()} />
    </Head>
  )
}
export default HeadContent
