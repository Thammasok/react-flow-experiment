import { CSSProperties } from 'react'

export type NodeTypes = {
  id: string
  type: string
  position: NodePositionType
  data?: NodeDataType | NodeImageDataType
  style?: CSSProperties
}

type NodePositionType = {
  x: number
  y: number
}

type NodeDataType = {
  label: string
}

type NodeImageDataType = {
  url: string
  alt: string
  width: number
  height: number
}
