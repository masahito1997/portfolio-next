import contentfulClient from '../../src/lib/contentful_client'
import Link from "next/link";

import { metadata as metadataBase } from "../layout";
import {Metadata} from "next";

type WorkFieldType = {
  name: string;
  thumbnail: {
    sys: {
      id: string
    }
  };
  libs: string[];
  link: string;
  description: string;
}
type WorkType = {
  name: string;
  libs: string[];
  link: string;
  description: string;
  thumbnailLink?: string;
}

const getWorks = async () => {
  const query = {
    content_type: 'work',
    order: '-sys.createdAt'
  }
  const worksResponse = await contentfulClient.getEntries<WorkFieldType>(query)
  const works = worksResponse.items

  const thumbnailLinks: Promise<WorkType>[] = works.map(work => {
    const { name, thumbnail, libs, link, description } = work.fields

    return new Promise((resolve, _reject) => {
      if (thumbnail) {
        contentfulClient.getAsset(thumbnail.sys.id).then(asset => {
          const result: WorkType = {
            name,
            libs,
            link,
            description,
            thumbnailLink: asset.fields.file.url
          }
          resolve(result)
        })
      } else {
        const result: WorkType = {
          name,
          libs,
          link,
          description,
        }
        resolve(result)
      }
    })
  })

  return await Promise.all(thumbnailLinks);
}

export const metadata: Metadata = {
  ...metadataBase,
  title: 'Works - Love Beautiful Code',
  description: '作品一覧'
}

const Work = async () => {
  const works = await getWorks();

  return (
    <>
      {works && works.length ? (
        <div className='w-full'>
          <h1 className='text-3xl font-bold mb-8'>ポートフォリオ</h1>
          <div className='flex flex-col md:flex-row justify-between'>
            {works.map((work) => {
              const { name, libs, link, description, thumbnailLink } = work

              return (
                <article key={name} className='relative border-2 rounded h-auto max-h-[400px] md:max-h-[500px] w-full md:w-5/12 mb-5 md:mb-0'>
                  <img src={thumbnailLink ? (thumbnailLink) : '/images/portfolio_icon1.jpg'} className='border-b-2 rounded-t-md h-1/2 w-full object-fill' />
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
export default Work;
