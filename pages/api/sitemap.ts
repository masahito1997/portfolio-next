import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap"

import { EntryFields, EntryCollection } from "contentful";
import contentfulClient from "../../src/lib/contentful_client";

const defaultPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/works', changefreq: 'daily' },
  { url: '/posts', changefreq: 'daily' },
  { url: 'resume', changefreq: 'monthly' }
]
const sitemap = async (_: NextApiRequest, res: NextApiResponse<string>) => {
  try {
    const sitemapStream = new SitemapStream({ hostname: process.env.NEXT_PUBLIC_HOST })
    const query = { content_type: 'blog', order: '-sys.createdAt' }
    const { items }: EntryCollection<EntryFields.Object> = await contentfulClient.getEntries(query)

    defaultPages.forEach(page => sitemapStream.write(page))
    items.forEach(item => {
      const id = item.sys.id
      const updatedAt = new Date(item.sys.updatedAt).toLocaleDateString('ja-JP')
      sitemapStream.write({
        url: `/posts/${id}`,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: updatedAt
      })
    })
    sitemapStream.end()
    const sitemapXML = (await streamToPromise(sitemapStream)).toString()

    res.writeHead(200, { 'Content-Type': 'application/xml' })
    res.end(sitemapXML)
  } catch(err) {
    console.error(err)
    res.send(JSON.stringify(err))
  }
}
export default sitemap
