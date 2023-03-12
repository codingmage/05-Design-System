import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const Root = styled(Tooltip.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const EmptyTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

export const Content = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  padding: '$2',
  backgroundColor: '$gray900',
  borderRadius: '$md',
})

export const Teste = styled('div', {
  width: 300,
  height: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const TooltipContainer = styled('div', {
  width: 1200,
  height: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
