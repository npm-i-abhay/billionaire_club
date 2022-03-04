import React from 'react'

// styled component imports
import { Wrapper } from './styles'

// component imports
import { HeroImage } from '../HeroImage'
import { HeroInfo } from '../HeroInfo'

export const HeroContainer = () => {
  return (
    <Wrapper>
        <HeroImage/>
        <HeroInfo/>
    </Wrapper>
  )
}
