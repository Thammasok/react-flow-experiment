import { TooltipProvider } from '@/components/ui/tooltip'
import Content from './content'
import Tools from './tools'

export default function Editor() {
  return (
    <TooltipProvider>
      <Tools />
      <Content />
    </TooltipProvider>
  )
}
