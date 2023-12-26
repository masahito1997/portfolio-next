import React from 'react'

import { PanelContainer } from './common'
import Link from 'next/link'

type bioItemProps = {
  year: string,
  children: React.ReactNode
}

const BioItem: React.FC<bioItemProps> = ({ year, children }) => (
  <div className='flex mb-2'>
    <p className='font-extrabold mr-5'>{year}</p>
    <p>{children}</p>
  </div>
)

const SHOBON_ACTION_URL = 'https://apps.apple.com/jp/app/%E3%81%97%E3%82%87%E3%81%BC%E3%82%93%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3-%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB/id894330337'

const Bio: React.FC = () => (
  <PanelContainer title='Bio'>
    <div className='flex flex-col items-start w-full'>
      <BioItem year='1997'>鹿児島県南九州市に誕生</BioItem>
      <BioItem year='2007'>
        ゲーム
        <span className="inline-flex items-center rounded-md bg-orange-600/15 px-2 py-1 text-xs font-bold text-red-200 ring-1 ring-inset ring-red-600/10 mx-1">
          <Link href={SHOBON_ACTION_URL} passHref>
            しょぼんのアクション
          </Link>
        </span>
        のソースコードを偶然見つけたことからプログラミングにのめり込む。C/C++に苦戦。
      </BioItem>
      <BioItem year='2015'>
        九州大学理学部生物学科&nbsp;入学
      </BioItem>
      <BioItem year='2017'>大学休学。上京してバックエンドエンジニアとしてキャリアをスタート。</BioItem>
      <BioItem year='2018'>フリーランスとして様々な企業のプロジェクトに参画</BioItem>
      <BioItem year='2019'>大学復学のため、福岡移住。フリーランスとしての活動は継続。</BioItem>
      <BioItem year='2021'>九州大学 行動神経科学研究室 所属</BioItem>
      <BioItem year='2022'>ヘイ株式会社 入社</BioItem>
    </div>
  </PanelContainer>
)
export default Bio
