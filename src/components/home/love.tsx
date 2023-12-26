import React from 'react'

import { PanelContainer } from './common'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Love: React.FC = () => (
  <PanelContainer title='Loves' icon={<BsFillSuitHeartFill style={{ 'display': 'inline', 'marginLeft': '5px', 'width': '0.8em' }} />}>
    <p>
      Music(RADWIMPS, Blue Wednessday), Comic(ハイキュー, ONE PIECE, ブルーピリオド), Movie(Interstellar, Inception, ベスト・キッド)
    </p>
  </PanelContainer>
)
export default Love
