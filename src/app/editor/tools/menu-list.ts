import {
  CableIcon,
  DatabaseIcon,
  ImageIcon,
  MousePointerClickIcon,
  MousePointerIcon,
  RouteIcon,
  SquareIcon,
  StickyNoteIcon
} from 'lucide-react'

import { TOOLS } from '@/app/editor/constant'

export const MenuList = [
  {
    key: TOOLS.MOVE,
    title: 'Move',
    icon: MousePointerIcon
  },
  {
    key: TOOLS.ACTION,
    title: 'Actions',
    icon: MousePointerClickIcon
  },
  {
    key: TOOLS.RECTANGLE,
    title: 'Rectangle',
    icon: SquareIcon
  },
  {
    key: TOOLS.IMAGE,
    title: 'Image',
    icon: ImageIcon
  },
  {
    key: TOOLS.STICKY_NOTE,
    title: 'Sticky Note',
    icon: StickyNoteIcon
  },
  {
    key: TOOLS.FLOW,
    title: 'Flows',
    icon: RouteIcon
  },
  {
    key: TOOLS.CONNECTOR,
    title: 'APIs Connects',
    icon: CableIcon
  },
  {
    key: TOOLS.DATASTORE,
    title: 'Database',
    icon: DatabaseIcon
  }
]
