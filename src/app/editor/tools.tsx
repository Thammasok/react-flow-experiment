'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import {
  Cable,
  Database,
  MousePointer,
  MousePointerClick,
  RouteIcon
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
  return (
    <div className='fixed top-[40%] translate-y-[-40%] left-3 bg-white rounded-md z-10 text-gray-800'>
      <ul className='p-2'>
        <li>
          <ButtonTool title='Move'>
            <MousePointer />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='Actions'>
            <MousePointerClick />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='Flows'>
            <RouteIcon />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='APIs Connects'>
            <Cable />
          </ButtonTool>
        </li>
        <li>
          <ButtonTool title='Database'>
            <Database />
          </ButtonTool>
        </li>
      </ul>
    </div>
  )
}
