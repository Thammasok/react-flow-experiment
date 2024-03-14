import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  Handle,
  NodeResizer,
  Position,
  ResizeDragEvent,
  ResizeParams
} from 'reactflow'
import { useClickAnyWhere, useHover } from 'usehooks-ts'
import { COLORS } from '../constant/colors'
import { cn } from '@/lib/utils'
import Rectangle from './rectangle'

type RenderProps = {
  data: any
  isConnectable: boolean
}

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: -5,
  zIndex: 10
}

export default function Render({ data, isConnectable }: RenderProps) {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const [isFocus, setIsFocus] = useState(false)
  const [size, setSize] = useState({
    width: 300,
    height: 300
  })

  useClickAnyWhere(() => {
    setIsFocus(false)
  })

  const handleFocusObject = () => {
    setIsFocus(true)
  }

  const handleResize = (event: ResizeDragEvent, params: ResizeParams) => {
    setSize({ width: params.width, height: params.height })
    console.log('size', size, params)
  }

  useEffect(() => {
    if (hoverRef) {
      handleFocusObject()
    }
  }, [])

  const RectangleMemo = useMemo(() => <Rectangle />, [])

  return (
    <div ref={hoverRef} className='w-full h-full'>
      {isHover && (
        <>
          <Handle
            type='source'  
            position={Position.Top}
            isConnectable={isConnectable}
            isConnectableEnd
            style={{ ...DEFAULT_HANDLE_STYLE }}
          />
          <Handle
            type='source'
            position={Position.Bottom}
            isConnectable={isConnectable}
            isConnectableEnd
            style={{ ...DEFAULT_HANDLE_STYLE }}
          />
          <Handle
            type='source'
            position={Position.Left}
            isConnectable={isConnectable}
            isConnectableEnd
            style={{ ...DEFAULT_HANDLE_STYLE }}
          />
          <Handle
            type='source'
            position={Position.Right}
            isConnectable={isConnectable}
            isConnectableEnd
            style={{ ...DEFAULT_HANDLE_STYLE }}
          />
        </>
      )}

      <NodeResizer
        isVisible={isFocus}
        onResize={handleResize}
        // minWidth={100}
        // minHeight={40}
        // keepAspectRatio={true}
        lineStyle={{
          border: `1px solid ${COLORS.RESIZE.LINE}`
        }}
        handleStyle={{
          background: COLORS.RESIZE.BG,
          border: `2px solid ${COLORS.RESIZE.LINE}`,
          width: 16,
          height: 16
        }}
      />

      <div className='absolute w-full h-full top-[-50px]'>Tools</div>

      {RectangleMemo}
    </div>
  )
}
