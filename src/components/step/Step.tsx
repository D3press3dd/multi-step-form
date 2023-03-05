import styled from 'styled-components'

interface StepPros {
  step: number
  info: string
  isCurrentStep: boolean
}

const StepContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem; 
`

const StepNumber = styled.p<{ $isCurrentStep: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 700;
    width: 5rem;
    height: 5rem;
    transition: all .3s ease-in;
    
    background-color: ${props => props.$isCurrentStep ? 'var(--pastel-blue)' : 'transparent'};
    color: ${props => props.$isCurrentStep ? 'var(--dark-blue)' : 'var(--pastel-blue)'};
    outline: ${props => props.$isCurrentStep ? 'transparent' : '2px solid var(--pastel-blue)'};
`

const StepInfo = styled.p`
    text-transform: uppercase;
    color: var(--white);
    font-weight: 700;
`

const StepTitle = styled(StepInfo)`
    color: var(--dark-gray);
`

export function Step ({ step, info, isCurrentStep }: StepPros): JSX.Element {
  function handleIsCurrent (id: number): void {
    console.log(id)
  }
  return (
        <StepContainer onClick={() => { handleIsCurrent(step) }}>
            <div>
                <StepNumber $isCurrentStep={isCurrentStep}>{step}</StepNumber>
            </div>
            <div>
                <StepTitle>step {step}</StepTitle>
                <StepInfo>{info}</StepInfo>
            </div>
        </StepContainer>
  )
}
