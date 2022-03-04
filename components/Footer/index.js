import React from 'react'
import {AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'

// custom provider made for switching light and dark mode
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'

// styled component imports
import { 
  FooterWrapper,
  LinksRow,
  Links,
  Logo,
  IconsRow
} from './styles'

// data imports
import { FooterLinks } from '@/props'


export const Footer = () => {
  const {theme}= useTheme()
  const themer = comp_theme[theme]
// declaring variable to connect the provider

  return (
    
    <FooterWrapper  >
        <LinksRow>
            <Logo src='/graphics/logo.png' /> 
            {FooterLinks.map((o,i)=>(
            <Links key={i} txtCol={themer.accentTxt} > {o.name} </Links>
        ))}
        </LinksRow>
        
        <IconsRow>
            <AiFillInstagram color='white'size={30} />
            <AiOutlineTwitter color='white'size={30} />
            <FaDiscord color='white'size={30} />
        </IconsRow>
        
    </FooterWrapper>
  )
}
