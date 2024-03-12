import React from 'react'
import Image from 'next/image'

type ImageNodeProps = {
  data: {
    url: string
    alt: string
    width: number
    height: number
  }
}

export default function ImageNode({ data }: ImageNodeProps) {
  return (
    <div>
      <Image
        src={data.url}
        alt={data.alt}
        width={data.width}
        height={data.height}
      />
    </div>
  )
}
