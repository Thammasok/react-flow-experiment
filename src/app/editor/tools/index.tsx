'use client'

import React from 'react'
import ButtonTool from '@/app/editor/tools/button-tool'
import { MenuList } from '@/app/editor/tools/menu-list'

type ToolsProps = {
  selected: string | null
  onSelect: (type: string) => void
}

export default function Tools({ selected, onSelect }: ToolsProps) {
  const strokeWidth = 1.5

  return (
    <div className='fixed top-[40%] translate-y-[-40%] left-3 bg-white rounded-md z-10 text-gray-800'>
      <ul className='p-2'>
        {MenuList.map((item) => (
          <li key={item.key}>
            <ButtonTool
              uniqueKey={item.key}
              title={item.title}
              selected={selected}
              onClick={() => onSelect(item.key)}
            >
              <item.icon strokeWidth={strokeWidth} />
            </ButtonTool>
          </li>
        ))}
      </ul>
    </div>
  )
}
