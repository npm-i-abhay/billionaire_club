import React, {useEffect,useState} from 'react'

// custom provider built for changing themes
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'

// styled components imports
import { 
    InfoWrapper, 
    MainHead, 
    GraphicCont,
    MainHeadContainer,
    SubHead,
    SubHeadContainer,
    Row,
    Body,
    Email,
    InputContainer
} from './styles'
import { MyButton } from '../Button'


export const HeroInfo = () => {
const {theme}= useTheme()
const themer = comp_theme[theme]

const [sWidth, setSwidth] = useState(0)
// useEffect detecting screen size to manage responsiveness and generate components dynamically
  useEffect(()=>{
    
    setSwidth(window.innerWidth)
    window.onresize=()=>{setSwidth(window.innerWidth)}
    console.log(sWidth)
    window.onload=()=>{setSwidth(window.innerWidth)}
      // detecting when the screen resizes
},[ sWidth])

return (
    <InfoWrapper>
        <Row direction='column'>
            <MainHeadContainer>
                <MainHead txtCol={themer.txt} >
                    EXCLUSIVE
                </MainHead>
                {sWidth >=600 &&
                    <GraphicCont src='/graphics/textAccent.png' />
                
                }
            </MainHeadContainer>
            
            <SubHeadContainer>
                <SubHead>
                    Newest NFT Release
                </SubHead>
            </SubHeadContainer>
        </Row>
            
        <Row>

            <Body
                width='80%'
                txtCol={themer.txt} > {/* using provider variables for txt colors*/}
                The <b>BILLIONAIRE CLUB</b> is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPF.
            </Body>
            <Body txtCol='#8D31FF' >
                Reveal on October 20th
            </Body>
            <InputContainer>
                <Email txtCol={themer.txt} placeholder='your@email.com' type='input' />
                <MyButton txt='Register'/>
            </InputContainer>
            

        </Row>

    </InfoWrapper>

)
}
