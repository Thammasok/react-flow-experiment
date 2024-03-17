'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import React from 'react'

type ButtonToolProps = {
  children: React.ReactNode
  uniqueKey: string
  title: string
  selected: string | null
  onClick: () => void
}

export default function ButtonTool({
  uniqueKey,
  title,
  children,
  selected,
  onClick
}: ButtonToolProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          variant={selected === uniqueKey ? 'default' : 'ghost'}
          size='icon'
          onClick={onClick}
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side='right' className='z-10'>
        <span>{title}</span>
      </TooltipContent>
    </Tooltip>
  )
}
