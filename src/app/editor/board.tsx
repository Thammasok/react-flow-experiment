'use client'

import React, { useCallback, useRef } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  updateEdge,
  NodeChange,
  EdgeChange,
  Connection,
  Edge
} from 'reactflow'

import 'reactflow/dist/style.css'
// import StickyNote from '@/app/editor/nodes/sticky-note'
import StickyNote2 from '@/app/editor/nodes/sticky-note2'
import ImageNode from '@/app/editor/nodes/image'
import Rectangle from '@/app/editor/nodes/rectangle'
import Ellipse from '@/app/editor/nodes/ellipse'
import { NodeTypes } from './type'
import useMousePosition from './hooks/use-mouse-position'

const initialNodes = [
  {
    id: '1',
    type: 'default',
    position: { x: 100, y: 0 },
    data: { label: 'Actions' }
  },
  {
    id: '2',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { label: 'APIs Name' }
  },
  {
    id: '3',
    type: 'default',
    position: { x: 100, y: 200 },
    data: { label: 'Database Name' }
  },
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
      label:
        'Our interior design experts work with you to create the space that you have been dreaming about.'
    }
  },
  {
    id: '6',
    type: 'rectangle',
    data: { label: 'Custom Resize Icon' },
    position: { x: -200, y: 300 },
    style: {
      background: '#fff',
      fontSize: 12,
      border: '1px solid black',
      padding: 5,
      borderRadius: 12,
      height: 100,
      width: 200,
      textAlign: 'center'
    }
  },
  // {
  //   id: '6',
  //   type: 'rectangle',
  //   position: { x: 400, y: 300 },
  //   data: {
  //     label: 'Our interior design experts work with you to create the space that you have been dreaming about.'
  //   }
  // },
  {
    id: '7',
    type: 'ellipse',
    position: { x: 400, y: 300 },
    data: {
      label:
        'Our interior design experts work with you to create the space that you have been dreaming about.'
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

type ContentProps = {
  selected: string | null
}

// Custom Nodes
const nodeTypesLists = {
  rectangle: Rectangle,
  ellipse: Ellipse,
  stickyNote: StickyNote2,
  image: ImageNode
}

export default function Board({ selected }: ContentProps) {
  const edgeUpdateSuccessful = useRef(true)
  const mousePosition = useMousePosition()

  const [nodes, setNodes] = useNodesState(initialNodes)
  const [edges, setEdges] = useEdgesState([])

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )

  const onConnect = useCallback(
    (connection: Edge | Connection) => {
      setEdges((els) => addEdge(connection, els))
    },
    [setEdges]
  )

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false
  }, [])

  const onEdgeUpdate = useCallback((oldEdge: any, newConnection: any) => {
    edgeUpdateSuccessful.current = true
    setEdges((els) => updateEdge(oldEdge, newConnection, els))
  }, [])

  const onEdgeUpdateEnd = useCallback((_: any, edge: { id: string }) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id))
    }

    edgeUpdateSuccessful.current = true
  }, [])

  return (
    <div
      className='bg-gray-100 h-screen w-screen'
      style={{ cursor: selected ? 'crosshair' : 'default' }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        onConnect={onConnect}
        nodeTypes={nodeTypesLists}
        defaultViewport={{ x: 400, y: 100, zoom: 1 }}
        snapToGrid
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}
