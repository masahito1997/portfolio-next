'use client'

import * as contentful from 'contentful'

// TODO: add environments
const contentfulClient = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY || ''
})
export default contentfulClient
