import styled from 'styled-components'

interface SubtitleProps {
  children: string
}

const SubtitleStyled = styled.p`
    color:var(--dark-gray);
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.2rem;
`

export function Subtitle ({ children }: SubtitleProps): JSX.Element {
  return (
        <SubtitleStyled>{children}</SubtitleStyled>
  )
}
