import React from 'react'

type panelContainerProps = {
  children: React.ReactNode,
  title: string,
  icon?: React.ReactNode
}

const PanelContainer: React.FC<panelContainerProps> = ({ title, children, icon = null }) => (
  <div className='flex flex-col items-start mt-10 px-0 md:px-5 py-2'>
    <h3 className='border-b-2 border-b-[#ddd] mb-4 font-bold text-xl'>
      {title}
      {icon ? icon : ''}
    </h3>

    {children}
  </div>
)
export {
  PanelContainer
}
