import React, { useEffect, useRef, useState } from 'react'

type RectangleProps = {}

export default function Rectangle({}: RectangleProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [size, setSize] = useState({
    width: 0,
    height: 0
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
      {/* <rect
        x='0'
        y='0'
        width={size.width}
        height={size.height}
        rx='16'
        ry='16'
        // fill='rebeccapurple'
      ></rect> */}

      <rect
        x='1'
        y='1'
        width={size.width > 0 ? `${size.width}px` : '100%'}
        height={size.height > 0 ? `${size.height}px` : '100%'}
        rx='24'
        stroke='black'
        strokeWidth='1'
      />
    </svg>
  )
}
