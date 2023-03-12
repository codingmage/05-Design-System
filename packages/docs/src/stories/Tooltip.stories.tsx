import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@codingmage-ignite-ds/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    tooltipSide: 'top',
  },
  argTypes: {
    tooltipSide: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    tooltipSide: 'top',
  },
}
