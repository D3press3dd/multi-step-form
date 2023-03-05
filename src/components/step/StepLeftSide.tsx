import leftBgDesktop from '@/assets/images/bg-sidebar-desktop.svg'
import styled from 'styled-components'

interface StepLeftSideProps {
  children: JSX.Element | JSX.Element[]
}

const LeftSide = styled.aside`
  min-height: 568px;
  width: 274px;
  background-color: var(--dark-blue);
  border-radius: 1rem;
  background-image: url(${leftBgDesktop});
  padding: 4rem;
`

export function StepLeftSide ({ children }: StepLeftSideProps): JSX.Element {
  return (
        <LeftSide role={'img'} aria-label={'a colorfull image background'}>{children}</LeftSide>
  )
}
