import React, { useEffect, useRef, useState } from 'react'
import { Handle, NodeResizer, Position } from 'reactflow'
import { useClickAnyWhere, useHover } from 'usehooks-ts'
import { COLORS } from '../constant/colors'
import { cn } from '@/lib/utils'

type EllipseProps = {}

export default function Ellipse({}: EllipseProps) {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const [isFocus, setIsFocus] = useState(false)

  useClickAnyWhere(() => {
    setIsFocus(false)
  })

  const handleFocusObject = () => {
    setIsFocus(true)
  }

  useEffect(() => {
    if (hoverRef) {
      handleFocusObject()
    }
  }, [])

  return (
    <div ref={hoverRef} className='w-full h-full'>
      {/* {isHover && isFocus && (
        <>
          <Handle type='target' position={Position.Top} />
          <Handle type='target' position={Position.Bottom} />
          <Handle type='target' position={Position.Left} />
          <Handle type='target' position={Position.Right} />
        </>
      )} */}

      <NodeResizer
        isVisible={isFocus}
        minWidth={40}
        minHeight={40}
        lineStyle={{ border: `1px solid ${COLORS.RESIZE.LINE}` }}
        handleStyle={{
          background: COLORS.RESIZE.DOT,
          border: `2px solid ${COLORS.RESIZE.BG}`,
          width: 10,
          height: 10
        }}
      />

      <div className='absolute w-full h-full top-[-50px]'>Tools</div>

      <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
        <circle
          r='245'
          cx='40'
          cy='40'
          fill='#7FDB70'
          stroke='#41B82E'
          stroke-width='10'
        />
      </svg>
      {/* <div
        className={cn(
          'p-2 rounded-full border w-full h-full',
          'bg-white border-[#b0b0b0]',
          'flex justify-center items-center align-middle'
        )}
      >
        ellipse
      </div> */}
    </div>
  )
}
