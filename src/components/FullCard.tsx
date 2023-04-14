import { useState } from 'react'
import styled from 'styled-components'

import { Step } from '@/components/step/Step'
import { stepSectionInfo, stepsInfo } from '@/data/stepsInfo'
import { StepList } from '@/components/step/StepList'
import { StepLeftSide } from '@/components/step/StepLeftSide'
import { Title } from '@/components/Title'
import { Subtitle } from '@/components/Subtitle'
import { Button } from '@/components/design-system/Button'

const FullCardStyled = styled.section`
  display: flex;
  width: 100%;
  background-color: var(--white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`

const RightSide = styled.aside`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 3rem 4rem;
  /* width: 100%; */
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBlockEnd: '2rem' }}>
          <Title>{stepSectionInfo[sectionPositionInArray]?.title}</Title>
          <Subtitle>
            {stepSectionInfo[sectionPositionInArray]?.subtitle}
          </Subtitle>
        </div>

        <div style={{ flexGrow: 1 }}>content</div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <button onClick={() => { setStep(prev => prev - 1) }}>chao</button>
          <Button onClick={handleStep} >Next step</Button>
        </div>
      </RightSide>
    </FullCardStyled>
  )
}
