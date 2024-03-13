import React from 'react'

type SvgRenderProps = {
  width: number
  height: number
}

export default function SvgRender({ width, height }: SvgRenderProps) {
  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='0'
        y='0'
        width={width}
        height={height}
        rx='15'
        fill='rebeccapurple'
      ></rect>
    </svg>
  )
}
