import React from 'react'

// styled components imports
import { ButtonWrapper } from './styles'

export const MyButton = (
    {
        height='50px',
        width='150px',
        txt="Join our Discord"
    }
    // defining props for the button so it can be reused in other components or pages
) => {


return (
    <ButtonWrapper 
        height={height}
        width = {width} >
        {txt}
    </ButtonWrapper>
)
}
