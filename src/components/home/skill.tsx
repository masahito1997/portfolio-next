import React from 'react'

import { PanelContainer } from './common'

type progressProps = {
  value: number,
}
const Progress: React.FC<progressProps> = ({ value }) => {
  return (
    <div className="overflow-hidden relative bg-gray-300/15 h-3">
      <div style={{ width: `${value}%` }} className="h-full bg-gray-200 bg-progress-gradient bg-progress"></div>
    </div>
  )
}
type skillContentProps = {
  name: string,
  value: number
}
const SkillContent: React.FC<skillContentProps> = ({name, value}) => (
  <div className='w-full flex items-center mb-4'>
    <p className='mr-2 md:mr-5 font-bold w-[170px] md:w-40 text-sm md:text-md'>{name}</p>
    <div className='w-full mr-2'>
      <Progress value={value} />
    </div>
    <p className='font-bold text-sm md:text-md'>{`${value}%`}</p>
  </div>
)
const skills: { [s: string]: number } = {
  'Ruby': 95,
  'Ruby on Rails': 95,
  'javascript': 90,
  'typescript': 90,
  'HTML5/CSS3': 90,
  'React.js': 80,
  'SCSS': 80,
  'Python3': 80,
  'Docker': 65,
}
const Skill: React.FC = () => (
  <PanelContainer title='Skills'>
    <div className='w-full flex flex-col items-start'>
      {Object.keys(skills).map(key => <SkillContent name={key} value={skills[key]} key={key} />)}
    </div>
  </PanelContainer>
)
export default Skill
