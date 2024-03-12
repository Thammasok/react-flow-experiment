'use client'

import React, { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow'

import 'reactflow/dist/style.css'
import StickyNote from './nodes/sticky-note'
import ImageNode from './nodes/image'

const initialNodes = [
  { id: '1', position: { x: 100, y: 0 }, data: { label: 'Actions' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: 'APIs Name' } },
  { id: '3', position: { x: 100, y: 200 }, data: { label: 'Database Name' } },
  {
    id: '5',
    type: 'image',
    position: { x: 300, y: 100 },
    data: {
      url: 'https://cdn.dribbble.com/userupload/12827281/file/original-bf5071d8a8b3d9cf18f39bc80ee6e235.jpg',
      alt: 'img',
      width: 400,
      height: 400
    }
  },
  {
    id: '4',
    type: 'stickyNote',
    position: { x: 300, y: 300 },
    data: {
      text: 'Our interior design experts work with you to create the space that you have been dreaming about.'
    }
  }
]
const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'POST',
    type: 'step',
    animated: true
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    label: 'Query',
    type: 'smoothstep',
    animated: true
  }
]

type ContentProps = {}

export default function Content(props: ContentProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  // Custom Nodes
  const nodeTypes = { stickyNote: StickyNote, image: ImageNode }

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className='bg-gray-100 h-screen w-screen'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: 400, y: 100, zoom: 2 }}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}
