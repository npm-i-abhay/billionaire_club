import React from 'react'

// custom provider built for changing themes
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'

// styled component imports
import { Wrapper,Heading,Body } from './styles'


// data imports 
import { BodyTxt } from '@/props'

export const HeadingBody = () => {
    const {theme}= useTheme()
    const themer = comp_theme[theme]

  return (
    <Wrapper>
        <Heading>
            Collections
        </Heading>

        <Body txtCol={themer.txt}>
            {BodyTxt}
        </Body>
    </Wrapper>
  )
}
