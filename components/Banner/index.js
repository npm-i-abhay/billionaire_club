import React from 'react'
// custom provider built for changing themes
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'

// styled component imports
import { 
    BannerWrapper,
    Info,
    Ticket,
    Image,
    Heading,
    Body,
    CTA
} from './styles'


export const Banner = ({txt='The Golden Guests'}) => {
    const {theme}= useTheme()
    const themer = comp_theme[theme]

return (
    <BannerWrapper>
        <Info>
            <Heading txtCol={themer.gold} >
                {txt}
            </Heading>
            <Body txtCol={themer.txt}>
            The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the regular collection.
            </Body>
            <CTA>Join us to register for the Presale</CTA>
        </Info>
        <Ticket> 
            <Image alt='' src='/graphics/ticket.png' />
        </Ticket>
    </BannerWrapper>
)
}
