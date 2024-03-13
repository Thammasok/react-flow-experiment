import React, { useEffect, useRef, useState } from 'react'
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

type RectangleProps = {}

export default function Rectangle({}: RectangleProps) {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const [isFocus, setIsFocus] = useState(false)
  const [size, setSize] = useState({
    width: 300,
    height: 800
  })

  useClickAnyWhere(() => {
    setIsFocus(false)
  })

  const handleFocusObject = () => {
    setIsFocus(true)
  }

  const handleResize = (event: ResizeDragEvent, params: ResizeParams) => {
    setSize({ width: params.width, height: params.height })
    renderSvg({ width: params.width, height: params.height })
  }

  useEffect(() => {
    if (hoverRef) {
      renderSvg()
      handleFocusObject()
    }
  }, [])

  const renderSvg = ({
    width = size.width,
    height = size.height
  }: { width?: number; height?: number } = {}) => {
    const element = document.querySelector('#rectangle')

    if (element) {
      document.querySelector('#rectangle > svg')?.remove()
      const svgElement =
        document.querySelector('#rectangle > svg') ??
        element.appendChild(
          document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        )
      svgElement.setAttribute('width', '100%')
      svgElement.setAttribute('height', '100%')

      const rect =
        document.querySelector('#rectangle > svg > rect') ??
        svgElement.appendChild(
          document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        )
      rect?.setAttribute('width', width.toString())
      rect?.setAttribute('height', height.toString())
      rect?.setAttribute('fill', 'rebeccapurple')
      rect?.setAttribute('rx', '15')
      rect?.setAttribute('x', '0')
      rect?.setAttribute('y', '0')
    }
  }

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
        onResize={handleResize}
        minWidth={100}
        minHeight={40}
        // keepAspectRatio={true}
        lineStyle={{ border: `1px solid ${COLORS.resize.line}` }}
        handleStyle={{
          background: COLORS.resize.dot,
          border: `2px solid ${COLORS.resize.dot}`,
          width: 10,
          height: 10
        }}
      />

      <div className='absolute w-full h-full top-[-50px]'>Tools</div>

      <div id='rectangle'></div>
      {/* 
      <svg id='rectangle' xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0'
          y='0'
          // width={size.width}
          // height={size.height}
          rx='15'
          fill='rebeccapurple'
        ></rect>
      </svg> */}

      {/* <div
        className={cn(
          'p-2 rounded-md border w-full h-full',
          'bg-white border-[#b0b0b0]',
          'flex justify-center items-center align-middle'
        )}
      >
        Rectangle
      </div> */}
    </div>
  )
}
