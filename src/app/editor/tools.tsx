'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import {
  CableIcon,
  DatabaseIcon,
  ImageIcon,
  MousePointerClickIcon,
  MousePointerIcon,
  RouteIcon,
  StickyNoteIcon
} from 'lucide-react'
import React from 'react'

type ToolsProps = {}

const ButtonTool = ({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant={'ghost'} size='icon'>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side='right' className='z-10'>
        <span>{title}</span>
      </TooltipContent>
    </Tooltip>
  )
}

export default function Tools({}: ToolsProps) {
  const strokeWidth = 1.5

  return (
    <div className='fixed top-[40%] translate-y-[-40%] left-3 bg-white rounded-md z-10 text-gray-800'>
      <ul className='p-2'>
        <li>
          <ButtonTool title='Move'>
            <MousePointerIcon strokeWidth={strokeWidth} />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='Actions'>
            <MousePointerClickIcon strokeWidth={strokeWidth} />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='Image'>
            <ImageIcon strokeWidth={strokeWidth} />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='Sticky Note'>
            <StickyNoteIcon strokeWidth={strokeWidth} />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='Flows'>
            <RouteIcon strokeWidth={strokeWidth} />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='APIs Connects'>
            <CableIcon strokeWidth={strokeWidth} />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='Database'>
            <DatabaseIcon strokeWidth={strokeWidth} />
          </ButtonTool>
        </li>
      </ul>
    </div>
  )
}
