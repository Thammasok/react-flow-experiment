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

const initialNodes = [
  { id: '1', position: { x: 100, y: 0 }, data: { label: 'Actions' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: 'APIs Name' } },
  { id: '3', position: { x: 100, y: 200 }, data: { label: 'Database Name' } }
]
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: 'POST', type: 'step' },
  { id: 'e2-3', source: '2', target: '3', label: 'Query', type: 'step' }
]

type ContentProps = {}

export default function Content(props: ContentProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

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
        defaultViewport={{ x: 400, y: 100, zoom: 2 }}
      >
        <Controls />
        <MiniMap />
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}