import styled from 'styled-components'

interface StepListProps {
  children: JSX.Element | JSX.Element[]
}

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export function StepList ({ children }: StepListProps): JSX.Element {
  return (
        <List>
            {children}
        </List>
  )
}
