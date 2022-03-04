import React from 'react'
import {HiOutlineCursorClick} from 'react-icons/hi'
// custom provider built for changing themes
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'

// styled component imports
import { 
    Wrapper,
    Heading,
    Body, 
    BodyFlex, 
    MiniFlex, 
    Divider 
} from './styles'


// data imports 
import { BodyTxt } from '@/props'

export const Newsletter = (
    {
        heading="Get Aped With Us!",
        body =" Sign Up For Our NewsLetter"
    }
) => {
    const {theme}= useTheme()
    const themer = comp_theme[theme]

  return (
    <Wrapper>
        <Heading>
            {heading}
        </Heading>
        <BodyFlex>
            <MiniFlex>
                <Body txtCol={themer.txt}>
                    {body}
                </Body>
                <Divider></Divider>
            </MiniFlex>
            <HiOutlineCursorClick color='white' size={34} />
        </BodyFlex>
    </Wrapper>
  )
}
