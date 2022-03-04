import React, {useState,useEffect} from 'react'
import {BiUpArrow} from 'react-icons/bi'
// custom provider made for switching light and dark mode
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'

// styled component imports
import { 
  NavWrapper,
  LinksRow,
  Links,
  Logo,
  LinkContainer,
  Icon
} from './styles'

// component imports
import { MyButton } from '../Button' //importing button from components

// data imports
import { NavLinks } from '@/props'


export const NavigationDesktop = () => {
  const {theme}= useTheme()
  const themer = comp_theme[theme]

  // States for detecting active links
  const [clicked, setClicked] = useState(0)

  // handler function to change the state
  const handleClick = (i)=>
  {
    setClicked(i)
    // setting the state of clicked to the link that was clicked on. Always starts by default
    console.log(clicked)
  }


  return (
    <NavWrapper bgCol={themer.nav} >
        <Logo src='/graphics/logo.png' /> 
        <LinksRow>
          {/* mapping the navigation data. No routes available at the time but following best practices  */}
          {NavLinks.map((o,i)=>(
            <LinkContainer key={i} >
              <Links
                onClick={()=>handleClick(i,o)} 
                
                txtCol={clicked == i?themer.purple:themer.txt}//checking if the index of link that was clicked on is equal to the value of clicked
                > 
                    {o.name} 
                </Links>
                <Icon display={clicked == i? 'inline':'none'} >
                    <BiUpArrow color={themer.purple} />
                </Icon>
            </LinkContainer>
            
            ))}

              
          <MyButton/>
        </LinksRow>
    </NavWrapper>
  )
}
