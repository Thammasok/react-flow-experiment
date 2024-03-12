import {
  BaseEdge,
  getBezierPath,
  EdgeLabelRenderer,
  getStraightPath
} from 'reactflow'

type CustomEdgeProps = {
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
}
export function CustomEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  ...props
}: CustomEdgeProps) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY
  })

  const [edgePath, labelX, labelY] = getBezierPath(props)

  return (
    <>
      <BaseEdge path={edgePath} {...props} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            background: '#ffcc00',
            padding: 10,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 700
          }}
          className='nodrag nopan'
        >
          {data.label}
        </div>
      </EdgeLabelRenderer>
    </>
  )
}
