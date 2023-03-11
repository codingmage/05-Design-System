import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@codingmage-ignite-ds/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {},
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    duration: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    subtitle: 'Quarta-feira, 23 de Outubro às 16h',
    duration: 5000,
  },
}
