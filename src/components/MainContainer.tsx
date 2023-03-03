import styled from 'styled-components'

interface MainProps {
  children: JSX.Element | JSX.Element[]
}
const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 140px 334px;
`

export function MainContainer ({ children }: MainProps): JSX.Element {
  return (
        <Main>{children}</Main>
  )
}
