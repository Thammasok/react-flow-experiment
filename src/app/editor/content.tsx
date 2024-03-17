'use client'

import { useState } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import Board from '@/app/editor/board'
import Tools from '@/app/editor/tools'

type ContentProps = {}

export default function Content({}: ContentProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const onSelectAction = (type: string) => {
    if (type !== selectedNode) {
      setSelectedNode(type)
    } else {
      setSelectedNode(null)
    }
  }

  return (
    <TooltipProvider>
      <Tools selected={selectedNode} onSelect={onSelectAction} />
      <Board selected={selectedNode} />
    </TooltipProvider>
  )
}
