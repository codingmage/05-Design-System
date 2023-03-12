import { TooltipPortal, TooltipProvider } from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import { Content, EmptyTrigger, Root, TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipProvider> {
  delay?: number
  tooltipSide?: 'bottom' | 'left' | 'right' | 'top'
}

export function Tooltip({ delay, tooltipSide }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipProvider>
        <Root delayDuration={delay}>
          <EmptyTrigger>
            <Button>Tooltip test</Button>
          </EmptyTrigger>
          <TooltipPortal>
            <Content sideOffset={6} side={tooltipSide} avoidCollisions={false}>
              <Text> Hello there</Text>
            </Content>
          </TooltipPortal>
        </Root>
      </TooltipProvider>
    </TooltipContainer>
  )
}

Tooltip.displayname = 'Tooltip'
