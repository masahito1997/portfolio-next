import React from 'react'

import { PanelContainer } from './common'
import Link from 'next/link'

const Work: React.FC = () => (
  <PanelContainer title='Works'>
    <p>
      九州大学を休学し、東京でインターン生としてエンジニアの世界に入ったあと、フルスタックエンジニアとしてメディアやECなどの様々なシステムに携わらせていただきました。復学後もお世話になった企業様からお仕事をいただき、さらに技術力を磨いてきました。<br />
      現在、大学にて4回生になり研究室配属されると、仕事の方はお休みさせていただきましたが、これまで培ったエンジニアの知識を用いて、マウスの神経活動データをリアルタイムで取得し、機械学習等で解析を行っております。また、神経活動のリアルタイムデータを取得するライブラリは発展途上のため、時間を見つけてコミットしております。
    </p>
    <div className='flex justify-center w-full mt-4'>
      <button className='bg-green-300 hover:bg-green-400 text-black font-bold rounded flex items-center px-4 py-2'>
        <Link href={'/works'}>Portfolio</Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
        </svg>
      </button>
    </div>
  </PanelContainer>
)
export default Work
