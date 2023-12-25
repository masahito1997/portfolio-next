import React, { ReactElement } from 'react'
import { EntryFields, Asset, Entry } from 'contentful'

import contentfulClient from '../../src/lib/contentful_client'
import HeadContent from '../../src/components/head_content'
import Link from "next/link";

type WorkState = {
  works: EntryFields.Array<EntryFields.Object>
  thumbnailLinks: { [key: string]: string }
}
export default class Work extends React.Component<{}, WorkState> {
  state: WorkState = {
    works: [],
    thumbnailLinks: {}
  }

  componentDidMount(): void {
    const query = {
      content_type: 'work',
      order: '-sys.createdAt'
    }

    contentfulClient
      .getEntries(query)
      .then((response: EntryFields.Object): Promise<string[]> => {
        this.setState({ works: response.items })

        return new Promise((resolve, reject) => {
          if (response.items.length) {
            resolve(
              response.items.map((work: Entry<EntryFields.Object>) => {
                const { thumbnail } = work.fields
                if (!thumbnail) return

                return thumbnail.sys.id
              })
            )
          } else {
            reject(Error('error: without items.'))
          }
        })
      })
      .then((thumbnailIds: string[]): Promise<Promise<Asset>[]> => {
        const thumbnails = thumbnailIds.map((thumnailId: string) => contentfulClient.getAsset(thumnailId))
        return new Promise(resolve => resolve(thumbnails))
      })
      .then((thumbnails: Promise<Asset>[]) => {
        Promise.all(thumbnails).then((assets: Asset[]) => {
          assets.forEach((asset: Asset) => {
            this.setState((prevState) => {
              prevState.thumbnailLinks[asset.sys.id] = asset.fields.file.url
              return prevState
            })
          })
        })
        .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }

  render(): ReactElement {
    return (
      <>
        <HeadContent title='Works - Love Beautiful Code' description='作品一覧' />
        {this.state.works.length || this.state.thumbnailLinks.length ? (
          <div className='w-full'>
            <h1 className='text-3xl font-bold mb-8'>ポートフォリオ</h1>
            <div className='flex flex-col md:flex-row justify-between'>
              {this.state.works.map((work: EntryFields.Object) => {
                const { name, thumbnail, libs, link, description } = work.fields

                return (
                  <article key={name} className='relative border-2 rounded h-auto max-h-[400px] md:max-h-[500px] w-full md:w-5/12 mb-5 md:mb-0'>
                    <img src={thumbnail && thumbnail.sys.id ? (this.state.thumbnailLinks[thumbnail.sys.id]) : '/images/portfolio_icon1.jpg'} className='border-b-2 rounded-t-md h-1/2 w-full object-fill' />
                    <div className='p-4'>
                      <h4 className='mb-2 text-xl font-bold'>
                        <Link href={link} passHref className='static before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-0'>
                          {name}
                        </Link>
                      </h4>
                      <p className='text-sm line-clamp-4 md:line-clamp-3'>{description}</p>
                      <div className='flex flex-wrap mt-4 items-baseline'>
                        <h6 className='text-sm mr-1 font-bold'>使用技術:</h6>
                        {libs.length ? (
                          libs.map((lib: string) => <span key={lib} className='rounded bg-green-400/20 text-green-300 px-2 py-0.5 text-xs mr-1 mb-1'>{lib}</span>)
                        ) : ''}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        ) : (
          <p className='text-md text-gray-400 text-center'>現在、表示できるPortfolioがありません</p>
        )}
      </>
    )
  }
}
