import { ComponentProps } from 'react'
import { Button } from '../Button'
import {
  AlertText,
  StyledContainer,
  /*   CloseButton,
  Description, 
    Title,
  ToastContainer,
  ToastRoot,
  Viewport, */
} from './styles'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Text } from '../Text'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  subtitle: string
  duration: number
}

export function Toast({ title, subtitle, duration }: ToastProps) {
  return (
    <div>
      <Button
        onClick={() => {
          toast(
            <AlertText>
              <Text size={'lg'}>{title}</Text>
              <Text size={'sm'}>{subtitle}</Text>
            </AlertText>,
            {
              theme: 'dark',
              position: toast.POSITION.BOTTOM_RIGHT,
            },
          )
        }}
      >
        Click me
      </Button>
      <StyledContainer autoClose={duration} />
    </div>
    /*     Radix-ui:
    <ToastContainer swipeDirection="right">
      { <Button onClick={}} >Click me!</Button> useState from React
      <ToastRoot>
        <Title>Agendamento realizado</Title>
        <Description>Quarta-feira, 23 de Outubro às 16h</Description>
        <CloseButton>X</CloseButton>
      </ToastRoot>
      <Viewport />
    </ToastContainer> */
  )
}

Toast.displayname = 'Toast'
