import React, { useEffect, useRef, useState } from 'react'

type StickyNote2Props = {}

export default function StickyNote2({}: StickyNote2Props) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [size, setSize] = useState({
    width: 180,
    height: 180
  })

  useEffect(() => {
    if (svgRef && svgRef.current) {
      setSize({
        width: svgRef.current.clientWidth,
        height: svgRef.current.clientHeight
      })
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      width={size.width > 0 ? `${size.width + 2}px` : '100%'}
      height={size.height > 0 ? `${size.height + 2}px` : '100%'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <text x='0' y='0' fontSize='16' fontFamily='Arial' fill='#000'>
        Your text here
      </text>
      <rect
        x='2'
        y='2'
        width='180'
        height='180'
        rx='5'
        ry='5'
        fill='#F5DD61'
        stroke='#E4CC50'
        strokeWidth='1'
        style={{
          boxShadow:
            'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);'
        }}
      />

      {/* <path d='M10 10 L10 20 L20 20 L20 10 Z' fill='#FFD23F' /> */}
    </svg>
  )
}
