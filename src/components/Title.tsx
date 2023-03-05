import styled from 'styled-components'
interface TitleProps {
  children: string
}

const TitleStyled = styled.h1`
    color: var(--dark-blue);
    font-family: Ubuntu;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 3.4rem;
    
`

export function Title ({ children }: TitleProps): JSX.Element {
  return (
        <TitleStyled>{children}</TitleStyled>
  )
}
