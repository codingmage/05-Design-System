/* import * as Toast from '@radix-ui/react-toast' */
import { styled } from '../../styles'
import { ToastContainer } from 'react-toastify'

/* export const ToastContainer = styled(Toast.Provider, {
  boxSizing: 'border-box',
  display: 'flex',
}) */

export const StyledContainer = styled(ToastContainer, {
  '.Toastify__toast': {
    backgroundColor: '$gray600',
  },

  '.Toastify__progress-bar': {
    backgroundColor: '$ignite500',
  },
})

export const AlertText = styled('div', {
  p: {
    color: '$white',
  },

  'p:last-of-type': {
    color: '$gray200',
  },
})

/* Radix-ui

export const ToastRoot = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '$80',
  height: '$20',
  backgroundColor: '$gray600',
  borderRadius: '$md',
})

export const Title = styled(Toast.Title, {
  fontSize: '$xl',
  color: '$white',
})

export const Description = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
})

export const CloseButton = styled(Toast.Close, {
  color: '$gray200',
  width: '$4',
  position: 'absolute',
  marginTop: 'auto',
  marginRight: '0',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
}) */
