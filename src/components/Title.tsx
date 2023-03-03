import styled from 'styled-components'
interface TitleProps {
  children: string
}

const TitleStyled = styled.h1`
    color: var(--dark-blue);
    font-family: Ubuntu;
    font-size: 700;
`

export function Title ({ children }: TitleProps): JSX.Element {
  return (
        <TitleStyled>{children}</TitleStyled>
  )
}
