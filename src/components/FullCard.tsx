import { useState } from 'react'
import { Step } from '@/components/step/Step'
import { stepSectionInfo, stepsInfo } from '@/data/stepsInfo'
import { StepList } from '@/components/step/StepList'
import { StepLeftSide } from '@/components/step/StepLeftSide'

import styled from 'styled-components'
import { Title } from './Title'

const FullCardStyled = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`

const RightSide = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 3rem 6rem;
`

export function FullCard (): JSX.Element {
  const [step, setStep] = useState(1)
  const sectionPositionInArray = step - 1

  function handleStep (): void {
    if (step === 4) return
    setStep(prev => prev + 1)
  }

  return (
    <FullCardStyled>
      <StepLeftSide>
        <StepList>
          {stepsInfo.map(singleStep => {
            return (
              <Step
                key={singleStep.step}
                step={singleStep.step}
                info={singleStep.info}
                isCurrentStep={step === singleStep.step}
              />
            )
          })}
        </StepList>
      </StepLeftSide>

      <RightSide>
        <div>
          <Title>{stepSectionInfo[sectionPositionInArray].title}</Title>
          <p>{stepSectionInfo[sectionPositionInArray].subtitle}</p>
        </div>
      </RightSide>
      <button onClick={handleStep}>Next step</button>
    </FullCardStyled>
  )
}
